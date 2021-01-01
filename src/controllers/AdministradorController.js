const Administrador = require("../models/Administrador")
const { Op } = require("sequelize");

module.exports = {
    
    async index(req,res){
        const adm = await Administrador.findAll();
        return res.json(adm)
    },
    
    async login(req,res){
        const { 
            nome,
            senha
        } = req.body;

        const adm = await Administrador.findAll({
            where:{
                [Op.and]: [
                    { nome: nome },
                    { senha: senha },
                ]
            }
        });
        if (!adm) {
            res.send("Erro")
        }
        if (adm.length > 0) {
            res.send(adm)

        } else {
            res.send({ message: "Combinação nao encontrada!" })
        }
   
    },
         
    async store(req,res){
        const { 
            nome,
            email, 
            senha,
            url
        } = req.body;

        const adm = await Administrador.create({
            nome,
            email, 
            senha,
            url
        });

        return res.json(adm)
    },


    async findById(req,res){
        const adm = await Administrador.findAll({
            where: {
                id: req.params.id
            }
        });
        return res.json(adm)
    },
    
    async delete(req,res){
        const adm = await Administrador.destroy({
            where: {
              id: req.body.id
            }
        });
        return res.json(adm)
    },

      
    async update(req,res){
        const adm = await Administrador.update(
            { 
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                url: req.body.url
            }, {
                where:{
                    id: req.body.id
                }
            }
        )
            
        return res.json(adm)
    },
}