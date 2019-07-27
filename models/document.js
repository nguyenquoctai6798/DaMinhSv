'use strict';
module.exports = (sequelize, DataTypes) => {
    var Document = sequelize.define('Document', {
        datepushdocument: {
            allowNull: false,
            type: DataTypes.DATE
        },
        titledocument: {
            allowNull: false,
            type: DataTypes.STRING
        },
        linkdocument: {
            allowNull: false,
            type: DataTypes.STRING
        },
        markdelete: {
            allowNull: false,
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
    });

    return Document;
};