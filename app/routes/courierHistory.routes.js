module.exports = function(app) {
 
    var courierHistory = require('../controllers/courierHistory.controller.js');
 
    // Create a new courier
    app.post('/courierHistory/:id', courierHistory.list);
 
    // // Retrieve all courier
    app.get('/courierDetail/:id', courierHistory.courierDetail);

    // app.get('/list', courier.list);
  
    // // Update a courier with Id
    // app.put('/api/courierHistory/:id', courierHistory.update);
 
    // // Delete a courier with Id
    // app.delete('/api/courierHistory/:id', courierHistory.delete);
}