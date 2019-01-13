const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
       type: 'OAuth2',
        user: 'web.plant.strong.running@gmail.com',
        clientId: '697563168440-6be5ofmg3flf3gcl0b2pottdoaapp607.apps.googleusercontent.com',
        clientSecret: 'YwFnMM2zaGaa6bMqw-ONPv2B',
        refreshToken: '1/TXGWJWsk1mx75XVICBYjNaFCfvv505BAvBt3FNe6v08'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: 'Plant Strong Running <web.plant.strong.running@gmail.com>',
    to: 'evanslaton@gmail.com',
    subject: 'Web Inquiry',
    text: 'test',
    html: '<b>Hello world?</b>'
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    } else {
    	console.log('Message Sent');
    }
});