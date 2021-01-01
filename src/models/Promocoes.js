const { Model, DataTypes } = require('sequelize');

// Vamos usar os Models para mapear os campos de inserção
class Promocoes extends Model {
  static init(sequelize) {
    super.init({
        nome: DataTypes.STRING,
        url: DataTypes.STRING,
        categoria: DataTypes.STRING,
        restaurante: DataTypes.STRING
    }, {
      sequelize // conexão com o banco que vem do paramento
    })
  }

}

module.exports = Promocoes;