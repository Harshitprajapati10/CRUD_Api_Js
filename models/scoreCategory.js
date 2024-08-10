const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ScoreCategory = sequelize.define('ScoreCategory', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = ScoreCategory;
