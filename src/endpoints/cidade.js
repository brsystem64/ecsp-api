const controller = require('./../app/controllers/cidade');


module.exports = (app) => {
    app.get('/cidade', controller.all);
    app.get('/cidade/:nome', controller.findByName);

}