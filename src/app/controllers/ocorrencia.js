const models = require('./../models');

async function all(req, res){
    res.send(
        await models.Ocorrencias.findAll()
    );
}

async function findByCidade(req, res){
    let result;
    
    if(req.query && req.query.ano){
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

    res.send(result)
}


module.exports = {
    all,
    findByCidade
}