import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { writeFileSync, readFileSync } from "fs";

module.exports = (company, address, ein, name, phone, ID) => {
  let doc
  console.log('file pdf started inside -------------------');
  return PDFDocument.load(readFileSync(__dirname + '/docs/f8821.pdf'))
    .then(docResult => {
      console.log(1);
      doc = docResult
      return doc.embedFont(StandardFonts.TimesRoman)
    })
    .then(fontFamily => {
      console.log(2);
      const fontSize = 12,
            color = rgb(0, 0, 0),
            page = doc.getPage(0),
            { width, height } = page.getSize()
      console.log(3);
      page.drawText(company, {
        font: fontFamily,
        size: fontSize,
        x: 38,
        y: 660,
        color: color
      })
      console.log(4);
      page.drawText(address, {
        font: fontFamily,
        size: fontSize,
        x: 38,
        y: 648,
        color: color
      })
      console.log(5);
      page.drawText(ein, {
        font: fontFamily,
        size: fontSize,
        x: 350,
        y: 662,
        color: color
      })
      console.log(6);
      page.drawText(phone, {
        font: fontFamily,
        size: fontSize,
        x: 350,
        y: 638,
        color: color
      })
      console.log(7);
      page.drawText(name, {
        font: fontFamily,
        size: fontSize,
        x: 60,
        y: 100,
        color: color
      })
      console.log(8);
      return doc.save()
    })
    .then(fileData => {
      console.log(9);
      writeFileSync(__dirname + `/saved/f8821_${ID}.pdf`, fileData)
      console.log(10);
      return true
    })
    .catch(()=> false)
}