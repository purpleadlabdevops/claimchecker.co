import * as fs from "fs"
import { Paragraph, patchDocument, PatchType, TextRun } from "docx"

module.exports = (name, company, ID) => {
  console.log('START MODULE docx ----------');
  return new Promise((resolve, reject) => {
    const date = new Date()
    console.log('START MODULE PROMISE docx ----------');
    patchDocument(fs.readFileSync(__dirname + '/docs/if_engage_ltr.docx'), {
      patches: {
        name: {
          type: PatchType.PARAGRAPH,
          children: [new TextRun({text: name, bold: true})]
        },
        date: {
          type: PatchType.PARAGRAPH,
          children: [new TextRun(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`)]
        },
        company: {
          type: PatchType.PARAGRAPH,
          children: [new TextRun({text: company, bold: true})]
        }
      }
    })
      .then(doc => {
        console.log('START MODULE PROMISE THEN docx ----------');
        fs.writeFileSync(__dirname + `/saved/if_engage_ltr_${ID}.docx`, doc)
      })
      .catch(err => {
        console.log('START MODULE PROMISE ERR docx ----------');
        reject(err)
      })
      .finally(() => {
        console.log('START MODULE PROMISE FINALLY docx ----------');
        resolve(true)
      })
  })
}