const { Model, DataTypes } = require('sequelize');

// Vamos usar os Models para mapear os campos de inserção
class Cartoes extends Model {
  static init(sequelize) {
    super.init({
        card_holder_name: DataTypes.STRING,
        card_number: DataTypes.INTEGER,
        card_expiration_date: DataTypes.INTEGER,
        card_cvv: DataTypes.INTEGER
    }, {
      sequelize // conexão com o banco que vem do paramento
    })
  }

}

module.exports = Cartoes;