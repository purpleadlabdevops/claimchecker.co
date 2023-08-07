<template>
  <section class="section2">
    <div class="container">
      <ul class="section2__list">

        <li class="section2__item">
          <figure class="section2__item-logo">
            <img src="@/assets/img/s2_1.png" alt="" />
          </figure>
          <div class="section2__item-dscr">
            <h4 class="section2__item-title">Average $5,000 Payout With NO MAXIMUM</h4>
            <p class="section2__item-text">Qualify for sales from January 2004 - January 2019. Get the funds you’re owed from Visa & Mastercard</p>
          </div>
        </li>

        <li class="section2__item">
          <figure class="section2__item-logo">
            <img src="@/assets/img/s2_2.png" alt="" />
          </figure>
          <div class="section2__item-dscr">
            <h4 class="section2__item-title">Retailers Qualify For Early Funds</h4>
            <p class="section2__item-text">For clients who want to monetize their claims now, retailers and other businesses may be able to sell the claims today for cash</p>
          </div>
        </li>

        <li class="section2__item">
          <figure class="section2__item-logo">
            <img src="@/assets/img/s2_3.png" alt="" />
          </figure>
          <div class="section2__item-dscr">
            <h4 class="section2__item-title">Keep Funds Even If Settlement Falls Through</h4>
            <p class="section2__item-text">Estimates are payments that won’t be sent for years (Maybe Never!) – In just a few weeks, get and keep your funds</p>
          </div>
        </li>

      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section2 {
  background: var(--text-white);
  padding: res(50, 100) 0;
}
.section2__list {
  display: flex;
  justify-content: space-between;
  margin: 0 -15px 0;
  padding: 0;
  list-style: none;
  @include sm {
    display: block;
  }
}
.section2__item {
  padding: 15px;
  width: calc(100% / 3);
  max-width: 460px;
  text-align: center;
  @include sm {
    width: 100%;
    margin: 0 auto;
  }
}
.section2__item-logo {
  margin: 0;
  display: block;
  position: relative;
  &:before {
    content: '';
    width: 120px;
    height: 120px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba(95, 198, 193, 0.15);
    border-radius: 50%;
  }

  img {
    display: block;
    max-width: 126px;
    margin: 0 auto;
  }
}
.section2__item-title {
  font-size: 24px;
  color: var(--fm-mint);
  margin: 0.3em 0 0;
  font-weight: 600;
  line-height: 1;
}
.section2__item-text {
  font-size: 18px;
  margin: 0.5em 0 0;
}
</style>
