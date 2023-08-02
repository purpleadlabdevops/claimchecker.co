<template>
  <section class="thanks">
    <div class="container">
      <h1 class="thanks__title">
        Congratulations! <br />
        Based on your answers, you could qualify for <span style="filter: blur(12px);">$26,000.00</span>
      </h1>
      <svg width="102" height="109" viewBox="0 0 102 109" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M40.5 22C40.5 20.6193 39.3807 19.5 38 19.5C36.6193 19.5 35.5 20.6193 35.5 22H40.5ZM34 65.5V68V65.5ZM20 51.5H22.5H20ZM22.5 49C22.5 47.6193 21.3807 46.5 20 46.5C18.6193 46.5 17.5 47.6193 17.5 49H22.5ZM68 65.5V68V65.5ZM82 51.5H79.5H82ZM84.5 49C84.5 47.6193 83.3807 46.5 82 46.5C80.6193 46.5 79.5 47.6193 79.5 49H84.5ZM66.5 22C66.5 20.6193 65.3807 19.5 64 19.5C62.6193 19.5 61.5 20.6193 61.5 22H66.5ZM20 84H22.5V81.5H20V84ZM20 102H17.5V108.036L21.7678 103.768L20 102ZM38 84V81.5H36.9645L36.2322 82.2322L38 84ZM35.5 22V40H40.5V22H35.5ZM22.5 51.5V49H17.5V51.5H22.5ZM34 63C27.6487 63 22.5 57.8513 22.5 51.5H17.5C17.5 60.6127 24.8873 68 34 68V63ZM84.5 51.5V49H79.5V51.5H84.5ZM68 68C77.1127 68 84.5 60.6127 84.5 51.5H79.5C79.5 57.8513 74.3513 63 68 63V68ZM61.5 22V40H66.5V22H61.5ZM5.5 18C5.5 11.0964 11.0964 5.5 18 5.5V0.5C8.33502 0.5 0.5 8.33502 0.5 18H5.5ZM5.5 69V18H0.5V69H5.5ZM18 81.5C11.0964 81.5 5.5 75.9036 5.5 69H0.5C0.5 78.665 8.33502 86.5 18 86.5V81.5ZM20 81.5H18V86.5H20V81.5ZM22.5 102V84H17.5V102H22.5ZM36.2322 82.2322L18.2322 100.232L21.7678 103.768L39.7678 85.7678L36.2322 82.2322ZM84 81.5H38V86.5H84V81.5ZM96.5 69C96.5 75.9036 90.9036 81.5 84 81.5V86.5C93.665 86.5 101.5 78.665 101.5 69H96.5ZM96.5 18V69H101.5V18H96.5ZM84 5.5C90.9036 5.5 96.5 11.0964 96.5 18H101.5C101.5 8.33502 93.665 0.5 84 0.5V5.5ZM18 5.5H84V0.5H18V5.5ZM68 63H34V68H68V63Z"fill="#C7D6ED" /> </svg>
      <h4 class="thanks__subtitle">
        <b>One of our ERC Partners will be reaching out in a bit to walk you through the next phase of the process!</b>
      </h4>
      <p>Join the thousands of American small business owners who are taking advantage of the last pandemic stimulus program. Answer the call/text from your Financial Match Business Partner Expert.</p>
      <p>We're sure you have questions about the ERC Program. The first thought usually is this seems too good to be true. So let's go over what happens and how you can claim your check.</p>
      <p>First - We assign you a Business Partner Expert from Financial Match. We want to talk with you over the phone so you know you're dealing with a real company who has helped many skeptical business owners like yourself.</p>
      <p>Your Business Partner will tell you more about the ERC Program. They will tell you exactly how much you can get, and how long until you receive your check.</p>
      <p>If you choose to use our filing service, we help you gather all the needed paperwork. It is sent to one of our experienced CPA's who make sure everything looks right before we send it to the IRS for official filing.</p>
      <p>We act as your liaison the entire way. We take absolutely zero fees until you get your money. It's a pretty nifty deal considering you do absolutely nothing for a potentially 6 or 7 figure check. This allows you to focus on running your business.</p>
      <p>You're probably thinking, why not just have my accountant file for me? Most accountants aren't ERC filing Specialists. They also aren't incentivized to get you the max ERC check amount.</p>
      <p>Think about it, your accountant gets paid the same amount whether they file for you or not. It's in your best interest to use an ERC Program specialist who won't work slow and can get you the max amount.</p>
      <p>We look forward to serving you. Call the number below to get started in finding out exactly how much you can get.</p>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'home',
}
</script>

<style lang="scss" scoped>
.thanks {
  text-align: center;
  line-height: 1.3;
  p {
    font-size: 18px;
  }
  h1 {
    font-size: res(30, 40);
    color: var(--fm-mint);
    margin-bottom: 30px;
  }
  h4 {
    font-size: 24px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  &__btn {
    background: green;
    color: #fff;
    text-decoration: none;
    padding: 15px 30px;
    font-weight: 700;
    border-radius: 8px;
    display: block;
    font-size: 20px;
    margin: 15px 0;
    svg{
      display: inline-block;
      vertical-align: middle;
      margin-right: 10px;
      path{
        fill: #fff;
      }
    }
  }
}
</style>
