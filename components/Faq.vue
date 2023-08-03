<template>
  <section class="faq">
    <div class="faq__container">
      <h3 class="faq__title">Frequently Asked Questions</h3>
      <div id="faq-qualification" class="faq__group">
        <div class="faq__block">
          <blocks-faq v-for="(faq, i) in tax" :key="'tax_' + i">
            <template #title>{{ faq.title }}</template>
            <template #dscr>{{ faq.dscr }} </template>
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
          title: `What type of charges were wrongly fixed by Visa and Mastercard?`,
          dscr: `The settlement resolved claims that Visa and MasterCard overcharged retailers on interchange fees, or swipe fees, when shoppers used credit or debit cards, and barred retailers from directing customers toward cheaper means of payment.`,
        },
        {
          title: `What types of businesses are eligible?`,
          dscr: `Any retailer that accepted Visa and/or Mastercard payments from January 2004 - January 2019.`,
        },
        {
          title: `What types of retail industries are eligible?`,
          dscr: `From gas station operators to clothing companies,any type of retail operation is eligible to make claims on this class action settlement.`,
        },
        {
          title: `How long will it take for payout to arrive?`,
          dscr: `Within two weeks of reviewing your data, Settlement Claims Practice will know your exact settlement amount. And within one month of making a claim, we'll send you a check.`,
        },
      ],
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
  margin-bottom: 30px;
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
