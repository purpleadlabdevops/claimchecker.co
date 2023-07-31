<template>
  <section class="quiz">
    <div class="container">
      <div class="quiz__info">
        <h1>Thank you!</h1>
        <p>We will contact you shortly ;)</p>
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
}
</style>
