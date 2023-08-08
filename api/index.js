const express = require('express'),
  bodyParser = require('body-parser'),
  nodemailer = require('nodemailer'),
  axios = require('axios'),
  FormData = require('form-data'),
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
    db(`INSERT INTO users (card, type, revenue, fullName, phone, email, company, address, ein) VALUES ('${req.body.params.card}', '${req.body.params.type}', '${req.body.params.revenue}', '${req.body.params.fullName}', '${req.body.params.phone}', '${req.body.params.email}', '${req.body.params.company}', '${req.body.params.address}', '${req.body.params.ein}')`)
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
    fileDOCX(req.body.params.fullName, req.body.params.company, req.body.params.ID, req.body.params.address)
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
    filePDF(req.body.params.company, req.body.params.address, req.body.params.ein, req.body.params.fullName, req.body.params.phone, req.body.params.ID)
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

app.route("/signnow")
  .post(function(req, res){
    let access_token
    const form = new FormData();
    form.append('username', `${process.env.SIGNNOW_USER}`);
    form.append('password', `P@TiTTqAejw#6^Do`);
    form.append('grant_type', 'password');
    form.append('scope', '*');
    axios.post(`${process.env.SIGNNOW_URL}/oauth2/token`, form, {
      headers: {
        ...form.getHeaders(),
        'Authorization': `Basic ${process.env.SIGNNOW_TOKEN}`
      }
    })
      .then(tokenData => {
        access_token = tokenData.data.access_token
        const formDoc = new FormData();
        formDoc.append('url', `https://claimchecker.co/saved/if_engage_ltr_${req.body.params.ID}.docx`)
        return axios.post(`${process.env.SIGNNOW_URL}/v2/documents/url`, formDoc, {
          headers: {
            ...formDoc.getHeaders(),
            'Authorization': `Bearer ${access_token}`,
          }
        })
      })
      .then(() => {
        const formPdf = new FormData();
        formPdf.append('url', `https://claimchecker.co/saved/f8821_${req.body.params.ID}.pdf`)
        return axios.post(`${process.env.SIGNNOW_URL}/v2/documents/url`, formPdf, {
          headers: {
            ...formPdf.getHeaders(),
            'Authorization': `Bearer ${access_token}`,
          }
        })
      })
      .then(response => {
        res.send({
          status: 'success',
          msg: response.data
        })
      })
      .catch(err => {
        res.send({
          status: 'error',
          msg: err
        })
      })
  })

module.exports = {
  path: '/api',
  handler: app,
}
