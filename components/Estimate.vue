<template>
  <section class="estimate">
    <div class="container">
      <div class="estimate__item" v-for="item in items">
        <h3>{{ item.title }}</h3>
        <p v-html="item.text"></p>
      </div>
    </div>
  </section>
</template>

<script>
export default{
  data: () => ({
    items: [
      {
        title: 'Claim Estimator',
        text: 'Get claim value in just 15 days using simple data inputs'
      },
      {
        title: '2004-2019',
        text: 'The eligible transaction period for retailers and other businesses who used Visa and/or Mastercard'
      },
      {
        title: '$5k',
        text: 'Average Settlement Size per <br> Application With NO MAXIMUM'
      },
    ]
  }),
}
</script>

<style lang="scss" scoped>
.estimate {
  background: var(--fm-mint);
  color: var(--text-white);
  padding: res(50, 100) 0;
  .container {
    display: block;
    @media(min-width:768px){
      display: flex;
    }
  }
  &__item {
    width: 100%;
    text-align: center;
    padding: 0 res(10, 30);
    @media(min-width:768px){
      width: calc(100% / 3);
    }
    @media(max-width:767px){
      &:not(:first-child){
        margin-top: 30px;
      }
    }
  }
  h3 {
    font-size: res(30, 50);
    margin-bottom: res(5, 15);
    font-weight: 700;
    text-shadow: 4px 4px 0px var(--text-black);
  }
  p {
    font-size: res(14, 18);
  }
}
</style>
