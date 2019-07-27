'use strict';
module.exports = (sequelize, DataTypes) => {
    var School = sequelize.define('School', {
        nameschool: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        typeschool: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
    });

    School.associate = function(models) {
        models.School.hasMany(models.Account)
    };

    return School;
};