'use strict';
module.exports = (sequelize, DataTypes) => {
    var Diocese = sequelize.define('Diocese', {
        namediocese: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Diocese.associate = function(models) {
        models.Diocese.hasMany(models.Parish)
        models.Diocese.hasMany(models.Account)
    };

    return Diocese;
};