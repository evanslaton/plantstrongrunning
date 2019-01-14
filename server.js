'use strict';
/* global require */

const express = require('express');
const path = require('path');
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.urlencoded({extended: true,}));
app.use(bodyParser.json());

const app = express();
const port = process.env.PORT || 3000;


app.post('/send-email', function (request, response) {
  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: `${process.env.SENDER}`,
      pass: `${process.env.SENDER_PASSWORD}`,
    },
  });

  let mailOptions = {
    from: `Web User <${process.env.SENDER}>`, // sender address
    to: process.env.TO, // Recipient
    subject: 'Web Request', // Subject line
    text: request.body.emailNewsletter, // plain text body
    html: '<b>Web Request</b>', // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    // response.render('index');
  });
});

app.listen(port, () => console.log('Server is running at port: ', port));

