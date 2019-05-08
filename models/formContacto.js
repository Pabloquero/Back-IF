const Sequelize = require("sequelize");
const db = require("../config/database");

const FormContacto = db.define("contacto", {
  nombre: {
    type: Sequelize.STRING
  },
  telefono: {
    type: Sequelize.STRING
  },
  mail: {
    type: Sequelize.STRING
  },
  mensaje: {
    type: Sequelize.TEXT
  },
  categoria: {
    type: Sequelize.STRING
  }
});

module.exports = FormContacto;
