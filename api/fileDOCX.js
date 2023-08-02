import * as fs from "fs"
import { Paragraph, patchDocument, PatchType, TextRun } from "docx"

module.exports = (name, company, ID) => {
  return new Promise((resolve, reject) => {
    const date = new Date()
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
        fs.writeFileSync(__dirname + `/saved/if_engage_ltr_${ID}.docx`, doc)
      })
      .catch(err => {
        reject(err)
      })
      .finally(() => {
        resolve(__dirname + `/saved/if_engage_ltr_${ID}.docx`)
      })
  })
}