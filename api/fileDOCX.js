import * as fs from "fs"
import {  ExternalHyperlink, HeadingLevel, ImageRun, Paragraph, patchDocument, PatchType, Table, TableCell, TableRow, TextDirection, TextRun, VerticalAlign } from "docx"

module.exports = (name, company, ID) => {
  return new Promise((resolve, reject) => {
    const date = new Date()
    patchDocument(fs.readFileSync(__dirname + '/docs/if_engage_ltr.docx'), {
      patches: {
        name: {
          type: PatchType.PARAGRAPH,
          children: [new TextRun(name)]
        },
        date: {
          type: PatchType.PARAGRAPH,
          children: [new TextRun(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`)]
        },
        company: {
          type: PatchType.PARAGRAPH,
          children: [new TextRun(company)]
        },
        txt1: {
          type: PatchType.PARAGRAPH,
          children: [new TextRun(`Thank you very much for the opportunity to assist ${name} (“${company}”).  As discussed, this letter (the “Agreement”) outlines the terms and conditions of our engagement to assist ${company}.`)]
        },
        txt2: {
          type: PatchType.PARAGRAPH,
          children: [new TextRun(`Ryan, LLC (“Ryan”) will assist ${company} with ${company}’s preparation and submission of claims available to ${company}`)]
        },
        txt3: {
          type: PatchType.PARAGRAPH,
          children: [new TextRun(`All requests to submit such claims are subject to ${company}’s approval. ${company} agrees not to unduly withhold or delay such approval. ${company} acknowledges that it has the ability to file claims on its own and has agreed to retain Ryan to assist in these matters.`)]
        },
        txt4: {
          type: PatchType.PARAGRAPH,
          children: [new TextRun(`In the event that Ryan obtains or recovers any amounts on ${company}’s behalf related to those claims that have been approved by the Claims Administrator or via a sale transaction with a third party purchaser relating to ${company}’s claim in this matter or via any other method in which ${company} receives monies relating to its claim in this matter, ${company} agrees to pay Ryan and hereby assigns to Ryan, as compensation for this service, twenty five percent (25%) of any amounts paid to or otherwise realized by ${company} pursuant to the terms of the above-described settlement agreements or sale transaction. ${company} agrees that Ryan’s fees shall be based upon the gross amounts attributable to Ryan and shall not be reduced by any existing liabilities of ${company} that may be applied or offset against such amounts. Our fee will be invoiced upon ${company}’s receipt or realization of any amounts or benefits related to the claims. In the event Ryan does not obtain or recover any amounts on ${company}’s behalf, then no fee will be due to Ryan.`)]
        },
        txt5: {
          type: PatchType.PARAGRAPH,
          children: [new TextRun(`${company} acknowledges that the filing of a claim on behalf of ${company} does not guarantee that ${company} will receive monies from the settlement funds or from any third-party other source. `)]
        },
        txt6: {
          type: PatchType.PARAGRAPH,
          children: [new TextRun(`All invoices are due and payable in full within thirty (30) days. ${company} agrees to pay interest of one and one-half percent (1½%) per month on any past due fees.  ${company} further agrees to pay all costs of collection, including, but not limited to, any collection agency or attorneys’ fees, incurred by Ryan in connection with fees more than sixty (60) days past due.  Ryan accepts checks, electronic funds transfers (EFTs), credit cards, and purchasing cards.  If payment is made using a credit card or purchasing card, ${company} authorizes Ryan to add a processing fee to the payment.  Such processing fee is currently three percent (3%) of the payment amount and is subject to change upon thirty (30) days prior notice.`)]
        },
        txt7: {
          type: PatchType.PARAGRAPH,
          children: [new TextRun(`Additionally, ${company} agrees that Ryan’s work product, including specific engagement procedures and techniques, constitutes proprietary and exclusive information, and ${company} further agrees not to disclose such information to any third party without obtaining prior written approval from Ryan.  This Agreement does not include information independently developed by ${company}, information previously known to ${company}, or information rightfully received by ${company} from a third party without confidential limitations.`)]
        },
        txt8: {
          type: PatchType.PARAGRAPH,
          children: [new TextRun(`Based upon the names of parties and other persons relevant to this Matter as provided by ${company}, Ryan is unaware of any conflict of interest in the performance of the Agreement.  Should Ryan become aware of a conflict of interest, at Ryan’s discretion, Ryan may withdraw from the Agreement.  ${company} acknowledges that Ryan may be retained at any time in an unrelated matter to represent certain of its ${company}’s interests, if any, that are in opposition to ${company}’s interests underlying in this Agreement, and ${company} agrees that such matter(s) would not be considered a conflict of interest other than at the discretion of Ryan.`)]
        },
        txt9: {
          type: PatchType.PARAGRAPH,
          children: [new TextRun(`Ryan does not guarantee a particular result in a particular matter, and Ryan shall not be liable for an adverse or unsatisfactory result unless such result is solely and directly caused by Ryan’s negligence.  Ryan shall not be liable for the following:  (i) any failure or delay by ${company} in executing claims, forms, or letters of authorization; (ii) inaccurate, untimely, incomplete, or otherwise unreliable information provided by ${company} or its representatives; or (iii) statutory, administrative, or judicial changes or rulings occurring after the submission of claims or filings to the jurisdictions. Ryan shall not be liable to ${company} for any claim, liability, damage, or expense under any theory in excess of the amount actually paid by ${company} to Ryan under this Agreement during the previous twelve (12) months.`)]
        },
        txt10: {
          type: PatchType.PARAGRAPH,
          children: [new TextRun(`This Agreement shall be governed by and construed in accordance with the laws of the State of Texas.  Exclusive venue for any dispute with respect to this Agreement shall reside in a court of competent jurisdiction in Dallas, Dallas County, Texas. ${company} represents that it has the authority to bind all ${company} affiliates and subsidiaries receiving services under this Agreement. ${company} will be responsible for all fees earned by Ryan under this Agreement.`)]
        },
        txt11: {
          type: PatchType.PARAGRAPH,
          children: [new TextRun(`To the extent ${company} instructs Ryan to investigate the potential sale of a claim prior to final determination by the Claims Administrator; Ryan will attempt to locate a buyer, analyze ${company}’s data for purposes of estimation of value in a potential sale setting, review and analyze the offer of said buyer and assist in the collection of funds from the buyer. `)]
        },
        image1: {
          type: PatchType.PARAGRAPH,
          children: [new ImageRun({
            data: fs.readFileSync(__dirname+'/saved/signature.png'),
            transformation: { width: 100, height: 100 }
          })]
        },
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