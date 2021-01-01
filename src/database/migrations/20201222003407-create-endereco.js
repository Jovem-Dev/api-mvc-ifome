'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('endereco',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
      },
      bairro: Sequelize.STRING,
      rua: Sequelize.STRING,
      numero: Sequelize.INTEGER,
      usuario: Sequelize.STRING
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
