'use strict';
module.exports = (sequelize, DataTypes) => {
    var RegisterGoHomeOverNight = sequelize.define('RegisterGoHomeOverNight', {
        AccountIdaccount: {
            type: DataTypes.STRING,
            primaryKey: true,
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            allowNull: false,
        },
        timeout: {
            allowNull: false,
            type: DataTypes.STRING
        },
        timein: {
            allowNull: false,
            type: DataTypes.STRING
        },
        dateout: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.STRING
        },
        datein: {
            allowNull: false,
            type: DataTypes.STRING
        },
        typeregister:{
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0 //0: go home, 1: over night
        },
        content:{
            allowNull: false,
            type: DataTypes.TEXT
        },
    });

    return RegisterGoHomeOverNight;
};