'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => { // o que vai realizar
    return queryInterface.createTable('pedidos',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
      },
      data: Sequelize.DATE,
      restaurante: Sequelize.STRING,
      url: Sequelize.STRING,
      numero: Sequelize.INTEGER,
      pedido: Sequelize.STRING,
      anterior: Sequelize.STRING,
      status: Sequelize.STRING,
      valor: Sequelize.FLOAT,
      status_cor: Sequelize.STRING,
      endereco: Sequelize.STRING,
      status_restaurante: Sequelize.STRING,
      mes: Sequelize.INTEGER,
      usuario: Sequelize.STRING,
      pagamento_cartao: Sequelize.STRING,
      promocao_vinculada: Sequelize.STRING,
      notificacao: Sequelize.STRING
    })
  },

  down: (queryInterface, Sequelize) => { // o que vai desfazer
    
  }
};





