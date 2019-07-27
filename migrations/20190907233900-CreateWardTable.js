'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Wards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      idward: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameward: {
        allowNull: false,
        type: Sequelize.STRING
      },
      typeward: {
        allowNull: false,
        type: Sequelize.STRING
      },
      districtId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: false,
        references: {
          model: 'Districts',
          key: 'iddistrict'
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
    return queryInterface.dropTable('Wards');
  }
};