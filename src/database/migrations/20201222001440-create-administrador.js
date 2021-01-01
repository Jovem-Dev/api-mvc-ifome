'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('administrador',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
      },
      nome: Sequelize.STRING,
      email: Sequelize.STRING,
      senha: Sequelize.STRING,
      url: Sequelize.STRING
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
