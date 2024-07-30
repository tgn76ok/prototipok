const jogoService = require('../utils/services/jogoService');
const { determinarRodadaAtual ,filtrarRodadasFuturas} = require('../utils/services/Rodada');
const { Op } = require('sequelize');

const Jogos = require('../models/jogo')
const Times = require('../models/Times')

exports.getJogos = async (req, res) => {
    try{
    
        const rodadaAtual = filtrarRodadasFuturas();

        const liga = req.query.liga
        const rodada = req.query.rodada

        
        const jogos =await Jogos.findAll(
            { where: {
                casa_odd_maior: { [Op.gt]: 0 },
                empate_odd_maior: { [Op.gt]: 0 },
                fora_odd_maior: { [Op.gt]: 0 },
                id_liga:liga || 71,
                rodada:rodada || [(rodadaAtual[0].numero -1),rodadaAtual[0].numero,rodadaAtual[1].numero]
              
              },
              order:[['rodada','ASC'], ['data','ASC'], ['hora', 'ASC']],
                attributes:[
                    'id'  ,  
                    'data'  ,
                    'hora'  , 
                    'time_casa' ,    
                    'time_fora',     
                    'casa_odd_maior'  ,   
                    'empate_odd_maior'  , 
                    'fora_odd_maior'  ,
                    'ambos_marcam_sim_odd_maior'  ,
                    'ambos_marcam_nao_odd_maior'  ,
                    'gol_mais15_odd_maior'  ,
                    'gol_menos15_odd_maior'  ,
                    'rodada',
                ],
                include:[{
                    model:Times,
                    as: 'url_casa',
                    attributes:[['logo_url','url_casa']]
                },{
                    model:Times,
                    as: 'url_fora',
                    attributes:[['logo_url','url_fora']]
                }]
            }
        ).catch(err =>{
            console.log(err);
        res.status(500).json({error: err.message})

          });
    
        
        res.status(200).json({data: jogos})
    } catch(error){
        res.status(500).json({error: error.message})
    }
};



exports.getJogoById = async (req, res) => {
    try{
        const jogos = await jogoService.getJogoById(req.params.id)
        res.status(200).json({data: jogos})
    } catch(error){
        res.status(500).json({error: error.message})
    }
}

exports.getJogoByIdHighestOdds = async(req, res) => {
    try{
        const jogos = await jogoService.getJogoByIdHighestOdds(req.params.id, req.params.tipoOdd)
        res.status(200).json({data: jogos})
    } catch(error){
        res.status(500).json({error: error.message})
    }
}


exports.getSearchDB = async(req, res) => {

    try {          
        const rodadaAtual = filtrarRodadasFuturas();
        const rodada = req.query.rodada
        const busca = await Jogos.findAll({
            where: {casa_odd_maior: { [Op.gt]: 0 },
                    empate_odd_maior: { [Op.gt]: 0 },
                    fora_odd_maior: { [Op.gt]: 0 },
                    rodada:rodada ||[rodadaAtual[0].numero,rodadaAtual[1].numero],
                
                [Op.or]:[
                    { 
                        time_casa: {
                            [Op.like]: `%${req.body.nomeTime }%`
                      } 
                    },
                    { 
                        time_fora: 
                        {
                            [Op.like]: `%${req.body.nomeTime }%`
                    } 
                     }]
                
                
              },
        attributes:[
            'id'  ,   
            'time_casa' ,
            'time_fora' ,

        ],
        include:[{
            model:Times,
            as: 'url_casa',
            attributes:[['logo_url','url_casa']]
        },{
            model:Times,
            as: 'url_fora',
            attributes:[['logo_url','url_fora']]
        }]
    }
).catch(err =>{
    console.log(err);
res.status(500).json({error: err.message})


    }).catch(err =>{
        console.error(err);
      });

        res.status(200).json({data: busca})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
