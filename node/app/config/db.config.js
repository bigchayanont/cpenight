module.exports = {
  HOST: process.env.DB_URL || "localhost",
  USER: "root",
  PASSWORD: "cpeNight!1",
  DB: "cpeNightdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
