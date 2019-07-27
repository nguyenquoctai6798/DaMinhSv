'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Provinces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      idprovince: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameprovince: {
        allowNull: false,
        type: Sequelize.STRING
      },
      typeprovince: {
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
    return queryInterface.dropTable('Provinces');
  }
};