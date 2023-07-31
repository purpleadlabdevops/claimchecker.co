<template>
  <section class="quiz">
    <div class="container">
      <div class="quiz__info">
        <h1>Thank you!</h1>
        <h3>We will contact you shortly ;)</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.quiz{
  padding-bottom: 100px;
  h1{
    margin: 0 auto;
    font-weight: 600;
    font-size: res(24, 32);
    line-height: 130%;
    text-align: center;
    color: var(--text-black);
    margin-bottom: 16px;
  }
  h3{
    font-size: res(16, 18);
    line-height: 130%;
    color: var(--text-black);
    text-align: center;
  }
}
</style>
