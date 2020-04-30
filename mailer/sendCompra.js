"use strict";
const nodemailer = require("nodemailer");

module.exports = function sendCompra({
  args: { nombre, telefono, mail, direccion, comuna, comentarios },
}) {
  let transporter = nodemailer.createTransport({
    // Datos originales modificados por seguridad
    host: "host",
    port: 465,
    secure: true,
    auth: {
      user: "email",
      pass: "pass",
    },
  });

  let info = transporter.sendMail({
    from: '"Inmobiliaria Fuenzalida" <no-reply@inmobiliariafuenzalida.com>',
    to:
      "info@inmobiliariafuenzalida.com, alejandraopazo@inmobiliariafuenzalida.com",
    subject: "Nuevo mensaje desde formulario compra de propiedades",
    html: `Nuevo envío de correo desde compra de propiedades:<br/>Nombre: ${nombre}<br/>Teléfono:${telefono}<br/>Mail: ${mail}<br/>Dirección: ${direccion}<br/>Comuna: ${comuna}<br/>Comentarios: ${comentarios}`, // html body
  });
};
