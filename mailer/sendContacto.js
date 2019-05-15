"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
module.exports = function sendContacto({
  args: { nombre, telefono, mail, mensaje, categoria }
}) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "no-reply@inmobiliariafuenzalida.com", // generated ethereal user
      pass: "noreply08012018" // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: '"Prueba 2 👻" <no-reply@inmobiliariafuenzalida.com>', // sender address
    to: "ppizarro@grupobyl.cl", // list of receivers
    subject: "Prueba fuenzalida 2 ✔", // Subject line
    text: "TEST 2", // plain text body
    html: `Nuevo envío de correo desde compra de propiedades:<br/>Nombre: ${nombre}<br/>Teléfono:${telefono}<br/>Mail: ${mail}<br/>Mensaje: ${mensaje}<br/>Categoria: ${categoria}<br/>` // html body
  });

  console.log("Message sent: %s", info.messageId);
};
