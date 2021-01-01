const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Administrador = require('../models/Administrador');
const Cartoes = require('../models/Cartoes');
const Categorias = require('../models/Categorias');
const Pedidos = require('../models/Pedidos');
const Endereco = require('../models/Endereco');
const Ofertas = require('../models/Ofertas');
const Perfil = require('../models/Perfil');
const Restaurantes = require('../models/Restaurantes');
const Promocoes = require('../models/Promocoes');
const Sugestoes = require('../models/Sugestoes');

const connection = new Sequelize(dbConfig);

Administrador.init(connection);
Cartoes.init(connection);
Categorias.init(connection);
Endereco.init(connection);
Ofertas.init(connection);
Pedidos.init(connection);
Perfil.init(connection);
Promocoes.init(connection);
Restaurantes.init(connection);
Sugestoes.init(connection);

module.exports = connection;