const Sugestoes = require("../models/Sugestoes")

module.exports = {
    
    async index(req,res){
        const sugestoes = await Sugestoes.findAll();
        return res.json(sugestoes)
    },
    
    async store(req,res){
        const { 
            nome,
            url
           
        } = req.body;

        const sugestoes = await Sugestoes.create({
            nome,
            url
           
        });

        return res.json(sugestoes)
    },

    async findById(req,res){
        const sugestoes = await Sugestoes.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(sugestoes)
    },
    
    async delete(req,res){
        const sugestoes = await Sugestoes.destroy({
            where: {
              id: req.body.id
            }
        });
        return res.json(sugestoes)
    },

      
    async update(req,res){
        const sugestoes = await Sugestoes.update(
            {   
                nome: req.body.nome,
                url: req.body.url,
            }, {
                where:{
                    id: req.body.id
                }
            }
        )
            
        return res.json(sugestoes)
    },
}