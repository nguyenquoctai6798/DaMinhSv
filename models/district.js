'use strict';
module.exports = (sequelize, DataTypes) => {
    var District = sequelize.define('District', {
        iddistrict: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        namedistrict: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        typedistrict: {
            allowNull: false,
            type: DataTypes.STRING
        },
    });

    District.associate = function(models) {
        models.District.hasMany(models.Ward)
        models.District.hasMany(models.Account)
        models.District.hasMany(models.House)
    };

    return District;
};