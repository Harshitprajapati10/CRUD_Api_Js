const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Award = sequelize.define('Award', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  event_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Events',
      key: 'id'
    }
  },
  description: {
    type: DataTypes.STRING,
  }
});

module.exports = Award;
