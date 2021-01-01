const Pedidos = require("../models/Pedidos")
const { Op } = require("sequelize");
const pagarme = require('pagarme')

module.exports = {
    async countAndamento(req,res){
        const pedidos = await Pedidos.count({
            where:{
                restaurante: req.body.restaurante,
                [Op.and]: [
                    { status: 'Andamento' },
                ]
            }
        });
        return res.json(pedidos)
    },

    async countEntregues(req,res){
        const pedidos = await Pedidos.count({
            where:{
                restaurante: req.body.restaurante,
                [Op.and]: [
                    { status: 'Entregue' },
                ]
            }
        });
        return res.json(pedidos)
    },

    async countPendentes(req,res){
        const pedidos = await Pedidos.count({
            where:{
                restaurante: req.body.restaurante,
                [Op.and]: [
                    { status: 'Pendente' },
                ]
            }
        });
        return res.json(pedidos)
    },

    async mesGrafico(req,res){
        const pedidos = await Pedidos.findAll({
            where:{
                restaurante: req.body.restaurante,
                [Op.and]: [
                    { mes: req.body.mes },
                ]
            }
        });
        return res.json(pedidos)
    },

    async entregueRestaurante(req,res){
        const pedidos = await Pedidos.findAll({
            where:{
                restaurante: req.body.restaurante,
                [Op.and]: [
                    { status: 'Entregue' },
                ]
            }
        });
        return res.json(pedidos)
    },
    
    async andamentoRestaurante(req,res){
        const pedidos = await Pedidos.findAll({
            where:{
                restaurante: req.body.restaurante,
                [Op.and]: [
                    { status: 'Andamento' },
                ]
            }
        });
        return res.json(pedidos)
    },

    async pendenteRestaurante(req,res){
        const pedidos = await Pedidos.findAll({
            where:{
                restaurante: req.body.restaurante,
                [Op.and]: [
                    { status: 'Pendente' },
                ]
            }
        });
        return res.json(pedidos)
    },

    async entregueUsuario(req,res){
        const pedidos = await Pedidos.findAll({
            where:{
                usuario: req.body.usuario,
                [Op.and]: [
                    { status: 'Entregue' },
                ]
            }
        });
        return res.json(pedidos)
    },
    
    async andamentoPendenteUsuario(req,res){
        const pedidos = await Pedidos.findAll({
            where:{
                usuario: req.body.usuario,
                [Op.or]: [
                    { status: 'Andamento' },
                    { status: 'Pendente' }
                ]
            }
        });
        return res.json(pedidos)
    },


    async findByNome(req,res){
        const pedidos = await Pedidos.findAll({
            where:{
                restaurante: req.body.restaurante,
            }
        });
        return res.json(pedidos)
    },

        
    async index(req,res){
        const pedidos = await Pedidos.findAll();
        return res.json(pedidos)
    },

    async storePagarme(req,res){
        const { 
            data,
            restaurante,
            url,
            numero,
            pedido,
            anterior,
            status,
            valor,
            status_cor,
            endereco,
            status_restaurante,
            mes,
            usuario,
            pagamento_cartao,
            promocao_vinculada,
            notificacao
        } = req.body;

        const valorMul = valor * 100

        const pedidos = await Pedidos.create(pagarme.client.connect({ api_key: 'ak_test_noE3nDHfP4BpO5uEGJHjJUI9YfvJDj' })
        .then(client => client.transactions.create({
          "amount": valorMul,
          "card_number": "4111111111111111",
          "card_cvv": "123",
          "card_expiration_date": "0922",
          "card_holder_name": "Morpheus Fishburne",
          "customer": {
            "external_id": "#3311",
            "name": "Morpheus Fishburne",
            "type": "individual",
            "country": "br",
            "email": "mopheus@nabucodonozor.com",
            "documents": [
              {
                "type": "cpf",
                "number": "30621143049"
              }
            ],
            "phone_numbers": ["+5511999998888", "+5511888889999"],
            "birthday": "1965-01-01"
          },
          "billing": {
            "name": "Trinity Moss",
            "address": {
              "country": "br",
              "state": "sp",
              "city": "Cotia",
              "neighborhood": "Rio Cotia",
              "street": "Rua Matrix",
              "street_number": "9999",
              "zipcode": "06714360"
            }
          },
          "shipping": {
            "name": "Neo Reeves",
            "fee": 1000,
            "delivery_date": "2000-12-21",
            "expedited": true,
            "address": {
              "country": "br",
              "state": "sp",
              "city": "Cotia",
              "neighborhood": "Rio Cotia",
              "street": "Rua Matrix",
              "street_number": "9999",
              "zipcode": "06714360"
            }
          },
          "items": [
            {
              "id": "r123",
              "title": "Red pill",
              "unit_price": 10000,
              "quantity": 1,
              "tangible": true
            },
            {
              "id": "b123",
              "title": "Blue pill",
              "unit_price": 10000,
              "quantity": 1,
              "tangible": true
            }
          ]
        }))
        .then(transaction => console.log(transaction)));

        return res.json(pedidos)
    },
    
    async store(req,res){
        const { 
            data,
            restaurante,
            url,
            numero,
            pedido,
            anterior,
            status,
            valor,
            status_cor,
            endereco,
            status_restaurante,
            mes,
            usuario,
            pagamento_cartao,
            promocao_vinculada,
            notificacao
        } = req.body;

 

        const pedidos = await Pedidos.create({ data,
            restaurante,
            url,
            numero,
            pedido,
            anterior,
            status,
            valor,
            status_cor,
            endereco,
            status_restaurante,
            mes,
            usuario,
            pagamento_cartao,
            promocao_vinculada,
            notificacao
        });

        return res.json(pedidos)
    },

    async findById(req,res){
        const pedidos = await Pedidos.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(pedidos)
    },
    
    async delete(req,res){
        const pedidos = await Pedidos.destroy({
            where: {
              id: req.body.id
            }
        });
        return res.json(pedidos)
    },

      
    async update(req,res){
        const pedidos = await Pedidos.update(
            {              
                restaurante: req.body.restaurante,
                url: req.body.url,
                numero: req.body.numero,
                anterior: req.body.anterior,
                valor: req.body.valor,
                status: req.body.status,
                status_cor: req.body.status_cor,
                endereco: req.body.endereco,
                status_restaurante: req.body.valor,
                mes: req.body.status,
                usuario: req.body.status_cor,
                pagamento_cartao: req.body.endereco,
                promocao_vinculada: req.body.status_cor,
                notificacao: req.body.endereco,
            }, {
                where:{
                    id: req.body.id
                }
            }
        )
            
        return res.json(pedidos)
    },
}