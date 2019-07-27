'use strict';
module.exports = (sequelize, DataTypes) => {
    var Parameter = sequelize.define('Parameter', {
        titleparameter: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contentparameter: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });

    return Parameter;
};