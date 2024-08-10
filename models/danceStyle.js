const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DanceStyle = sequelize.define('DanceStyle', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = DanceStyle;
