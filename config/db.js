const Sequelize = require("sequelize")

const sequelize = new Sequelize("mittes", "root", "6NGQrRi8?cXK9Z2m!", {
  host: "39.98.218.111",
  dialect: "mysql",
  port: "3306",
  operatorsAliases: false,
  dialectOptions: {
    charset: "utf8mb4",
    collate: "utf8mb4_unicode_ci",
    supportBigNumbers: true,
    bigNumberStrings: true
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: "+08:00" //东八时区
})

module.exports = {
  sequelize
}
