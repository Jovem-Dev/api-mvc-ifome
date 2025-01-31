const express = require('express');

const AdministradorController = require('./controllers/AdministradorController');
const CartoesController = require('./controllers/CartoesController');
const CategoriaController = require('./controllers/CategoriaController');
const EnderecoController = require('./controllers/EnderecoController');
const OfertasController = require('./controllers/OfertasController');
const PedidoControler = require('./controllers/PedidoController');
const PerfilController = require('./controllers/PerfilController');
const PromocoesController = require('./controllers/PromocoesController');
const RestauranteController = require('./controllers/RestauranteController');
const SugestoesController = require('./controllers/SugestoesController');


const routes = express.Router();

routes.get('/', (req,res) =>{
    return res.json({hello: 'World'})
});

// login
routes.post('/loginRestaurante', RestauranteController.login );
routes.post('/loginAdministrador', AdministradorController.login );

// pedidos 
routes.post('/pedidos', PedidoControler.store );
routes.post('/pedidosPagarme', PedidoControler.storePagarme );
routes.get('/pedidos', PedidoControler.index );
routes.get('/pedidos/andamentoRestaurante/:restaurante', PedidoControler.andamentoRestaurante);
routes.get('/pedidos/andamentoRestauranteDetalhe/:id', PedidoControler.andamentoRestauranteDetalhe);
routes.get('/pedidos/entregueRestaurante/:restaurante', PedidoControler.entregueRestaurante );
routes.get('/pedidos/entregueRestauranteDetalhe/:id', PedidoControler.entregueRestauranteDetalhe );
routes.get('/pedidos/pendenteRestaurante/:restaurante', PedidoControler.pendenteRestaurante )
routes.get('/pedidos/entregueUsuario/:usuario', PedidoControler.entregueUsuario);
routes.get('/pedidos/andamentoPendenteUsuario/:usuario', PedidoControler.andamentoPendenteUsuario );
routes.get('/pedidos/countEntregues/:restaurante', PedidoControler.countEntregues );
routes.get('/pedidos/countPendentes/:restaurante', PedidoControler.countPendentes );
routes.get('/pedidos/countAndamento/:restaurante', PedidoControler.countAndamento );
routes.get('/pedidos/:id', PedidoControler.findById );
routes.get('/pedidos/nome', PedidoControler.findByNome );
routes.put('/pedidos/:id', PedidoControler.update );
routes.delete('/pedidos/:id', PedidoControler.delete );

//Cartoes
routes.post('/cartoes', CartoesController.store );
routes.post('/cartoesPagarme', CartoesController.storePagarme );
routes.get('/cartoes', CartoesController.index );
routes.get('/cartoesNome/:nome', CartoesController.cartoesNome );
routes.get('/cartoes/:id', CartoesController.findById );
routes.put('/cartoes', CartoesController.update );
routes.delete('/cartoes', CartoesController.delete );

// Categoria
routes.post('/categoria', CategoriaController.store );
routes.get('/categoria', CategoriaController.index );
routes.get('/categoria/:id', CategoriaController.findById );
routes.put('/categoria', CategoriaController.update );
routes.delete('/categoria', CategoriaController.delete )

// Endereco
routes.post('/endereco', EnderecoController.store );
routes.get('/endereco/:usuario', EnderecoController.index );
routes.get('/endereco/:id', EnderecoController.findById );
routes.put('/endereco', EnderecoController.update );
routes.delete('/endereco', EnderecoController.delete );

// Ofertas
routes.post('/ofertas', OfertasController.store );
routes.get('/ofertas', OfertasController.index );
routes.get('/ofertas/count', OfertasController.count );
routes.get('/ofertas/:id', OfertasController.findById );
routes.put('/ofertas', OfertasController.update );
routes.delete('/ofertas/:id', OfertasController.delete );


// Perfil
routes.post('/perfil', PerfilController.store );
routes.get('/perfil', PerfilController.index );
routes.get('/perfil/:id', PerfilController.findById );
routes.put('/perfil/:id', PerfilController.update );
routes.delete('/perfil', PerfilController.delete );

// Promocoes
routes.post('/promocoes', PromocoesController.store );
routes.get('/promocoes', PromocoesController.index );
routes.get('/promocoes/:id', PromocoesController.findById );
routes.get('/promocoes/nome', PromocoesController.findByNome );
routes.put('/promocoes', PromocoesController.update );
routes.delete('/promocoes/:id', PromocoesController.delete );

// Restaurantes
routes.post('/restaurante', RestauranteController.store );
routes.get('/restaurante', RestauranteController.index );
routes.get('/restaurante/count', RestauranteController.count );
routes.get('/restaurante/:id', RestauranteController.findById );
routes.get('/restaurante/nome', RestauranteController.findByNome );
routes.put('/restaurante', RestauranteController.update );
routes.delete('/restaurante', RestauranteController.delete );

// Sugestoes
routes.post('/sugestoes', SugestoesController.store );
routes.get('/sugestoes', SugestoesController.index );
routes.get('/sugestoes/:id', SugestoesController.findById );
routes.put('/sugestoes', SugestoesController.update );
routes.delete('/sugestoes', SugestoesController.delete );

module.exports = routes;