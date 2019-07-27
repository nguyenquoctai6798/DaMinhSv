'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Houses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      idhouse: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imghouse: {
        allowNull: false,
        type: Sequelize.STRING
      },
      namehouse: {
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
          key: 'id'
        }
      },
      districtId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: false,
        references: {
          model: 'Districts',
          key: 'id'
        }
      },
      wardId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: false,
        references: {
          model: 'Wards',
          key: 'id'
        }
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      discriptionshouse: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      markdelete: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Houses');
  }
};