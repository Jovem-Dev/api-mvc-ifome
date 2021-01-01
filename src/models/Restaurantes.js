const { Model, DataTypes } = require('sequelize');

// Vamos usar os Models para mapear os campos de inserção
class Restaurantes extends Model {
  static init(sequelize) {
    super.init({
        nome: DataTypes.STRING,
        url: DataTypes.STRING,
        estrelas: DataTypes.INTEGER,
        categoria: DataTypes.STRING,
        tempo: DataTypes.STRING,
        distancia: DataTypes.STRING,
        status: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
    }, {
      sequelize // conexão com o banco que vem do paramento
    })
  }

}

module.exports = Restaurantes;