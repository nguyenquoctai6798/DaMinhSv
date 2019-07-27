'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Notifications', {
            id: { 
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            imgnotification: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            datepush: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            titlenotification: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            subcontent: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            content: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            markdelete: {
                type: Sequelize.INTEGER,
                allowNull: false,
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
        return queryInterface.dropTable('Notifications');
    }
};