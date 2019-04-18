const db = require('../config/db.config.js');
const CourierHistory = db.couriersHistory;
const Courier = db.couriers;

exports.detail = (req , res) =>{
    CourierHistory.findById(req.params.id).then(couriersHistory => {
        res.send(couriersHistory);
    })
};

exports.courierDetail = (req , res) => {
    const id =req.params.id;
    console.log(id);
    CourierHistory.findAll({
        where: {user_id: id}
        }).then(couriersHistory =>{
        res.send(couriersHistory);
      })
  } ;