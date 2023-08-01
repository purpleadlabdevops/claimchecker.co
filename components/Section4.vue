<template>
  <section class="section4">
    <div class="container">
      <h2 class="section4__title">
        Introducing the 100% Done-For-You ERC Service from Financial Match
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section4',
}
</script>

<style lang="scss" scoped>
.section4 {
  //padding: 80px 0px 350px 0px;
  padding: 80px 0px 80px 0px;
  background: var(--fm-mint);
  //@include xl {
  //  padding-bottom: 35%;
  //}
  //@include sm {
  //  padding-top: 40px;
  //  padding-bottom: 40%;
  //}
}
.section4__title {
  color: #fff;
  font-size: 54px;
  font-weight: 700;
  text-align: center;
  line-height: 1;

  @include sm {
    font-size: 30px;
  }
}
</style>
