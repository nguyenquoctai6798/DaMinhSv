'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Documents', {
            id: {
                allowNull: false,
                autoIncrement: true,
                type: Sequelize.INTEGER
            },
            datepushdocument: {
                allowNull: false,
                type: Sequelize.DATE
            },
            titledocument: {
                allowNull: false,
                type: Sequelize.STRING
            },
            linkdocument: {
                allowNull: false,
                type: Sequelize.STRING
            },
            markdelete: {
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
        return queryInterface.dropTable('Documents');
    }
};