'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('RegisterGoHomeOverNights', {
            accountId: {
                type: Sequelize.STRING,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                primaryKey: true,
                allowNull: false,
                references: {
                    model: 'Account',
                    key: 'id'
                }
            },
            timeout: {
                allowNull: false,
                type: Sequelize.STRING
            },
            timein: {
                allowNull: false,
                type: Sequelize.STRING
            },
            dateout: {
                primaryKey: true,
                allowNull: false,
                type: Sequelize.STRING
            },
            datein: {
                allowNull: false,
                type: Sequelize.STRING
            },
            typeregister:{
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue: 0 //0: go home, 1: over night
            },
            content:{
                allowNull: false,
                type: Sequelize.TEXT
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
        return queryInterface.dropTable('RegisterGoHomeOverNights');
    }
};