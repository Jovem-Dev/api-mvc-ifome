'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cartoes',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
      },
      card_holder_name: Sequelize.STRING,
      card_number: Sequelize.INTEGER,
      card_expiration_date: Sequelize.INTEGER,
      card_cvv: Sequelize.INTEGER,
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
