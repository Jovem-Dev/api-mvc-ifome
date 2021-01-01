const Endereco = require("../models/Endereco")

module.exports = {
    
    async index(req,res){
        const endereco = await Endereco.findAll({
            where: {
                usuario: req.body.usuario
            }
        });
        return res.json(endereco)
    },
    
    async store(req,res){
        const { 
            bairro,
            rua,
            numero,
            usuario
        } = req.body;

        const endereco = await Endereco.create({
            bairro,
            rua,
            numero,
            usuario
        });

        return res.json(endereco)
    },

    async findById(req,res){
        const endereco = await Endereco.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(endereco)
    },
    
    async delete(req,res){
        const endereco = await Endereco.destroy({
            where: {
              id: req.body.id
            }
        });
        return res.json(endereco)
    },

      
    async update(req,res){
        const endereco = await Endereco.update(
            {   
                bairro: req.body.bairro,
                rua: req.body.rua,
                numero: req.body.numero,
                bairro: req.body.bairro
            }, {
                where:{
                    id: req.body.id
                }
            }
        )
            
        return res.json(endereco)
    },
}