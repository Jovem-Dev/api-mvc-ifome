'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('restaurantes',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
      },
      nome: Sequelize.STRING,
      url: Sequelize.STRING,
      estrelas: Sequelize.INTEGER,
      categoria: Sequelize.STRING,
      tempo: Sequelize.STRING,
      distancia: Sequelize.STRING,
      status: Sequelize.STRING,
      email: Sequelize.STRING,
      senha: Sequelize.STRING,
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
