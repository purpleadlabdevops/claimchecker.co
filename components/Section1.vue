<template>
  <section class="section1">
    <div class="container">
      <div class="section1__inner">
        <div class="section1__num-item">
          <div class="section1__num">Claim Estimator</div>
          <div class="section1__num-title">Get claim value in just 15 days using simple data inputs</div>
        </div>
        <div class="section1__num-item">
          <div class="section1__num">2004-2019</div>
          <div class="section1__num-title">The eligible transaction period for retailers and other businesses who used Visa and/or Mastercard</div>
        </div>
        <div class="section1__num-item">
          <div class="section1__num">$5k</div>
          <div class="section1__num-title">Average Settlement Size per <br> Application With NO MAXIMUM</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section1 {
  background: var(--fm-mint);
  color: #fff;
  padding: 80px 0 100px;
  @include sm {
    width: auto;
    padding: 30px 0 100px;
  }
}
.section1__inner {
  display: flex;
  @include sm {
    display: block;
  }
}
.section1__num-item {
  width: calc(100% / 3);
  text-align: center;
  padding: 0 30px;
  @include sm {
    width: auto;
    padding: 10px 0;
  }
}
.section1__num {
  font-size: 50px;
  font-weight: 700;
  text-shadow: 6px 6px 0px #064a4e;
}
.section1__num-title {
  font-size: 20px;
}
</style>
