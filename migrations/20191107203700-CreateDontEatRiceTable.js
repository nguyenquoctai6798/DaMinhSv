'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('DontEatRices', {
            accountId: {
                type: Sequelize.STRING,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                allowNull: false,
                references: {
                    model: 'Account',
                    key: 'id'
                }
            },
            noon: {
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue : 0 // 0: not register, 1: register
            },
            afternoon: {
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue : 0 // 0: not register, 1: register
            },
            date: {
                allowNull: false,
                type: Sequelize.STRING
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
        return queryInterface.dropTable('DontEatRices');
    }
};