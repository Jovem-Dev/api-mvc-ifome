const Perfil = require("../models/Perfil")

module.exports = {
    
    async index(req,res){
        const perfil = await Perfil.findAll();
        return res.json(perfil)
    },
    
    async store(req,res){
        const { 
            nome,
            url
           
        } = req.body;

        const perfil = await Perfil.create({
            nome,
            url
           
        });

        return res.json(perfil)
    },

    async findById(req,res){
        const perfil = await Perfil.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(perfil)
    },
    
    async delete(req,res){
        const perfil = await Perfil.destroy({
            where: {
              id: req.body.id
            }
        });
        return res.json(perfil)
    },

      
    async update(req,res){
        const perfil = await Perfil.update(
            {   
                nome: req.body.nome,
                url: req.body.url,
            }, {
                where:{
                    id: req.body.id
                }
            }
        )
            
        return res.json(perfil)
    },
}