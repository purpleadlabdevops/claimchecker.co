<template>
  <section class="sponsors">
    <img v-for="(item, i) in 10" :src="require(`@/assets/img/logos/img-${i+1}.png`)" />
  </section>
</template>
<style lang="scss" scoped>
.sponsors {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 15px;
  img{
    @media(max-width:991px){
      margin-top: 10px;
      margin-bottom: 10px;
    }
    &:not(:first-child){
      margin-left: 15px;
    }
  }
}
</style>
