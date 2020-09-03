const controller = require('./../app/controllers/ocorrencia');


module.exports = app => {
    app.get('/ocorrencias', controller.all);
    app.get('/ocorrencias/:cidade', controller.findByCidade);

}