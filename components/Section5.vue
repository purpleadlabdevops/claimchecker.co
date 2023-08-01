<template>
  <section class="section5">
    <div class="container">
      <div class="section5__rows">
        <div class="section5__row">
          <div class="section5__icon">
            <figure>
              <img src="@/assets/img/s5_1.png" alt="" />
            </figure>
          </div>
          <div class="section5__dscr">
            <h4 class="section5__dscr-title">
              Conservative and Honest Numbers for “Sleep Well at Night” ERC
              Audit Protection
            </h4>
            <p class="section5__dscr-text">
              Our team works with you during the entire ERC filing process. We
              make sure all numbers are accurate and fit within ERC regulations.
            </p>
          </div>
        </div>
        <div class="section5__row">
          <div class="section5__icon">
            <figure>
              <img src="@/assets/img/s5_2.png" alt="" />
            </figure>
          </div>
          <div class="section5__dscr">
            <h4 class="section5__dscr-title">
              Our Licensed Professionals Do All The Hard Work
            </h4>
            <p class="section5__dscr-text">
              We have a dream team of ERC experts who take care of paperwork so
              you can focus on running your business.
            </p>
          </div>
        </div>
        <div class="section5__row">
          <div class="section5__icon">
            <figure>
              <img src="@/assets/img/s5_3.png" alt="" />
            </figure>
          </div>
          <div class="section5__dscr">
            <h4 class="section5__dscr-title">
              No Collateral, Personal Guarantee or Credit Check
            </h4>
            <p class="section5__dscr-text">
              Because this is a tax credit from the IRS and not a loan, there
              is no collateral, personal guarantees or credit check required to
              receive the tax credit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section5',
}
</script>

<style lang="scss" scoped>
.section5 {
  padding: 0 0 40px;
}
.section5__video {
  max-width: 800px;
  margin: 0 auto;
  .video-border {
    margin-top: -40%;
  }
}
.section5__rows {
  max-width: 1100px;
  width: 100%;
  margin: 50px auto 0;
}
.section5__row {
  display: flex;
  &:not(:first-child) {
    margin-top: 30px;
  }
  @include xs {
    display: block;
    &:not(:first-child) {
      margin-top: 60px;
    }
  }
}
.section5__icon {
  width: 20%;
  text-align: center;
  @include xs {
    width: 100%;
  }
  figure {
    display: inline-block;
    margin: 0;
    position: relative;
    max-width: 126px;

    &:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      border-radius: 50%;
      background: var(--text-white);
    }
  }
  img {
    width: 100%;
    height: auto;
  }
}
.section5__dscr {
  width: 80%;
  padding-left: 30px;
  @include xs {
    width: 100%;
    padding-left: 0;
    margin-top: 30px;
  }
}
.section5__dscr-title {
  font-size: 30px;
  color: var(--fm-mint);
  font-weight: 600;
  margin: 0;
  line-height: 1.2;
}
.section5__dscr-text {
  font-size: 18px;
  font-weight: 400;
}
</style>
