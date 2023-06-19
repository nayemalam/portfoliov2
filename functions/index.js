'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const myEmail = 'nayem.dev@gmail.com';

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.submit = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return;
    }

    const mailOptions = {
      from: `${req.body.name} <${req.body.email}>`,
      replyTo: req.body.email,
      to: myEmail,
      subject: req.body.subject,
      text: `${req.body.message}`,
      html: `
        <p>New email from ${req.body.name} (${req.body.email}):</p> 
        <p><strong>Message:</strong> <br/> ${req.body.message}</p>
      `,
    };

    return mailTransport.sendMail(mailOptions).then(() => {
      console.log('New email sent to:', myEmail);
      res.status(200).send({ isEmailSend: true });
      return;
    });
  });
});
