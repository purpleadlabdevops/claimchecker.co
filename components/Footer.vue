<template>
  <footer class="footer">
    <div class="container">
      <h2>How to contact us?</h2>
      <div class="footer--row">
        <div class="footer--left">
          <div class="footer--item">
            <h4>call us</h4>
            <a href="tel:18556795587">(855) 679-5587</a>
          </div>
          <div class="footer--item">
            <h4>write to us</h4>
            <a href="mailto:support@financialmatch.com">support@financialmatch.com</a>
          </div>
        </div>
      </div>
      <div class="footer--row">
        <span>© Financial Match <br>2023 All rights reserved.</span>
        <div class="footer--menu">
          <nuxt-link to="/terms">Terms and Conditions</nuxt-link>
          <nuxt-link to="/privacy">Privacy policy</nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer{
  background: var(--bg-green);
  padding: 40px 0;
  @media(min-width:768px){
    padding: 80px 0;
  }
  h2{
    border-bottom: 1px solid #D4D4D4;
    padding-bottom: 32px;
    margin-bottom: 32px;
    font-size: 32px;
    line-height: 130%;
    color: var(--text-white);
    @media(min-width:768px){
      font-size: 56px;
    }
  }
  &--menu{
    @media(max-width:767px){
      order: 2;
    }
    a {
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      text-decoration-line: underline;
      color: var(--text-white);
      @media(max-width:767px){
        display: block;
        font-size: 12px;
      }
      &:hover{
        text-decoration: none;
      }
      &:not(:first-child){
        @media(max-width:767px){
          margin-top: 16px;
        }
        @media(min-width:768px){
          margin-left: 32px;
        }
      }
    }
  }
  &--row{
    display: flex;
    justify-content: space-between;
    @media(max-width:767px){
      flex-direction: column;
    }
    &:last-child{
      margin-top: 40px;
      @media(min-width:768px){
        margin-top: 80px;
      }
    }
    span{
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: var(--text-white);
      @media(max-width:767px){
        margin-bottom: 16px;
        font-size: 12px;
        order: 2;
      }
      @media(min-width:768px){
        br{display: none;}
      }
    }
  }
  &--left, &--right{
    @media(min-width:768px){
      display: flex;
    }
  }
  &--right{
    @media(max-width:767px){
      display: flex;
      position: absolute;
      bottom: 59px;
      right: 16px;
      .footer--item:not(:first-child){
        margin-top: 0px;
        margin-left: 16px;
      }
    }
    @media(min-width:768px){
      margin-left: auto;
    }
  }
  &--item{
    &:not(:first-child){
      @media(max-width:767px){
        margin-top: 32px;
      }
      @media(min-width:768px){
        margin-left: 32px;
      }
    }
  }
  h4{
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: var(--text-white);
    margin-bottom: 4px;
    @media(min-width:768px){
      font-size: 16px;
      margin-bottom: 8px;
    }
    & + a{
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;
      color: var(--text-white);
      display: block;
      text-decoration: none;
      @media(min-width:768px){
        font-size: 32px;
      }
      &:hover{
        text-decoration: underline;
      }
    }
  }
  svg{
    display: block;
    margin: 0 auto;
  }
}
</style>
