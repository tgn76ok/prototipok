const WebSocket = require('ws');
const createSubscriber = require('pg');
const tls = require('tls');
const fs = require('fs');
const path = require('path');

const user = process.env.DATABASE_USERNAME
const password = process.env.DATABASE_PASSWORD
const host = process.env.DATABASE_HOST
const port = process.env.DATABASE_PORT
const database = process.env.DATABASE

process.env.DATABASE_URL = `postgres://${user}:${password}@${host}:${port}/${database}?sslmode=require`
const channel = 'webhook_channel';


const parentDir = path.resolve(__dirname, '..');

console.log(parentDir+'/ca-certificate.crt');

const ca = fs.readFileSync(parentDir+'/ca-certificate.crt');


const subscriber =new createSubscriber.Client({ connectionString: process.env.DATABASE_URL,ssl: {
    ca: ca,
    rejectUnauthorized: false,
}
 });

 console.log(subscriber)
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
    });
});

function handleWebhookNotifications(subscriber) {
    subscriber.notifications.on(channel, async (payload) => {
        wss.clients.forEach(function each(client) {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(payload));
                }
            });


    });
}

subscriber.events.on('error', (error) => {
    console.error('Fatal database connection error:', error);
    process.exit(1);
});

process.on('exit', () => {
    subscriber.close();
});

async function setupSubscriber(){
    try{
        await subscriber.connect()
        await subscriber.listenTo(channel)
    } catch (error){
        console.error('Failed to set up subscriber: ', error)
        process.exit(1)
    }
}

setupSubscriber();


module.exports = { wss, handleWebhookNotifications, subscriber};
