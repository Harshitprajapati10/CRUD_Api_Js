const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ScoreComment = sequelize.define('ScoreComment', {
  score_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Scores',
      key: 'id'
    }
  },
  comment: {
    type: DataTypes.TEXT,
  }
});

module.exports = ScoreComment;
