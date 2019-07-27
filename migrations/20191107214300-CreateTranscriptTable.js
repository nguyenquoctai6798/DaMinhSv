'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Transcripts', {
            accountId: {
                type: Sequelize.STRING,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'Account',
                    key: 'id'
                }
            },
            contenttranscript: {
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
        return queryInterface.dropTable('Transcripts');
    }
};