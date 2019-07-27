'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('IncomeExpenses', {
            houseId: {
                type: Sequelize.STRING,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'House',
                    key: 'houseId'
                }
            },
            contentincomeexpense: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('IncomeExpenses');
    }
};