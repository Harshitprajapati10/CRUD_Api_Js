const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dance_competition_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
