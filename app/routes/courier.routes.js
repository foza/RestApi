module.exports = function(app) {
 
    var courier = require('../controllers/courier.controller.js');
 
    // Create a new courier
    app.post('/api/courier', courier.create);
 
    // Retrieve all courier
    app.get('/api/courier', courier.findAll);

    app.get('/list', courier.list);
  
    // Update a courier with Id
    app.put('/api/courier/:id', courier.update);
 
    // Delete a courier with Id
    app.delete('/api/courier/:id', courier.delete);

    var courierHistory = require('../controllers/courierHistory.controller.js');
    
    app.get('/courierDetail/:id', courierHistory.courierDetail);
}