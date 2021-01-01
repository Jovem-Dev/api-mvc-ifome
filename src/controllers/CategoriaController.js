const Categoria = require("../models/Categorias")

module.exports = {
    
    async index(req,res){
        const categoria = await Categoria.findAll();
        return res.json(categoria)
    },
    
    async store(req,res){
        const { 
            nome,
            url
        } = req.body;

        const categoria = await Categoria.create({
            nome,
            url
        });

        return res.json(categoria)
    },

    async findById(req,res){
        const categoria = await Categoria.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(categoria)
    },
    
    async delete(req,res){
        const categoria = await Categoria.destroy({
            where: {
              id: req.body.id
            }
        });
        return res.json(categoria)
    },

      
    async update(req,res){
        const categoria = await Categoria.update(
            {   
                nome: req.body.nome,
                url: req.body.url,
               
            }, {
                where:{
                    id: req.body.id
                }
            }
        )
            
        return res.json(categoria)
    },
}