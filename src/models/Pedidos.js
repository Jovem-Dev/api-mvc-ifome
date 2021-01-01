const { Model, DataTypes } = require('sequelize');

// Vamos usar os Models para mapear os campos de inserção
class Pedidos extends Model {
  static init(sequelize) {
    super.init({
        data: DataTypes.DATE,
        restaurante: DataTypes.STRING,
        url: DataTypes.STRING,
        numero: DataTypes.INTEGER,
        pedido: DataTypes.STRING,
        anterior: DataTypes.STRING,
        status: DataTypes.STRING,
        valor: DataTypes.FLOAT,
        status_cor: DataTypes.STRING,
        endereco: DataTypes.STRING,
        status_restaurante: DataTypes.STRING,
        mes: DataTypes.INTEGER,
        usuario: DataTypes.STRING,
        pagamento_cartao: DataTypes.STRING,
        promocao_vinculada: DataTypes.STRING,
        notificacao: DataTypes.STRING
    }, {
      sequelize // conexão com o banco que vem do paramento
    })
  }

}

module.exports = Pedidos;