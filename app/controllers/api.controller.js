const db = require('../config/db.config.js');
const UserDetail = db.UserDetail;

exports.create = (req, res) => {
    const id = req.params.id;
    UserDetail.create(
        {
            attributes: [
                'created_at',
                'type_r',
                'amount',
                'type']
        },
        {
            where: {user_id: id}

        }).then(userDetail => {
        res.send(userDetail);
    })
};