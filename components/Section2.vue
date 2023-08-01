<template>
  <section class="section2">
    <div class="container">
      <ul class="section2__list">
        <li class="section2__item">
          <figure class="section2__item-logo">
            <img src="@/assets/img/s2_1.png" alt="" />
          </figure>
          <div class="section2__item-dscr">
            <h4 class="section2__item-title">
              Up to $26,000 per W2 Employee Kept on Payroll
            </h4>
            <p class="section2__item-text">
              Can qualify for multiple quarters in 2020 and 2021, up to $26,000
              per W2 employee. Average credit is $200,000+
            </p>
          </div>
        </li>
        <li class="section2__item">
          <figure class="section2__item-logo">
            <img src="@/assets/img/s2_2.png" alt="" />
          </figure>
          <div class="section2__item-dscr">
            <h4 class="section2__item-title">
              Can Qualify Even If You Got a PPP Loan
            </h4>
            <p class="section2__item-text">
              There are many ways to qualify, even if your CPA didn’t think you
              could qualify. We’re conservative, but qualify you for as much as
              possible
            </p>
          </div>
        </li>
        <li class="section2__item">
          <figure class="section2__item-logo">
            <img src="@/assets/img/s2_3.png" alt="" />
          </figure>
          <div class="section2__item-dscr">
            <h4 class="section2__item-title">
              Reasonable Fee Only After You Receive Credit
            </h4>
            <p class="section2__item-text">
              We only get paid after you do. Most businesses are getting sent
              checks by the IRS in 5-9 months
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section2',
}
</script>

<style lang="scss" scoped>
.section2 {
  padding: 100px 0;
  background: var(--text-white);
  @include sm {
    padding: 30px 0;
  }
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
