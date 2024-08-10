const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const RolePermission = sequelize.define('RolePermission', {
  role_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Roles',
      key: 'id'
    }
  },
  permission_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Permissions',
      key: 'id'
    }
  }
});

module.exports = RolePermission;
