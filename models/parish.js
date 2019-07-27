'use strict';
module.exports = (sequelize, DataTypes) => {
    var Parish = sequelize.define('Parish', {
        nameparish: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Parish.associate = function(models) {
        models.Parish.hasMany(models.Account)
    };
    return Parish;
};