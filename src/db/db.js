const { Sequelize } = require('sequelize');
const modelComment = require("./models/comments")

require('dotenv').config();

const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`)

modelComment(sequelize)

let {Comment} = sequelize.models

async function connectDb() {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

connectDb()

module.exports = { ...sequelize.models, sequelize};