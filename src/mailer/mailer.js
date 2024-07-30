const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const mailConfig = require("../config/mail")

const options = {
  viewEngine: {
    partialsDir: __dirname + "/views/partials",
    layoutsDir: __dirname + "/views/layouts",
    extname: ".hbs"
  },
  extName: ".hbs",
  viewPath: __dirname + "/views/"
};

const transporter = nodemailer.createTransport({
  host: mailConfig.host,
  port: mailConfig.port,
  secure: mailConfig.secure,
  auth: {
    user: mailConfig.user,
    pass: mailConfig.pass
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },  
});

transporter.use('compile', hbs(options));

const sendMail = async (to, subject, message, template, context, cb) => {
  const mailOptions = {
    from: mailConfig.user,
    to: to,
    subject: subject,
    text: message,
    template: template,
    context: context
  };
  
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.error(error);
      cb(error, null);
    } else {
      console.log(info.response);
      cb(null, info.response);
    }
  });
}

const sendMailPromise = (to, subject, message, template,context,  filename, path) => {
  return new Promise((resolve, reject) => {

    const mailOptions = {               
      from: mailConfig.user,
      to: to,
      subject: subject,
      text: message,
      template: template,
      
      context: context,
      attachments: [
        {   // file on disk as an attachment
            filename: filename,
            path: path // stream this file
        },
      ]
    };

    resolve(transporter.sendMail(mailOptions));
  })
}

module.exports = sendMail;
module.exports = sendMailPromise;