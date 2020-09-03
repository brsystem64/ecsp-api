const cidade = require('./cidade');
const ocorrencia = require('./ocorrencia');

module.exports = app => {

    cidade(app);
    ocorrencia(app);
    
}