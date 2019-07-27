'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Foods', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            imgfood: {
                allowNull: false,
                type: Sequelize.STRING
            },
            namefood: {
                allowNull: false,
                type: Sequelize.STRING
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
        return queryInterface.dropTable('Foods');
    }
};