'use strict';
module.exports = (sequelize, DataTypes) => {
    var Transcripts = sequelize.define('Transcripts', {
        AccountIdaccount: {
            type: DataTypes.STRING,
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            primaryKey: true,
            allowNull: false,
        },
        contenttranscript: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });

    return Transcripts;
};