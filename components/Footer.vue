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
    }
  }
  &__logo {
    max-width: 248px;
    text-align: center;
    margin-right: 30px;
    img {
      width: 100%;
      height: auto;
    }
  }
  a{
    color: #000;
  }
}
</style>
