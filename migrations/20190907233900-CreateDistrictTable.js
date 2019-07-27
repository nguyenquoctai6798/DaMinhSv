'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Districts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      iddistrict: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namedistrict: {
        allowNull: false,
        type: Sequelize.STRING
      },
      typedistrict: {
        allowNull: false,
        type: Sequelize.STRING
      },
      provinceId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: false,
        references: {
          model: 'Provinces',
          key: 'idprovince'
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
    return queryInterface.dropTable('Districts');
  }
};