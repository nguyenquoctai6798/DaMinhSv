'use strict';
module.exports = (sequelize, DataTypes) => {
    var Ward = sequelize.define('Ward', {
        idward: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nameward: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        typeward: {
            allowNull: false,
            type: DataTypes.STRING
        },
    });

    Ward.associate = function(models) {
        models.Ward.hasMany(models.Account)
        models.Ward.hasMany(models.House)
    };

    return Ward;
};