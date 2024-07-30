const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'grantsnatacacao',
    [
        {
            "id": "66873cc0-d6f3-11ee-8b8c-cd143d0de627",
            "grant": "get,post",
            "note": "Criar os planos,ver todos os plano criados pelo proprio treinador",
            "filterableRoute": "company",
            "route": "/natacao/Plano/MeusPlanos",
            "created_at": "2024-02-29T11:12:18.060Z",
            "updated_at": "2024-02-29T11:12:18.060Z"
        },
        {
            "id": "668763d0-d6f3-11ee-8b8c-cd143d0de627",
            "grant": "get,post",
            "note": "Criar os planos,ver todos os plano criados pelo proprio treinador",
            "filterableRoute": "company",
            "route": "/natacao/Plano/MeusPlanosAlunos/:id",
            "created_at": "2024-02-29T11:12:18.060Z",
            "updated_at": "2024-02-29T11:12:18.060Z"
        },
        {
            "id": "668763d1-d6f3-11ee-8b8c-cd143d0de627",
            "grant": "update,post,get",
            "note": "pegar todos os treinos por cateoria",
            "filterableRoute": "company",
            "route": "/natacao/users/picture",
            "created_at": "2024-02-29T11:12:18.060Z",
            "updated_at": "2024-02-29T11:12:18.060Z"
        },
        {
            "id": "668763d2-d6f3-11ee-8b8c-cd143d0de627",
            "grant": "update,post,get",
            "note": "pegar todos os treinos por cateoria",
            "filterableRoute": "company",
            "route": "/natacao/MudarSenha",
            "created_at": "2024-02-29T11:12:18.060Z",
            "updated_at": "2024-02-29T11:12:18.060Z"
        },
        {
            "id": "668763d3-d6f3-11ee-8b8c-cd143d0de627",
            "grant": "update,post,get",
            "note": "pegar todos os treinos por cateoria",
            "filterableRoute": "company",
            "route": "/natacao/RecuperarSenha",
            "created_at": "2024-02-29T11:12:18.060Z",
            "updated_at": "2024-02-29T11:12:18.060Z"
        },
        {
            "id": "668763d4-d6f3-11ee-8b8c-cd143d0de627",
            "grant": "get,post",
            "note": "Criar os planos,ver todos os plano criados pelo proprio treinador",
            "filterableRoute": "company",
            "route": "/natacao/Professor",
            "created_at": "2024-02-29T11:12:18.060Z",
            "updated_at": "2024-02-29T11:12:18.060Z"
        },
        {
            "id": "668763d5-d6f3-11ee-8b8c-cd143d0de627",
            "grant": "get,post",
            "note": "Criar os planos,ver todos os plano criados pelo proprio treinador",
            "filterableRoute": "company",
            "route": "/natacao/Professor/",
            "created_at": "2024-02-29T11:12:18.060Z",
            "updated_at": "2024-02-29T11:12:18.060Z"
        },
        {
            "id": "668763d6-d6f3-11ee-8b8c-cd143d0de627",
            "grant": "get,post",
            "note": "Criar os planos,ver todos os plano criados pelo proprio treinador",
            "filterableRoute": "company",
            "route": "/natacao/Formulario",
            "created_at": "2024-02-29T11:12:18.060Z",
            "updated_at": "2024-02-29T11:12:18.060Z"
        },
        {
            "id": "668763d7-d6f3-11ee-8b8c-cd143d0de627",
            "grant": "get,post",
            "note": "Criar os planos,ver todos os plano criados pelo proprio treinador",
            "filterableRoute": "company",
            "route": "/natacao/Formulario/iniciacao1",
            "created_at": "2024-02-29T11:12:18.060Z",
            "updated_at": "2024-02-29T11:12:18.060Z"
        },
        {
            "id": "668763d8-d6f3-11ee-8b8c-cd143d0de627",
            "grant": "get,post",
            "note": "Criar os planos,ver todos os plano criados pelo proprio treinador",
            "filterableRoute": "company",
            "route": "/natacao/Formulario/iniciacao2",
            "created_at": "2024-02-29T11:12:18.060Z",
            "updated_at": "2024-02-29T11:12:18.060Z"
        },
        {
            "id": "668763d9-d6f3-11ee-8b8c-cd143d0de627",
            "grant": "get,post",
            "note": "Criar os planos,ver todos os plano criados pelo proprio treinador",
            "filterableRoute": "company",
            "route": "/natacao/Formulario/Adaptacao1",
            "created_at": "2024-02-29T11:12:18.060Z",
            "updated_at": "2024-02-29T11:12:18.060Z"
        },
        {
            "id": "668763da-d6f3-11ee-8b8c-cd143d0de627",
            "grant": "get,post",
            "note": "Criar os planos,ver todos os plano criados pelo proprio treinador",
            "filterableRoute": "company",
            "route": "/natacao/Formulario/Adaptacao2",
            "created_at": "2024-02-29T11:12:18.060Z",
            "updated_at": "2024-02-29T11:12:18.060Z"
        },
        {
            "id": "668763db-d6f3-11ee-8b8c-cd143d0de627",
            "grant": "get,post",
            "note": "Criar os planos,ver todos os plano criados pelo proprio treinador",
            "filterableRoute": "company",
            "route": "/natacao/Formulario/Aprimoramento1",
            "created_at": "2024-02-29T11:12:18.060Z",
            "updated_at": "2024-02-29T11:12:18.060Z"
        },
        {
            "id": "668763dc-d6f3-11ee-8b8c-cd143d0de627",
            "grant": "get,post",
            "note": "Criar os planos,ver todos os plano criados pelo proprio treinador",
            "filterableRoute": "company",
            "route": "/natacao/Formulario/Aprimoramento2",
            "created_at": "2024-02-29T11:12:18.060Z",
            "updated_at": "2024-02-29T11:12:18.060Z"
        },
        {
            "id": "668763dd-d6f3-11ee-8b8c-cd143d0de627",
            "grant": "get,post",
            "note": "Criar os planos,ver todos os plano criados pelo proprio treinador",
            "filterableRoute": "company",
            "route": "/natacao/Formulario/Polimento1",
            "created_at": "2024-02-29T11:12:18.060Z",
            "updated_at": "2024-02-29T11:12:18.060Z"
        },
        {
            "id": "668763de-d6f3-11ee-8b8c-cd143d0de627",
            "grant": "get,post",
            "note": "Criar os planos,ver todos os plano criados pelo proprio treinador",
            "filterableRoute": "company",
            "route": "/natacao/Formulario/Polimento2",
            "created_at": "2024-02-29T11:12:18.060Z",
            "updated_at": "2024-02-29T11:12:18.060Z"
        },
        {
            "id": "668763df-d6f3-11ee-8b8c-cd143d0de627",
            "grant": "get,post",
            "note": "Criar os planos,ver todos os plano criados pelo proprio treinador",
            "filterableRoute": "company",
            "route": "/natacao/Formulario/Avancado",
            "created_at": "2024-02-29T11:12:18.060Z",
            "updated_at": "2024-02-29T11:12:18.060Z"
        }
    ],
    {},
  ),

  down: () => {},
};
