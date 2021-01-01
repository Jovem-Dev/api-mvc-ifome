const { Model, DataTypes } = require('sequelize');

// Vamos usar os Models para mapear os campos de inserção
class Endereco extends Model {
  static init(sequelize) {
    super.init({
        bairro: DataTypes.STRING,
        rua: DataTypes.STRING,
        numero: DataTypes.INTEGER,
        usuario: DataTypes.STRING
    }, {
      sequelize // conexão com o banco que vem do paramento
    })
  }

}

module.exports = Endereco;