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

import * as fs from "fs"
import { Paragraph, patchDocument, PatchType, TextRun } from "docx"

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
        fileDOCX(req.body.params.fullName, req.body.params.company, rows.insertId)
        filePDF(req.body.params.company, req.body.params.address, req.body.params.ein, req.body.params.fullName, req.body.params.phone, rows.insertId)
        console.log(rows.insertId);
        return rows.insertId
      })
      .then(ID => {
        return transporter.sendMail({
          from: '"Financial Match" <support@geekex.com>',
          to: 'onyx18121990@gmail.com',
          subject: `Claim Checker`,
          html: `
            <p>Dear ${req.body.params.fullName},</p>
            <p>Fill free to asign attached docs and send they to goverment.</p>
            <p>See you!</p>
            <p>Best regards ;)</p>
          `,
        })
      })
      .then(response => {
        // console.dir(response);
        res.send({
          status: 'success',
          msg: response
        })
      })
      .catch(err => {
        res.send({
          status: 'err',
          msg: err
        })
      })
  })

// attachments: [{
//   filename: 'if_engage_ltr.docx',
//   path: __dirname + `/saved/if_engage_ltr_${ID}.docx`,
// },{
//   filename: 'f8821.pdf',
//   path: __dirname + `/saved/f8821_${ID}.pdf`,
// }]

// let company = 'Acompany'
// let address = 'Aaddress'
// let ein = 'Aein'
// let fullName = 'AfullName'
// let phone = 'Aphone'
// let date = new Date()
// let ID = date.getTime()
// fileDOCX(fullName, company, ID)
// filePDF(company, address, ein, fullName, phone, ID)

module.exports = {
  path: '/api',
  handler: app,
}
