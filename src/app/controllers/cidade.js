const models = require('./../models');
const CidadeNotFound = require('../../Exception/CidadeNotFound');

async function all(req, res){
    res.send(
        await models.Cidade.findAll()
    );
}

async function findByName(req, res){
    let cidade = (req.params.nome)
                 .toUpperCase()
                 .replace(/-/g, " ");

    cidade = await models.Cidade.findOne({
                where:{
                    nome: cidade
                }
            })
    if(cidade){
        res.send(cidade);
    }

    res.status(404).send(CidadeNotFound(req.params.nome));

}



module.exports = {
    all,
    findByName
}