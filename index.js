'use strict';
/* global require */

const express = require('express');
const path = require('path');
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('./public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true,}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.render('index')
});

app.get('/about', function(req, res) {
  res.render('pages/about')
});

app.get('/coaching_programs', function(req, res) {
  res.render('pages/coaching_programs')
});

app.get('/blog', function(req, res) {
  res.render('pages/blog')
});

app.get('/contact', function(req, res) {
  res.render('pages/contact')
});

// app.post('/send-email', sendEmail);
// app.post('/send-contact-info', sendContactInformation);
app.post('/send-email', function (req, res) {
  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SENDER,
      pass: process.env.SENDER_PASSWORD,
    },
  });

  let textBody;
  if (req.body.emailNewsletter) {
    textBody = `A vistor to your website has requested to be added to your newsletter mailing list: ${req.body.emailNewsletter}`;
  } else if (req.body.blogTopic) {
    textBody = `A visitor to your website would like you to write a blog about ${req.body.blogTopic}`;
  } else if (req.body.email) {
    let name = req.body.name ? req.body.name : 'No name given';
    let tel = req.body.phone ? req.body.phone : 'No phone number given';
    let message = req.body.message ? req.body.message : 'No message written'
    textBody = `Awesome! You have a visitor to your website who would like you to contact them!\n
    Name: ${name}\n
    Phone: ${tel}\n
    Email: ${req.body.email}\n
    Message: ${message}`
  }

  let mailOptions = {
    from: `Web User <${process.env.SENDER}>`, // sender address
    to: process.env.TO, // Recipient
    subject: 'Web Request', // Subject line
    text: textBody, // plain text body
    // html: '<b>Web Request</b>', // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log(req.body.emailNewsletter);
    console.log('Message %s sent: %s', info.messageId, info.response);
    res.render(req.body.route);
  });
});

app.listen(port, () => console.log('Server is running at port: ', port));

