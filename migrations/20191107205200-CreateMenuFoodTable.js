'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('MenuFoods', {
            idmenu: { // 5_MON_N_1 ==> 5: idhouse, MON : monday, N: noon, 1: index
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            foodId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                allowNull: false,
                primaryKey: true,
                references: {
                    model: 'Food',
                    key: 'id'
                }
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
        return queryInterface.dropTable('MenuFoods');
    }
};