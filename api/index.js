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
    db(`INSERT INTO users (fullName, phone, email, company, address, ein, questions) VALUES ('${req.body.params.fullName}', '${req.body.params.phone}', '${req.body.params.email}', '${req.body.params.company}', '${req.body.params.address}', '${req.body.params.ein}', '${req.body.params.questions}')`)
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

// app.route("/send-email")
//   .post(function(req, res){
//     transporter.sendMail({
//       from: '"Claim Checker" <support@geekex.com>',
//       to: ['onyx18121990@gmail.com', `${req.body.params.email}`],
//       subject: `Claim Checker`,
//       html: `
//         <p>Dear ${req.body.params.fullName},</p>
//         <p>Fill free to asign attached docs and send they to goverment.</p>
//         <p>See you!</p>
//         <p>Best regards ;)</p>
//       `,
//       attachments: [{
//         filename: 'if_engage_ltr.docx',
//         path: req.body.params.linkDOCX,
//       },{
//         filename: 'f8821.pdf',
//         path: req.body.params.linkPDF,
//       }]
//     })
//       .then(response => {
//         console.dir(response);
//         res.send({
//           status: 'success',
//           msg: response
//         })
//       })
//       .catch(err => {
//         console.dir(err);
//         res.send({
//           status: 'err',
//           msg: err
//         })
//       })
//   })

app.route("/signnow")
  .post(function(req, res){
    console.log('START signnow --------------------------------------------------');
    let access_token, pdfID, docxID
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
        formDoc.append('url', `https://claimchecker.co/saved/Visa_MC_Letter_${req.body.params.ID}.docx`)
        return axios.post(`${process.env.SIGNNOW_URL}/v2/documents/url`, formDoc, {
          headers: {
            ...formDoc.getHeaders(),
            'Authorization': `Bearer ${access_token}`,
          }
        })
      })
      .then(docxResult => {
        docxID = docxResult.data.id

        return axios.put(`${process.env.SIGNNOW_URL}/document/${docxResult.data.id}`, {
          headers: {
            'Authorization': `Bearer ${access_token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: {
            fields: [
              {
                x: 0,
                y: 0,
                width: 1,
                height: 1,
                type: "text",
                page_number: 0,
                required: false,
                role: "Signer 1",
                custom_defined_option: false,
                name: "text1",
                validator_id: "824085fd04ce63b670b11b2e83457d59ac796a39"
              }
            ],
            elements: [],
            client_timestamp: "timestamp"
          }
        })
      })
      .then(() => {
        const formPdf = new FormData();
        formPdf.append('url', `https://claimchecker.co/saved/Visa_MC_8821_${req.body.params.ID}.pdf`)
        return axios.post(`${process.env.SIGNNOW_URL}/v2/documents/url`, formPdf, {
          headers: {
            ...formPdf.getHeaders(),
            'Authorization': `Bearer ${access_token}`,
          }
        })
      })
      .then(pdfResult => {
        pdfID = pdfResult.data.id

        return axios.put(`${process.env.SIGNNOW_URL}/document/${pdfResult.data.id}`, {
          headers: {
            'Authorization': `Bearer ${access_token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: {
            fields: [
              {
                x: 0,
                y: 0,
                width: 1,
                height: 1,
                type: "text",
                page_number: 0,
                required: false,
                role: "Signer 1",
                custom_defined_option: false,
                name: "text1",
                validator_id: "824085fd04ce63b670b11b2e83457d59ac796a39"
              }
            ],
            elements: [],
            client_timestamp: "timestamp"
          }
        })
      })
      .then(() => {
        console.dir({
          access_token: access_token,
          pdfID: pdfID,
          docxID: docxID
        });
        res.send({
          status: 'success',
          msg: {
            access_token: access_token,
            pdfID: pdfID,
            docxID: docxID
          }
        })
      })
      .catch(err => {
        res.send({
          status: 'error',
          msg: err
        })
      })
  })

app.route("/signnow-invite")
  .post(function(req, res){
    axios.post(`${process.env.SIGNNOW_URL}/document/${req.body.params.docxID}/invite`, {
      headers: {
        'Authorization': `Bearer ${req.body.params.access_token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: {
        document_id: req.body.params.docxID,
        to: [{
          email: req.body.params.email,
          role: req.body.params.fullName,
          order: 1,
          prefill_signature_name: "Signer 1",
          force_new_signature: 1,
          reassign: "0",
          decline_by_signature: "0",
          reminder: 0,
          expiration_days: 30,
          authentication_type: "password",
          password: "123456",
          subject: `Claim Checker needs your signature`,
          message: `Dear client, Claim Checker invited you to sign the Invoice document`
        }],
        from: process.env.SIGNNOW_USER,
        subject: `Claim Checker needs your signature`,
        message: `Dear client, Claim Checker invited you to sign the Invoice document`
      }
    })
      .then(result => {
        return axios.post(`${process.env.SIGNNOW_URL}/document/${req.body.params.pdfID}/invite`, {
          headers: {
            'Authorization': `Bearer ${req.body.params.access_token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          data: {
            document_id: req.body.params.docxID,
            to: [{
              email: req.body.params.email,
              role: req.body.params.fullName,
              order: 1,
              prefill_signature_name: "Signer 1",
              force_new_signature: 1,
              reassign: "0",
              decline_by_signature: "0",
              reminder: 0,
              expiration_days: 30,
              authentication_type: "password",
              password: "123456",
              subject: `Claim Checker needs your signature`,
              message: `Dear client, Claim Checker invited you to sign the Invoice document`
            }],
            from: process.env.SIGNNOW_USER,
            subject: `Claim Checker needs your signature`,
            message: `Dear client, Claim Checker invited you to sign the Invoice document`
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

/*

curl --request POST \
  --url https://api.signnow.com/document/60bfca1449e64719854b6534eae5a1b7d6b87d82/invite \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer 4dafa04477805df0215915a784c5a8af6854b0549a43aa20068a4e46277c9054' \
  --header 'Content-Type: application/json' \
  --header 'Content-type: ' \
  --data '{
  "document_id": "60bfca1449e64719854b6534eae5a1b7d6b87d82",
  "to": [
    {
      "email": "onyx18121990@gmail.com",
      "role": "Signer 1",
      "order": 1,
      "prefill_signature_name": "Signer 1",
      "force_new_signature": 1,
      "reassign": "0",
      "decline_by_signature": "0",
      "reminder": 0,
      "expiration_days": 30,
      "authentication_type": "password",
      "password": "123456",
      "subject": "You’ve got a new signature request",
      "message": "Hi, this is an invite to sign a document from sender@emaildomain.com."
    }
  ],
  "from": "support@claimchecker.co",
  "subject": "support@claimchecker.co needs your signature",
  "message": "support@claimchecker.co invited you to sign the Invoice document"
}'

*/

module.exports = {
  path: '/api',
  handler: app,
}
