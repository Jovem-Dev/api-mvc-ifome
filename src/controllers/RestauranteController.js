const Restaurante = require("../models/Restaurantes")
const { Op } = require("sequelize");

module.exports = {
    
    async index(req,res){
        const restaurantes = await Restaurante.findAll();
        return res.json(restaurantes)
    },

    async findByNome(req,res){
        const restaurantes = await Restaurante.findAll({
            where: {
                nome: req.body.nome
            }
        });
        return res.json(restaurantes)
    },

    async count(req,res){
        const restaurantes = await Restaurante.count();
        return res.json(restaurantes)
    },

    async login(req,res){
        const { 
            nome,
            senha
        } = req.body;

        const restaurantes = await Restaurante.findAll({
            where:{
                [Op.and]: [
                    { nome: nome },
                    { senha: senha },
                ]
            }
        });
        if (!restaurantes) {
            res.send("Erro")
        }
        if (restaurantes.length > 0) {
            res.send(restaurantes)

        } else {
            res.send({ message: "Combinação nao encontrada!" })
        }
   
    },
    
    async store(req,res){
        const { 
            nome,
            url,
            categoria,
            tempo,
            distancia,
            status,
            email,
            senha
           
        } = req.body;

        const restaurantes = await Restaurante.create({
            nome,
            url,
            categoria,
            tempo,
            distancia,
            status,
            email,
            senha
           
        });

        return res.json(restaurantes)
    },

    async findById(req,res){
        const restaurantes = await Restaurante.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(restaurantes)
    },
    
    async delete(req,res){
        const restaurantes = await Restaurante.destroy({
            where: {
              id: req.body.id
            }
        });
        return res.json(restaurantes)
    },

      
    async update(req,res){
        const restaurantes = await Restaurante.update(
            {                      
                nome: req.body.nome,
                url: req.body.url,
                categoria: req.body.categoria,
                tempo: req.body.tempo,
                distancia: req.body.distancia,
                status: req.body.status,
                email: req.body.email,
                senha: req.body.senha,
            }, {
                where:{
                    id: req.body.id
                }
            }
        )
            
        return res.json(restaurantes)
    },
}