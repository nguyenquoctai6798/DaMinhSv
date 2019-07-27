'use strict';
module.exports = (sequelize, DataTypes) => {
    var House = sequelize.define('House', {
        idhouse: {
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        imghouse: {
            allowNull: false,
            type: DataTypes.STRING
        },
        namehouse: {
            allowNull: false,
            type: DataTypes.STRING
        },
        address: {
            allowNull: false,
            type: DataTypes.STRING
        },
        discriptionshouse: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        markdelete:{
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });
    
    House.associate = function(models) {
        models.House.hasMany(models.Account)
        models.House.hasMany(models.IncomeExpense)
    };
    return House;
};