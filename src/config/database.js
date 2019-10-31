require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: proccess.env.DB_HOST,
  username: proccess.env.DB_USER,
  password: proccess.env.DB_PASS,
  database: proccess.env.DB_NAME,
  url: proccess.env.DB_URL,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
