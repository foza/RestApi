const db = require('../config/db.config.js');
const UserDetail = db.UserDetail;

exports.create = (req, res) => {
    const userId = req.body.user_id,
        typeR = req.body.type_r,
        type = req.body.type,
        amount = req.body.amount,
        email = req.body.email,
        order_id = req.body.order_id,
        user_type = req.body.user_type;

    UserDetail.create(
        {
            user_id: userId,
            type_r: typeR,
            type: type,
            amount: amount,
            email: email,
            order_id: order_id,
            user_type: user_type
        }).then(userDetail => {
        res.send(userDetail);
    })
};

function isIdUnique(id) {
    return db.Users.count({where: {id: id}})
        .then(count => {
            if (count != 0) {
                return false;
            }
            return true;
        });
}