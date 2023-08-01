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
    &:not(:first-child){
      margin-left: 15px;
    }
  }
}
</style>
