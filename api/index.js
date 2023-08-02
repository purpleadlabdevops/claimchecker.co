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
    console.log('START DB ----------');
    let ID
    db(`INSERT INTO users (card, type, fullName, phone, email, company, address, ein) VALUES ('${req.body.params.card}', '${req.body.params.type}', '${req.body.params.fullName}', '${req.body.params.phone}', '${req.body.params.email}', '${req.body.params.company}', '${req.body.params.address}', '${req.body.params.ein}')`)
      .then(rows => {
        ID = rows.insertId
        console.log('inserted '+ID);
        console.log('START DOCX ----------');
        return fileDOCX(req.body.params.fullName, req.body.params.company, rows.insertId)
      })
      .then(rows => {
        console.log('START PDF ----------');
        return filePDF(req.body.params.company, req.body.params.address, req.body.params.ein, req.body.params.fullName, req.body.params.phone, rows.insertId)
      })
      .then(() => {
        console.log('START EMAIL ----------');
        return transporter.sendMail({
          from: '"Financial Match" <support@geekex.com>',
          to: 'onyx18121990@gmail.com',
          subject: `Claim Checker`,
          html: `
            <p>First name: <strong>${req.body.params.firstName}</strong></p>
            <p>Last name: <strong>${req.body.params.lastName}</strong></p>
            <p>Email: <strong>${req.body.params.email}</strong></p>
            <p>Phone: <strong>${req.body.params.phone}</strong></p>
            <p>Notes: <strong>${req.body.params.notes}</strong></p>
          `,
          attachments: [{
            filename: 'if_engage_ltr',
            path: __dirname + `/saved/if_engage_ltr_${rows.insertId}.docx`,
            cid: 'if_engage_ltr'
          },{
            filename: 'f8821',
            path: __dirname + `/saved/f8821_${rows.insertId}.pdf`,
            cid: 'f8821'
          }]
        })
      })
      .then(response => {
        console.log('END EMAIL ----------');
        res.send({
          status: 'success',
          msg: response
        })
      })
      .catch(error => {
        console.log('Error');
        console.dir(error);
        res.send({
          status: 'error',
          msg: error
        })
      })
      .finally(() => {
        console.log('FINALLY ----------');
      })
  })

module.exports = {
  path: '/api',
  handler: app,
}
