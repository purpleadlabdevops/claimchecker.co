const express = require('express'),
  bodyParser = require('body-parser'),
  request = require('request'),
  nodemailer = require('nodemailer'),
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
        console.dir(rows.insertId);
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

app.route("/docx")
  .post((req, res) => {
    fileDOCX(req.body.params.fullName, req.body.params.company, req.body.params.ID)
      .then(res => {
        res.send({
          status: 'success',
          msg: res
        })
      })
      .catch(err => {
        res.send({
          status: 'err',
          msg: err
        })
      })
  })

app.route("/pdf")
  .post((req, res) => {
    filePDF(req.body.params.company, req.body.params.address, req.body.params.ein, req.body.params.fullName, req.body.params.phone, req.body.params.ID)
      .then(res => {
        res.send({
          status: 'success',
          msg: res
        })
      })
      .catch(err => {
        res.send({
          status: 'err',
          msg: err
        })
      })
  })

app.route("/email")
  .post((req, res) => {
    transporter.sendMail({
      from: '"Financial Match" <support@geekex.com>',
      to: 'onyx18121990@gmail.com',
      subject: `Claim Checker`,
      html: `
        <p>Dear ${req.body.params.fullName},</p>
        <p>Fill free to asign attached docs and send they to goverment.</p>
        <p>See you!</p>
        <p>Best regards ;)</p>
      `,
      attachments: [{
        filename: 'if_engage_ltr',
        path: __dirname + `/saved/if_engage_ltr_${req.body.params.ID}.docx`,
        cid: 'if_engage_ltr'
      },{
        filename: 'f8821',
        path: __dirname + `/saved/f8821_${req.body.params.ID}.pdf`,
        cid: 'f8821'
      }]
    })
      .then(res => {
        res.send({
          status: 'success',
          msg: res
        })
      })
      .catch(err => {
        res.send({
          status: 'err',
          msg: err
        })
      })
  })

// let company = 'Acompany'
// let address = 'Aaddress'
// let ein = 'Aein'
// let fullName = 'AfullName'
// let phone = 'Aphone'
// let date = new Date()
// let ID = date.getTime()
// fileDOCX(fullName, company, ID)
//   .then(result => {
//     console.log('fileDOCX -----');
//     console.dir(result)
//     return filePDF(company, address, ein, fullName, phone, ID)
//   })
//   .then(result => {
//     console.log('filePDF -----');
//     console.dir(result)
//   })

module.exports = {
  path: '/api',
  handler: app,
}
