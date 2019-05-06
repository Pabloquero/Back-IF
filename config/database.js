const Sequelize = require("sequelize");

module.exports = new Sequelize(
  "if_formularios",
  "admin_fuenzalida",
  "fuenzalida123",
  {
    host: "mysql.betafuenzalida.bylcomunicaciones.com",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
      timestamps: false
    }
  }
);
