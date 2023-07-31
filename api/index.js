const express = require('express'),
  bodyParser = require('body-parser'),
  request = require('request'),
  nodemailer = require('nodemailer'),
  app = express(),
  db = require('./db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/email', (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SG_HOST,
    port: process.env.SG_PORT,
    secure: false,
    auth: {
      user: 'apikey',
      pass: process.env.SG_KEY,
    }
  })
  transporter.sendMail({
    from: '"Financial Match" <support@geekex.com>',
    to: `referrals@financialmatch.com`,
    subject: `Referral Partner Program | Financial Match`,
    html: `
      <p>First name: <strong>${req.body.params.firstName}</strong></p>
      <p>Last name: <strong>${req.body.params.lastName}</strong></p>
      <p>Email: <strong>${req.body.params.email}</strong></p>
      <p>Phone: <strong>${req.body.params.phone}</strong></p>
      <p>Notes: <strong>${req.body.params.notes}</strong></p>
    `
  })
    .then(response => {
      res.send({
        status: 'success',
        msg: response
      })
    })
    .catch(error => {
      res.send({
        status: 'error',
        msg: error
      })
    })
})

app.route("/db")
  .get((req, res) => {
    db(`SELECT * FROM users`)
      .then(rows => res.send(rows))
      .catch(err => res.send({status: 'error', msg: err}))
  })
  .post((req, res) => {
    db(`INSERT INTO users (card, type, fullName, phone, email, company, address, ein) VALUES ('${req.body.params.card}', '${req.body.params.type}', '${req.body.params.fullName}', '${req.body.params.phone}', '${req.body.params.email}', '${req.body.params.company}', '${req.body.params.address}', '${req.body.params.ein}')`)
      .then(rows => res.send(rows))
      .catch(err => res.send({status: 'error', msg: err}))
  })

module.exports = {
  path: '/api',
  handler: app,
}
