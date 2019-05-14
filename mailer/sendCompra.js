"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
module.exports = function sendCompra({
  args: { nombre, telefono, mail, direccion, comuna, comentarios }
}) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "pruebaweb@grupobyl.cl", // generated ethereal user
      pass: "Z5[76w6934nM4rz" // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: '"Prueba 👻" <pruebaweb@grupobyl.cl>', // sender address
    to: "ppizarro@grupobyl.cl, dsanchez@grupobyl.cl", // list of receivers
    subject: "Prueba fuenzalida ✔", // Subject line
    text: "TEST", // plain text body
    html: `Nuevo envío de correo desde compra de propiedades:<br/>Nombre: ${nombre}<br/>Teléfono:${telefono}<br/>Mail: ${mail}<br/>Dirección: ${direccion}<br/>Comuna: ${comuna}<br/>Comentarios: ${comentarios}` // html body
  });

  console.log("Message sent: %s", info.messageId);
};
