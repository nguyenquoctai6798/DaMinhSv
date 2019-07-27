'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Handbooks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            titlehandbook: {
                allowNull: false,
                type: Sequelize.STRING
            },
            contenthandbook: {
                allowNull: false,
                type: Sequelize.STRING
            },
            displayorderhandbook: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            makedelete: {
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue: 0
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
        return queryInterface.dropTable('Handbooks');
    }
};