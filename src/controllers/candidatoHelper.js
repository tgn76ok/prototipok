const mailConfig = require('../config/mail');

const randomGuestPassword = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const parseCadastroPessoal = (body) => {
    return {
        beneficio: body.beneficio,
        cpf: body.cpf,
        datanascimento: body.datanascimento,
        escolaridade: body.escolaridade,
        estadocivil: body.estadocivil,
        genero: body.genero,
        localtrabalho: body.localtrabalho,
        nome: body.nome,
        rg: body.rg,
        rendabruta: body.rendabruta,
        tipovinculo: body.tipovinculo,
        valorbeneficio: body.valorbeneficio,
        ocupacaoId: body.ocupacaoId,
        rgestado: body.rgestado,
        rgorgao: body.rgorgao,
        documentoestadocivilId: body.documentoestadocivilId
    }
}

const parseCandidato = (body) => {
    return {
        cadastrounico: body.cadastrounico,
        cadeiraroda: body.cadeiraroda,
        celular: body.celular,
        comercial: body.comercial,
        datainscricao: body.datainscricao,
        deficiencia: body.deficiencia,
        idadeidoso: body.idadeidoso,
        idoso: body.idoso,
        imoveldesfez: body.imoveldesfez,
        laudo: body.laudo,
        movimento: body.movimento,
        numerocadastrounico: body.numerocadastrounico,
        numeroinscricao: body.numeroinscricao,
        participamovimento: body.participamovimento,
        possuiuimovel: body.possuiuimovel,
        qtddependente: body.qtddependente,
        residencial: body.residencial,
        situacaohabitacional: body.situacaohabitacional,
        temporesidejp: body.temporesidejp,
        temposituacaohabitacional: body.temposituacaohabitacional,
        tiponecessidadeespecial: body.tiponecessidadeespecial,
        informacaolaudo: body.informacaolaudo,
        status: body.status,
        dataalteracao: body.dataalteracao,
        dadospessoasId: body.dadospessoasId,
        userId: body.userId    
    }
}

const createDefaultEmailConfig = (email) => {
    return {
        email: email,
        subject: 'Relatorio',
        message: 'Sua senha de acesso ao João Pessoa Fit está disponível',
        template: 'activateAccount',
        variables: {
            TipoPDf: undefined,
            NomeProfessor: undefined,
            NomeAluno: undefined ,


        }
    };
}

const helper = {}

helper.randomGuestPassword = randomGuestPassword;
helper.parseCadastroPessoal = parseCadastroPessoal;
helper.createDefaultEmailConfig = createDefaultEmailConfig;
helper.parseCandidato = parseCandidato;

module.exports = helper;