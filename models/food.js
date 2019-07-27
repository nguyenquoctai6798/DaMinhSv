'use strict';
module.exports = (sequelize, DataTypes) => {
    var Food = sequelize.define('Food', {
        imgfood: {
            allowNull: false,
            type: DataTypes.STRING
        },
        namefood: {
            allowNull: false,
            type: DataTypes.STRING
        },
        makedelete: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
    });

    Food.associate = function(models) {
        models.Food.hasMany(models.MenuFood)
    };

    return Food;
};