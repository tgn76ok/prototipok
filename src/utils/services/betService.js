const jogoService = require("./jogoService")
const Bet = require('../../models/bet')
const Jogos = require('../../models/jogo')


exports.getAllBets = async () => {
    try {
        const bet = Bet.findAll(
            {
                attributes:[
                    'id'  ,   
                    'name' ,
                ]
            }
        )
        return bet
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.getBetsByJogo = async (id) => {
    try{
        // const nomeTimes = await jogoService.getJogoById(id)

        // const query = 'SELECT * FROM bets WHERE time_casa = $1 AND time_fora = $2'
        const jogoBet = await Jogos.findAll({
            where:{
               id:id
            },
            attributes:[
                'id'  ,   
                'time_casa' ,
                'time_fora' ,

            ],


        }).catch(err =>{
            console.error(err);
          });
        console.log(jogoBet)

        const bets = await Bet.findAll({
            where:{
                id_jogo:jogoBet[0].id
            },
            attributes:[
                'id'  ,   
                'time_casa' ,
                'time_fora' ,
                'casa_odd',
                'empate_odd',
                'fora_odd',
                'ambos_marcam_sim_odd',
                'ambos_marcam_nao_odd',
                'gol_mais15_odd',
                'gol_menos15_odd'

            ],
        })

        // const values = [nomeTimes.time_casa, nomeTimes.time_fora]
        // const result = await pool.query(query, values)

        // const bets = result.rows.map(row => ({
        //     id_bet: row.id_bet,
        //     time_casa: row.time_casa,
        //     time_fora: row.time_fora,
        //     casa_odd: row.casa_odd,
        //     empate_odd: row.empate_odd,
        //     fora_odd: row.fora_odd,
        //     bethouse: row.bethouse,
        //     bet_url: row.bet_url
        // }));
        return bets

    } catch (error){
        throw new Error(error.message)
    }
}

exports.searchDB = async(valor) => {
    try {
        // pesquisar pela casa time ,de fora ou casa por vez
        const queryBusca = `
        SELECT * FROM bets WHERE time_casa LIKE '%${valor}%' OR time_fora LIKE '%${valor}%' OR bethouse LIKE '%${valor}%';
        `

        const result = await pool.query(queryBusca)
        return result.rows.map(row => ({
            id_bet: row.id_bet,
            time_casa: row.time_casa,
            time_fora: row.time_fora,
            casa_odd: row.casa_odd,
            empate_odd: row.empate_odd,
            fora_odd: row.fora_odd,
            bethouse: row.bethouse,
        }));
    } catch (error) {
        throw new Error(error.message)
    }
}
