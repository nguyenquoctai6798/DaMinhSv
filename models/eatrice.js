'use strict';
module.exports = (sequelize, DataTypes) => {
    var EatRice = sequelize.define('EatRice', {
        AccountIdaccount: {
            type: DataTypes.STRING,
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            allowNull: false,
        },
        fullname: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        noon: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue : 0 // 0: not register, 1: register
        },
        afternoon: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue : 0 // 0: not register, 1: register
        },
        date: {
            allowNull: false,
            type: DataTypes.STRING
        },
    });

    return EatRice;
};