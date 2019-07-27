'use strict';
module.exports = (sequelize, DataTypes) => {
    var IncomeExpense = sequelize.define('IncomeExpense', {
        contentincomeexpense: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });

    return IncomeExpense;
};