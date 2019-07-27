'use strict';
module.exports = (sequelize, DataTypes) => {
    var Province = sequelize.define('Province', {
        idprovince: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nameprovince: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        typeprovince: {
            allowNull: false,
            type: DataTypes.STRING
        },
    });

    Province.associate = function(models) {
        models.Province.hasMany(models.District)
        models.Province.hasMany(models.Account)
        models.Province.hasMany(models.House)
    };

    return Province;
};