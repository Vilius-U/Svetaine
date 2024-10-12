var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
const session = require('express-session');
const crypto = require('crypto');
const ejs = require('ejs');
const path = require('path');
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: 'mail.instalika.eu',
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL, // Your Gmail address
    pass: process.env.PASS // Your Gmail password
  }
});

router.post('/mail' , (req, res, next) => {

  console.log(req.body);
  checkEmail = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  checkNumber = RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/);

  if (!req.body.name || !req.body.email || !req.body.number || !req.body.message || !checkEmail.test(req.body.email) || !checkNumber.test(req.body.number)) {
    res.status(400);
    return;
  }

ejs.renderFile('./views/validateEmail.ejs', {name: req.body.name, mail: req.body.email, number: req.body.number, message: req.body.message}, function(err, template) {
  if (err) {
    console.log(err);
    res.status(500);
  } else {
    const mailOptions = {
      from: process.env.MAIL, // Sender address
      to: 'viluzk@gmail.com', // Recipient address
      subject: 'Klientas nori susisiekti', // Email subject
      html: template
};
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          res.status(500);
          console.error('Error sending email:', error);
        } else {
          res.status(200);
          console.log('Email sent:', info.response);
        }
      })
    console.log(template);
  }
});
})

module.exports = router;