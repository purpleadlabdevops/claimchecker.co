<template>
  <section class="section1">
    <div class="container">
      <div class="section1__inner">
        <div class="section1__num-item">
          <div class="section1__num">CPA’s</div>
          <div class="section1__num-title">
            Each account is overseen by a licensed CPA who provides full ERC
            Audit protection
          </div>
        </div>
        <div class="section1__num-item">
          <div class="section1__num" v-if="this.$route.name === 'lamtiktok'">Get Cash for Each W2 Employee</div>
          <div class="section1__num" v-else>+$26,000</div>
          <div class="section1__num-title">
            Payout for each employee with NO cap on max credit received!
          </div>
        </div>
        <div class="section1__num-item">
          <div class="section1__num">$200k</div>
          <div class="section1__num-title">
            Average Credit Size per <br />
            ERC Application
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section1',
}
</script>

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
