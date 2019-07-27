'use strict';
module.exports = (sequelize, DataTypes) => {
    var Account = sequelize.define('Account', {
        idaccount: {
            allowNull: false,
            type: DataTypes.STRING,
            primaryKey: true,
        },
        avatar: {
            allowNull: false,
            type: DataTypes.STRING
        },
        holyname: {
            allowNull: false,
            type: DataTypes.STRING
        },
        firstname: {
            allowNull: false,
            type: DataTypes.STRING
        },
        lastname: {
            allowNull: false,
            type: DataTypes.STRING
        },
        phone: {
            allowNull: false,
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        birth: {
            allowNull: false,
            type: DataTypes.DATE
        },
        nativeland: {
            allowNull: false,
            type: DataTypes.STRING
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING
        },
        facebook: {
            allowNull: true,
            type: DataTypes.STRING
        },
        specialized: {
            allowNull: false,
            type: DataTypes.STRING
        },
        yearstudent: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        skill: {
            allowNull: true,
            type: DataTypes.STRING
        },
        monthjoin: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        yearjoin: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        monthunjoin: {
            type: DataTypes.INTEGER
        },
        yearunjoin: {
            type: DataTypes.INTEGER
        },
        fathername: {
            allowNull: false,
            type: DataTypes.STRING
        },
        mothername: {
            allowNull: false,
            type: DataTypes.STRING
        },
        numberparent1: {
            allowNull: false,
            type: DataTypes.STRING
        },
        numberparent2: {
            allowNull: true,
            type: DataTypes.STRING
        },
        address: {
            allowNull: false,
            type: DataTypes.STRING
        },
        role: {
            allowNull: false,
            type: DataTypes.STRING
        },
        typemember: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        active: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
    });

    
    Account.associate = function(models) {
        models.Account.hasMany(models.RegisterGoHomeOverNight)
        models.Account.hasMany(models.DontEatRice)
        models.Account.hasMany(models.EatRice)
        models.Account.hasMany(models.Transcripts)
    };

    return Account;
};