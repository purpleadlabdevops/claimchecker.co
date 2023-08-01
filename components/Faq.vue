<template>
  <section class="faq">
    <div class="faq__container">
      <h3 class="faq__title">Frequently Asked Questions</h3>
      <ul class="faq__nav">
        <li><a href="#faq-qualification">Qualification</a></li>
        <li><a href="#faq-tax-credit">Tax Credit</a></li>
      </ul>
      <div id="faq-qualification" class="faq__group">
        <h3 class="faq__group-title">Qualification</h3>
        <div class="faq__block">
          <blocks-faq v-for="(faq, i) in tax" :key="'tax_' + i">
            <template #title>{{ faq.title }}</template>
            <template #dscr>{{ faq.dscr }} </template>
          </blocks-faq>
        </div>
      </div>
      <div id="faq-tax-credit" class="faq__group">
        <h3 class="faq__group-title">Tax Credit</h3>
        <div class="faq__block">
          <blocks-faq v-for="(faq, i) in credit" :key="'credit_' + i">
            <template #title>{{ faq.title }}</template>
            <template #dscr><div v-html="faq.dscr"></div></template>
          </blocks-faq>
        </div>
      </div>
      <div class="faq-logos">
        <img src="@/assets/img/logos/img-11.png">
        <img src="@/assets/img/logos/img-12.png">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'faq',
  data() {
    return {
      tax: [
        {
          title: 'Can I qualify if I’m a 1099 contractor?',
          dscr:
            ' Unfortunately no. This program is only for companies who paid W2\n' +
            '              wages to non-owners.',
        },
        {
          title: 'Can I qualify if I don’t have any W2 employees?',
          dscr: 'Unfortunately no. This program is only for companies who paid W2 wages to non-owners.',
        },
        {
          title: 'Can I qualify for ERC when I got a PPP loan?',
          dscr: 'Yes! There are multiple quarters you can qualify for, even if you got a PPP loan. Unfortunately you can’t use the same covered time period that you used for PPP, which might reduce your ERC amount, but you can most definitely qualify for ERC.',
        },
        {
          title:
            'What if my revenue went up in 2020 or 2021? Can I still qualify?',
          dscr: 'Yes! It’s called the “Employee Retention” credit, not the “Revenue Reduction” credit. It’s intended to help out the businesses that kept people employed during the hard times of pandemic, so you can qualify even if your revenue went up. You’ll need to qualify using one of the other qualification checks though – shutdowns / mandates or supply chain disruption.',
        },
        {
          title: 'How long is the ERC program open for?',
          dscr: 'For most businesses this will be open into 2024 (unless they change the rules again). It’s open as long as you can file amended 941-X returns, which is the later of 3 years from the date you filed your original return, or 2 years from the date you paid the payroll tax.',
        },
        {
          title: 'What if I have bad credit? Is there a credit check involved?',
          dscr: 'It doesn’t matter, because this is not a loan – it’s a tax credit. There are no credit checks, collateral, or personal guarantees required.',
        },
        {
          title: 'Can I qualify for ERC if my business is now closed?',
          dscr: 'Yes, there is a possibility. It depends on when the business closed.',
        },
      ],
      credit: [
        {
          title: 'What documents do I need to send you?',
          dscr: 'To complete your tax credit, we’ll work with you and your CPA to get the following documents:<ul><li>Payroll Journals outlining all payments, deductions, contributions and taxes for each employee for each paycheck during your ERC eligibility period.</li><li>Filed 941, 943 or 944 payroll reports.</li><li>Profit and Loss Statements (P&amp;Ls) for 2020 and 2021</li><li>Tax returns for 2020 and 2021</li><li>PPP Loan Forgiveness Application (if applicable)</li></ul>',
        },
        {
          title: 'Do I need to repay the tax credit?',
          dscr: 'Nope! There is nothing to repay with a tax credit. This is not a loan.',
        },
        {
          title: 'How long does it take to get my credit?',
          dscr: 'We are generally telling clients between 7-9 months. We take a few weeks to do the work, and the IRS is variable in how long it’s taking to process, but we’re seeing in the 7-9 month range.',
        },
        {
          title: 'When will the ERC funds run out?',
          dscr: 'There is no set amount…',
        },
        {
          title: 'What if I have back taxes on my account with the IRS?',
          dscr: 'If you owe back taxes on your account, the IRS will deduct the amount you owe in back taxes from the credit amount, and will pay you the difference.',
        },
        {
          title: 'Is the ERC credit taxable?',
          dscr: 'The ERC credit is not actually considered taxable income for federal tax purposes. But what it might do is reduce your company’s deductible wage expenses by the tax credit amount, which will most likely increase your net profit, and therefore what you pay taxes on. Please provide the credit to your CPA or tax preparer for what to do.',
        },
        {
          title: 'Will I get in trouble with the IRS for filing?',
          dscr: 'Absolutely not! The IRS created this program and doubled-down on making it easier and more lucrative for businesses, so they really want you to file and use it.',
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.faq {
  padding: 60px 0;
  background: var(--text-white);
}
.faq__container {
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
}
.faq__title {
  text-align: center;
  font-size: 30px;
  color: var(--fm-mint);
  font-weight: 600;
}
.faq__nav {
  margin: 0;
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  @media(max-width:767px){
    flex-direction: column;
  }

  a {
    font-size: 18px;
    text-align: center;
    display: block;
    text-decoration: none;
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    margin: 0 5px 10px 5px;
    color: #146c70;
    transition: 0.2s ease all;
    box-shadow: 1px 1px 5px rgb(0 0 0 / 10%);
    &:hover {
      box-shadow: 4px 4px 10px rgb(0 0 0 / 10%);
    }
    @media(min-width:768px){
      display: inline-block;
    }
  }
}
.faq__group-title {
  margin-bottom: 1rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
  margin-top: 30px;
  font-size: 28px;
}
.faq__block {
  background: #fff;
  padding: 25px;
  box-shadow: 0 3px 25px rgb(0 0 0 / 10%);
  border-radius: 20px;
}
.faq-logos{
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  img{
    display: block;
    margin: 0 10px;
    @media(max-width:767px){
      width: calc(50% - 20px);
      height: auto;
    }
    @media(min-width:768px){
      margin: 0 30px;
    }
  }
}
</style>
