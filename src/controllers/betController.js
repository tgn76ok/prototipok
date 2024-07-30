const betService = require('../utils/services/betService');

const Bet = require('../models/bet')
const Jogos = require('../models/jogo')
const Bethouses = require('../models/bethouses')



exports.getAllBets = async (req, res) => {
    try {
        const bets = await betService.getAllBets()
        res.status(200).json({data: bets})
    } catch (error) {
        res.status(500).json({error: error.message })
    }
};

exports.getBetsByJogo = async  (req, res) => {
    try {
        const bets = await betService.getBetsByJogo(req.params.id)
        res.json({data: bets})
    } catch (error) {
        res.status(500).json({error: error.message })
    }
};


exports.getBetsByJogo = async  (req, res) => {
    try {

        console.log(req.originalUrl)
        const ultimaBarraIndex = req.originalUrl.lastIndexOf('/');
        let tipo = req.originalUrl.slice(ultimaBarraIndex + 1);
        console.log(tipo)

        const tiposPermitidos = ['casa', 'empate', 'fora', 'ambos_marcam_sim', 'ambos_marcam_nao', 'gol_mais15', 'gol_menos15'];

        if (!tiposPermitidos.includes(tipo)) {
            tipo = 'casa';
}

        const jogoBet = await Jogos.findAll({

            where:{
               id:req.params.id
            },
            attributes:[
                'id'  ,   
                'time_casa' ,
                'time_fora' ,

            ],
        }).catch(err =>{
            console.log(err);
          });


        const bets = await Bet.findAll({
            where: {
                id_jogo:jogoBet[0].id
                
              },
            attributes:[
                'id',
                'id_jogo',
                'id_bethouse',
                'casa_odd',
                'empate_odd',
                'fora_odd',
                'ambos_marcam_sim_odd',
                'ambos_marcam_nao_odd',
                'gol_mais15_odd',
                'gol_menos15_odd',

            ],
            include:[{
                model:Bethouses,
                as: "bethouse",
                attributes:['nome', 'bethouse_url'] // Especifique o alias aqui
            }],
            order:[[`${tipo}_odd`,'DESC']]

        })
        const newbets = bets.map(element => {
            return {...element.dataValues,time_casa:jogoBet[0].time_casa,time_fora:jogoBet[0].time_fora}
        });

        res.json({data: newbets})
    } catch (error) {
        res.status(500).json({error: error.message })
    }
};
