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
            <h4 class="section5__dscr-title">Conservative and Honest Numbers for Easy Settlement Processing And Approval</h4>
            <p class="section5__dscr-text">Instead of waiting years for the claims administrator to begin processing claims, you’ll get an accurate payment total, for quick and easy approval!</p>
          </div>
        </div>
        <div class="section5__row">
          <div class="section5__icon">
            <figure>
              <img src="@/assets/img/s5_2.png" alt="" />
            </figure>
          </div>
          <div class="section5__dscr">
            <h4 class="section5__dscr-title">Our Licensed Professionals Do All The Hard Work</h4>
            <p class="section5__dscr-text">We have a dream team of class action settlement experts who take care of the paperwork so you can focus on running your business.</p>
          </div>
        </div>
        <div class="section5__row">
          <div class="section5__icon">
            <figure>
              <img src="@/assets/img/s5_3.png" alt="" />
            </figure>
          </div>
          <div class="section5__dscr">
            <h4 class="section5__dscr-title">No Up-Front Fees</h4>
            <p class="section5__dscr-text">Settlement Claims Practice reviews and analyzes your data to help pinpoint the amount for your specific payout. No need for excess information.No up-front fees.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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
