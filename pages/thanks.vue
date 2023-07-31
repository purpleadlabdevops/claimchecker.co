<template>
  <section class="thanks">
    <div class="container">
      <h1>Thank you!</h1>
      <h3>We will contact you shortly ;)</h3>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.thanks{
  padding-bottom: 100px;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1{
    margin: 0 auto;
    font-weight: 600;
    font-size: res(32, 42);
    line-height: 1.3;
    text-align: center;
    color: var(--text-black);
    margin-bottom: 16px;
  }
  h3{
    font-size: res(22, 32);
    line-height: 1.3;
    color: var(--text-black);
    text-align: center;
  }
}
</style>
