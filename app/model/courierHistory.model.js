module.exports = (sequelize, Sequelize) => {
    const CourierHistory = sequelize.define(
        'billinghistory', {
            user_id: {
                type: Sequelize.INTEGER
            },
            phone: {
                type: Sequelize.STRING
            },
            type: {
                type: Sequelize.INTEGER
            },
            created_at: {
                type: Sequelize.STRING
            },
            updated_at: {
                type: Sequelize.STRING
            },
            amount: {
                type: Sequelize.STRING
            },
            balance: {
                type: Sequelize.STRING
            },
            type_r: {
                type: Sequelize.INTEGER
            },
            email: {
                type: Sequelize.STRING
            },
            order_id: {
                type: Sequelize.STRING
            },
            user_type: {
                type: Sequelize.INTEGER
            }

        }, {
            timestamps: false,
            freezeTableName: true,
        });

    return CourierHistory;
}