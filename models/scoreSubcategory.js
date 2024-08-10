const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ScoreSubcategory = sequelize.define('ScoreSubcategory', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  score_category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'ScoreCategories',
      key: 'id'
    }
  }
});

module.exports = ScoreSubcategory;
