module.exports = (sequelize, Sequelize) => {
    const CourierHistory = sequelize.define(
        'billinghistory',{
            order_id:{
              type: Sequelize.STRING
            },
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
            }
        },{
            timestamps: false,
            freezeTableName: true,
        });

    return CourierHistory;
}