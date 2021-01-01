'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ofertas',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
      },
      nome: Sequelize.STRING,
      url: Sequelize.STRING,
      preco: Sequelize.FLOAT,
      novo_preco: Sequelize.FLOAT,
      ingredientes: Sequelize.STRING,
      restaurante: Sequelize.STRING,
      tempo: Sequelize.STRING,
      status_restaurante: Sequelize.STRING
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
