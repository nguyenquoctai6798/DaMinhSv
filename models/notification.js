'use strict';
module.exports = (sequelize, DataTypes) => {
    var Notification = sequelize.define('Notification', {
        datepush: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        imgnotification: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        titlenotification: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subcontent: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        markdelete: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
    });

    return Notification;
};