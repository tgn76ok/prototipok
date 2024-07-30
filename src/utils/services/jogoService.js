const { Pool } = require('pg');
const betService = require('./betService')
const Jogos = require('../../models/jogo')


exports.getJogos = async () => {
    try {
        const jogos = Jogos.findAll(
            {
                attributes:[
                    'id_jogo'  ,   
                    'time_casa' ,    
                    'time_fora',     
                    'casa_odd_maior'  ,   
                    'empate_odd_maior'  , 
                    'fora_odd_maior'  ,   
                    'ambos_marcam_sim_odd_maior'  ,
                    'ambos_marcam_nao_odd_maior'  ,
                    'gol_mais15_odd_maior'  ,
                    'gol_menos15_odd_maior'  ,
                ]
            }
        )

        return jogos
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.getJogoById = async (id) => {
    try {
        const jogos = Jogos.findAll(
            {
                where:{
                    id_jogo:id
                },
                attributes:[
                    'id_jogo'  ,   
                    'time_casa' ,    
                    'time_fora',     
                    'casa_odd_maior'  ,   
                    'empate_odd_maior'  , 
                    'fora_odd_maior'  ,   
                    'ambos_marcam_sim_odd_maior'  ,
                    'ambos_marcam_nao_odd_maior'  ,
                    'gol_mais15_odd_maior'  ,
                    'gol_menos15_odd_maior'  ,
                ]
            }
        )
        if (jogos.length === 0) {
            throw new Error('Jogo não encontrado')
        }

        return jogos
    } catch (error) {
        throw new Error(error.message)
    }

    
}

exports.getJogoByIdHighestOdds = async (id, odd) => {
    try {
        const bets = await betService.getBetsByJogo(id)
        const filtrar = bets.sort((a,b)=>Number(a[`${odd}_odd`] - Number(b[`${odd}_odd`]))).slice(-3)
        
        return filtrar

    } catch (error) {
        throw new Error(error.message)
    }
}

exports.getSearchDB = async(valor) => {
    try {
        return betService.searchDB(valor)
    } catch (error) {
        throw new Error(error.message)
    }
}
