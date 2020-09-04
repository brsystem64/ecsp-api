const models = require('./../models');
const AnoInvalid = require('../../Exception/AnoInvalid');

const isAnoValido = ano => (ano > 2000 && ano <= new Date().getFullYear());

async function all(req, res){
    res.send(
        await models.Ocorrencias.findAll()
    );
}

async function findByCidade(req, res){
    let result;
    
    if(req.query && req.query.ano){

        if(!isAnoValido(req.query.ano)){
            res.status(400).send(AnoInvalid(req.query))
        }

        result =  await models.OcorrenciaCidade.findAll({
            where: {
                id_cidade: req.params.cidade,
                ano: req.query.ano
            },
            include: [models.Ocorrencias],
        })
    }else{
        result = await models.OcorrenciaCidade.findAll({
            where: {
                id_cidade: req.params.cidade   
            },
            include: [models.Ocorrencias],
        })
    }
    
    res.send(result);

}


module.exports = {
    all,
    findByCidade
}