module.exports = (sequelize, Sequelize) => {
    const Couriers = sequelize.define('ordercourier', {
      name: {
      type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      }
    },{
      timestamps: false,
      freezeTableName: true,
    });
    
    return Couriers;
  }