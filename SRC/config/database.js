require('dotenv/config');

module.exports = {
  dialect: 'mysql',
  host:  process.env.HOST,
  username: process.env.USER_NAME,
  password:  process.env.PASSWORD,
  database:  process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
