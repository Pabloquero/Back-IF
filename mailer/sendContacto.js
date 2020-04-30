"use strict";
const nodemailer = require("nodemailer");

module.exports = function sendContacto({
  args: { nombre, telefono, mail, mensaje, categoria },
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
    subject: `Nuevo mensaje desde formulario ${categoria}`,
    html: `Nuevo envío de correo desde formulario ${categoria}:<br/>Nombre: ${nombre}<br/>Teléfono:${telefono}<br/>Mail: ${mail}<br/>Mensaje: ${mensaje}<br/>Categoria: ${categoria}<br/>`, // html body
  });
};
