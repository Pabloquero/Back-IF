"use strict";
const nodemailer = require("nodemailer");

module.exports = function sendContacto({
  args: { nombre, telefono, mail, mensaje, categoria }
}) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "no-reply@inmobiliariafuenzalida.com",
      pass: "noreply08012018"
    }
  });

  let info = transporter.sendMail({
    from: '"Inmobiliaria Fuenzalida" <no-reply@inmobiliariafuenzalida.com>',
    to: "ppizarro@grupobyl.cl",
    subject: `Nuevo mensaje desde formulario ${categoria}`,
    html: `Nuevo envío de correo desde compra de propiedades:<br/>Nombre: ${nombre}<br/>Teléfono:${telefono}<br/>Mail: ${mail}<br/>Mensaje: ${mensaje}<br/>Categoria: ${categoria}<br/>` // html body
  });

  console.log("Message sent: %s", info.messageId);
};
