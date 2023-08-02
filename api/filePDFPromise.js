import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { writeFileSync, readFileSync } from "fs";

module.exports = (company, address, ein, name, phone, ID) => {
  let doc
  return PDFDocument.load(readFileSync(__dirname + '/docs/f8821.pdf'))
    .then(docResult => {
      doc = docResult
      return doc.embedFont(StandardFonts.TimesRoman)
    })
    .then(fontFamily => {
      const fontSize = 12,
            color = rgb(0, 0, 0),
            page = doc.getPage(0),
            { width, height } = page.getSize()

      page.drawText(company, {
        font: fontFamily,
        size: fontSize,
        x: 38,
        y: 660,
        color: color
      })

      page.drawText(address, {
        font: fontFamily,
        size: fontSize,
        x: 38,
        y: 648,
        color: color
      })

      page.drawText(ein, {
        font: fontFamily,
        size: fontSize,
        x: 350,
        y: 662,
        color: color
      })

      page.drawText(phone, {
        font: fontFamily,
        size: fontSize,
        x: 350,
        y: 638,
        color: color
      })

      page.drawText(name, {
        font: fontFamily,
        size: fontSize,
        x: 60,
        y: 100,
        color: color
      })
      return doc.save()
  })
    .then(fileData => {
      writeFileSync(__dirname + `/saved/f8821_${ID}.pdf`, fileData)
      return true
    })
    .catch(()=> false)
}