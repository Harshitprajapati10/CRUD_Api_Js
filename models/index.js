const sequelize = require('../config/database');
const User = require('./user');
const Role = require('./role');
const Permission = require('./permission');
const RolePermission = require('./rolePermission');
const Competition = require('./competition');
const Event = require('./event');
const Award = require('./award');
const ScoreCategory = require('./scoreCategory');
const ScoreSubcategory = require('./scoreSubcategory');
const Score = require('./score');
const ScoreComment = require('./scoreComment');
const DanceStyle = require('./danceStyle');


module.exports = {
  sequelize,
  User,
  Role,
  Permission,
  RolePermission,
  Competition,
  Event,
  Award,
  ScoreCategory,
  ScoreSubcategory,
  Score,
  ScoreComment,
  DanceStyle,
};
