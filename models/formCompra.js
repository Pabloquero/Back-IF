const Sequelize = require("sequelize");
const db = require("../config/database");

const FormCompra = db.define("compra_props", {
  nombre: {
    type: Sequelize.STRING
  },
  telefono: {
    type: Sequelize.STRING
  },
  mail: {
    type: Sequelize.STRING
  },
  direccion: {
    type: Sequelize.STRING
  },
  comuna: {
    type: Sequelize.STRING
  },
  comentarios: {
    type: Sequelize.TEXT
  }
});

module.exports = FormCompra;
