const { Model, DataTypes } = require('sequelize');

// Vamos usar os Models para mapear os campos de inserção
class Ofertas extends Model {
  static init(sequelize) {
    super.init({
        nome: DataTypes.STRING,
        url: DataTypes.STRING,
        preco: DataTypes.FLOAT,
        novo_preco: DataTypes.FLOAT,
        ingredientes: DataTypes.STRING,
        restaurante: DataTypes.STRING,
        tempo: DataTypes.STRING,
        status_restaurante: DataTypes.STRING,
    }, {
      sequelize // conexão com o banco que vem do paramento
    })
  }

}

module.exports = Ofertas;