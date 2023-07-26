module.exports = {
    HOST: "localhost",
    USER: "benareli",
    PASSWORD: "123",
    DB: "odanam-data",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };