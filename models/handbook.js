'use strict';
module.exports = (sequelize, DataTypes) => {
    var Handbook = sequelize.define('Handbook', {
        titlehandbook: {
            allowNull: false,
            type: DataTypes.STRING
        },
        contenthandbook: {
            allowNull: false,
            type: DataTypes.STRING
        },
        displayorderhandbook: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        makedelete: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
    });

    return Handbook;
};