
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'profilesnatacao',
    [
      {
        "id": "668540f0-d6f3-11ee-8b8c-cd143d0de627",
        "name": "User_professornatacacao",
        "description": "o profissional da area de edução fisica",
        "isAdmin": false,
        "created_at": "2024-02-29T11:12:18.048Z",
        "updated_at": "2024-02-29T11:12:18.048Z"
    }
  ],
    {},
  ),

  down: () => {},
};
