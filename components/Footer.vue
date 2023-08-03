<template>
  <footer class="main-footer">
    <div class="container">
      <div class="main-footer__inner">
        <div class="main-footer__logo">
          <img src="@/assets/img/logo-white.png" alt="logo" />
          <span>Employee Retention Tax Credit</span>
        </div>
        <div class="main-footer__menu">
          <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
          <nuxt-link to="/terms">Terms and Conditions</nuxt-link>
        </div>
        <div>All rights reserved</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.main-footer {
  padding: 20px 0;
  text-align: center;
  @media(min-width:768px){
    text-align: left;
  }
  &__inner {
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &__menu{
    a{
      display: block;
      margin-bottom: 10px;
      @media(min-width:768px){
        margin-bottom: 0;
      }
    }
  }
  &__logo {
    text-align: center;
    margin-bottom: 15px;
    @media(min-width:768px){
      margin-right: 30px;
      margin-bottom: 0;
    }
    img {
      width: res(150, 250);
      height: auto;
      margin-bottom: 10px;
      @media(min-width:768px){
        margin-bottom: 0;
      }
    }
    span{
      display: block;
    }
  }
  a{
    color: #000;
  }
}
</style>
