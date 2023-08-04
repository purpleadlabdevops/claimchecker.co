const express = require('express'),
  bodyParser = require('body-parser'),
  request = require('request'),
  nodemailer = require('nodemailer'),
  fs = require('fs'),
  app = express(),
  transporter = nodemailer.createTransport({
    host: process.env.SG_HOST,
    port: process.env.SG_PORT,
    secure: false,
    auth: {
      user: 'apikey',
      pass: process.env.SG_KEY,
    }
  }),
  db = require('./db'),
  fileDOCX = require('./fileDOCX'),
  filePDF = require('./filePDF')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.route("/db")
  .get((req, res) => {
    db(`SELECT * FROM users`)
      .then(rows => res.send(rows))
      .catch(err => res.send({status: 'error', msg: err}))
  })
  .post((req, res) => {
    db(`INSERT INTO users (card, type, fullName, phone, email, company, address, ein) VALUES ('${req.body.params.card}', '${req.body.params.type}', '${req.body.params.fullName}', '${req.body.params.phone}', '${req.body.params.email}', '${req.body.params.company}', '${req.body.params.address}', '${req.body.params.ein}')`)
      .then(rows => {
        res.send({
          status: 'success',
          msg: rows.insertId
        })
      })
      .catch(err => {
        res.send({
          status: 'err',
          msg: err
        })
      })
  })

app.route("/file-docx")
  .post((req, res) => {
    fileDOCX(req.body.params.fullName, req.body.params.company, req.body.params.ID, req.body.params.signature)
      .then(response => {
        console.dir(response);
        res.send({
          status: 'success',
          msg: response
        })
      })
      .catch(err => {
        console.dir(err);
        res.send({
          status: 'err',
          msg: err
        })
      })
  })

app.route("/file-pdf")
  .post((req, res) => {
    filePDF(req.body.params.company, req.body.params.address, req.body.params.ein, req.body.params.fullName, req.body.params.phone, req.body.params.ID, req.body.params.signature)
      .then(response => {
        console.dir(response);
        res.send({
          status: 'success',
          msg: response
        })
      })
      .catch(err => {
        console.dir(err);
        res.send({
          status: 'err',
          msg: err
        })
      })
  })

app.route("/send-email")
  .post(function(req, res){
    transporter.sendMail({
      from: '"Claim Checker" <support@geekex.com>',
      to: ['onyx18121990@gmail.com', `${req.body.params.email}`],
      subject: `Claim Checker`,
      html: `
        <p>Dear ${req.body.params.fullName},</p>
        <p>Fill free to asign attached docs and send they to goverment.</p>
        <p>See you!</p>
        <p>Best regards ;)</p>
      `,
      attachments: [{
        filename: 'if_engage_ltr.docx',
        path: req.body.params.linkDOCX,
      },{
        filename: 'f8821.pdf',
        path: req.body.params.linkPDF,
      }]
    })
      .then(response => {
        console.dir(response);
        res.send({
          status: 'success',
          msg: response
        })
      })
      .catch(err => {
        console.dir(err);
        res.send({
          status: 'err',
          msg: err
        })
      })
  })

app.route("/test")
  .post(function(req, res){
    request({
      url: `https://api.signnow.com/oauth2/token`,
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${process.env.SIGNNOW_TOKEN}`,
      },
      formData: {
        username: process.env.SIGNNOW_USER,
          password: process.env.SIGNNOW_PASS,
          grant_type: 'password',
          scope: '*'
      }
    }, (error, result, body) => {
      if(error){
        console.log('error -------------------------')
        console.dir(error);
        res.send({
          status: 'err',
          msg: error
        })
      } else {
        console.log('result -------------------------');
        console.dir(body)
        res.send({
          status: 'success',
          msg: body
        })
      }
    })
  })

// request({
//   url: `https://api-eval.signnow.com/document`,
//   method: 'POST',
//   headers: {
//     'Content-Type': 'multipart/form-data',
//     'Authorization': `Bearer ${process.env.SIGNNOW_TOKEN}`,
//   },
//   formData: {
//     file: __dirname + '/docs/if_engage_ltr.docx'
//   }
// }, (error, result, body) => {
//   if(error){
//     console.log('error -------------------------')
//     console.dir(error)
//   } else {
//     console.log('result -------------------------');
//     console.dir(body)
//   }
// })





module.exports = {
  path: '/api',
  handler: app,
}
