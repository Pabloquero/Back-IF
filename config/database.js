const Sequelize = require("sequelize");
// Datos originales modificados por seguridad

module.exports = new Sequelize("bbdd", "user", "pass", {
  host: "host",
  dialect: "dialect",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    timestamps: false,
  },
});
