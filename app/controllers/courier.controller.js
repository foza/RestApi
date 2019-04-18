const db = require('../config/db.config.js');
const Courier = db.couriers;
const CourierHistory = db.couriersHistory;
 
// Post
exports.create = (req, res) => {  

  Courier.create({  
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age
  }).then(couriers => {    

    res.send(couriers);
  });
};
 
// FETCH all
exports.findAll = (req, res) => {
    Courier.findAll().then(couriers => {

    res.send(couriers);
  });
};

exports.list = (req,res) =>{
    Courier.findAll().then(couriers =>{

    res.send(couriers);
    
    });
};

 

exports.findById = (req, res) => {  
    Courier.findById(req.params.customerId).then(couriers => {
    res.send(couriers);
  })
};
 

exports.update = (req, res) => {
  const id = req.params.customerId;
  Courier.update( { firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age }, 
           { where: {id: req.params.customerId} }
           ).then(() => {
           res.status(200).send("updated successfully  with id = " + id);
           });
};
 

exports.delete = (req, res) => {
  const id = req.params.customerId;
  Courier.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully  with id = ' + id);
  });
};