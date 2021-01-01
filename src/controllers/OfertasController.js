const Ofertas = require("../models/Ofertas")

module.exports = {
    
    async index(req,res){
        const ofertas = await Ofertas.findAll();
        return res.json(ofertas)
    },

    async count(req,res){
        const ofertas = await Ofertas.count({
            where:{
               restaurante: req.body.restaurante,
            }
        });
        return res.json(ofertas)
    },
    
    async store(req,res){
        const { 
            nome,
            url,
            preco,
            novo_preco,
            ingredientes,
            restaurante,
            tempo,
            status_restaurante
        } = req.body;

        const ofertas = await Ofertas.create({
            nome,
            url,
            preco,
            novo_preco,
            ingredientes,
            restaurante,
            tempo,
            status_restaurante
        });

        return res.json(ofertas)
    },

    async findById(req,res){
        const ofertas = await Ofertas.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(ofertas)
    },
    
    async delete(req,res){
        const ofertas = await Ofertas.destroy({
            where: {
              id: req.body.id
            }
        });
        return res.json(ofertas)
    },

      
    async update(req,res){
        const ofertas = await Ofertas.update(
            {   
                nome: req.body.nome,
                url: req.body.url,
                preco: req.body.preco,
                novo_preco: req.body.novo_preco,
                ingredientes: req.body.ingredientes,
                restaurante: req.body.restaurante,
                tempo: req.body.tempo
            }, {
                where:{
                    id: req.body.id
                }
            }
        )
            
        return res.json(ofertas)
    },
}