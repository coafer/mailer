"use strict";
const nodemailer = require("nodemailer");
//const trilogy = require("./trilogy.html");

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "ia2sajz3cesudssx@ethereal.email",
      pass: "qahkHpqnr45mE2z1b6"
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Trilogy Events" <noreply@trilogyedevents.com>', // sender address
    to: "coafer@gmail.com, adrian@graphicafer.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "/trilogy.html" // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
});
