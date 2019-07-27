'use strict';
module.exports = (sequelize, DataTypes) => {
    var MenuFood = sequelize.define('MenuFood', {
        idmenu: { // 5_MON_N_1 ==> 5: idhouse, MON : monday, N: noon, 1: index
            allowNull: false,
            primaryKey: true,
            type: DataTypes.STRING
        },
    });

    return MenuFood;
};