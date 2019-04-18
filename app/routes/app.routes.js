module.exports = function (app) {

    var courier = require('../controllers/courier.controller.js');
    var courierHistory = require('../controllers/courierHistory.controller.js');

    /***API***/
    app.post('/api/courier', courier.create);
    app.get('/api/courier', courier.findAll);
    app.put('/api/courier/:id', courier.update);
    app.delete('/api/courier/:id', courier.delete);

    /**апи для биллинга фронт **/
    app.get('/list', courier.list);
    app.get('/courierDetail/:id', courierHistory.userDetail);
}