'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Accounts', {
      idaccount: {
        allowNull: false,
        type: Sequelize.STRING,
        primaryKey: true,
      },
      avatar: {
        allowNull: false,
        type: Sequelize.STRING
      },
      holyname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      firstname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      birth: {
        allowNull: false,
        type: Sequelize.DATE
      },
      nativeland: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      facebook: {
        allowNull: false,
        type: Sequelize.STRING
      },
      houseId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: false,
        references: {
          model: 'Houses',
          key: 'id'
        }
      },
      schoolId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: false,
        references: {
          model: 'Schools',
          key: 'id'
        }
      },
      specialized: {
        allowNull: false,
        type: Sequelize.STRING
      },
      yearstudent: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      skill: {
        allowNull: false,
        type: Sequelize.STRING
      },
      monthjoin: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      yearjoin: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      monthunjoin: {
        type: Sequelize.INTEGER
      },
      yearunjoin: {
        type: Sequelize.INTEGER
      },
      fathername: {
        allowNull: false,
        type: Sequelize.STRING
      },
      mothername: {
        allowNull: false,
        type: Sequelize.STRING
      },
      numberparent1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      numberparent2: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dioceseId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: false,
        references: {
          model: 'Dioceses',
          key: 'id'
        }
      },
      parishId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: false,
        references: {
          model: 'Parishes',
          key: 'id'
        }
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
      role: {
        allowNull: false,
        type: Sequelize.STRING
      },
      typemember: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      active: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Accounts');
  }
};