const db = require('../config/db.config.js');
const CourierHistory = db.couriersHistory;
const Courier = db.couriers;

exports.detail = (req , res) =>{
    CourierHistory.findById(req.params.id).then(couriersHistory => {
        res.send(couriersHistory);
    })
};

exports.userDetail = (req , res) => {
    const id =req.params.id;
    CourierHistory.findAll({attributes: ['created_at','type_r','amount','type']},{
        where: {user_id: id}
        }).then(couriersHistory =>{
        res.send(couriersHistory);
      })
  } ;