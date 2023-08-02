import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { writeFileSync, readFileSync } from "fs";

module.exports = async function(company, address, ein, name, phone, ID){
  const document = await PDFDocument.load(readFileSync(__dirname + '/docs/f8821.pdf')),
        fontFamily = await document.embedFont(StandardFonts.TimesRoman),
        fontSize = 12,
        color = rgb(0, 0, 0),
        page = document.getPage(0),
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

  writeFileSync(__dirname + `/saved/f8821_${ID}.pdf`, await document.save())
}