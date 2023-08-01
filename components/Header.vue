<template>
  <header class="main-header">
    <div class="container">
      <nuxt-link to="/" class="main-header__logo">
        <img src="@/assets/img/logo-white.png" alt="logo" />
      </nuxt-link>
      <a v-if="phone" @click="setCall" class="main-header__phone" :href="`tel:${phone}`"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2bb4da44=""><path d="M16.985 24.5C16.5115 24.5 16.1484 24.4684 15.8958 24.4051C13.6544 24.0254 11.1288 22.4274 8.31905 19.6111L5.05156 16.431C2.08399 13.5514 0.426562 11.0516 0.0792921 8.9315C-0.299548 6.40004 0.679121 3.94768 3.0153 1.57443C3.52042 1.00485 3.9624 0.6726 4.34124 0.57767C5.00421 0.38781 5.58825 0.546027 6.09337 1.05232L6.18808 1.14725L9.2188 5.03937C9.56607 5.67224 9.69235 6.226 9.59764 6.70065C9.31351 7.11201 9.01359 7.44426 8.69789 7.69741C7.71922 8.58342 7.27724 9.61183 7.37195 10.7826C7.46666 11.8269 7.956 12.6971 8.83996 13.3932L11.1604 15.7665C12.0443 16.6525 12.9441 17.0955 13.8596 17.0955C14.9961 17.1904 15.9906 16.6999 16.8429 15.6241C17.2218 15.2127 17.5533 14.9279 17.8374 14.7697C18.2794 14.5798 18.8003 14.6748 19.4001 15.0545L23.3779 18.0922C23.9146 18.6302 24.104 19.2156 23.9462 19.8484C23.8515 20.2598 23.5358 20.7344 22.9991 21.2724C21.1365 23.4241 19.1318 24.5 16.985 24.5Z" fill="#184895" data-v-2bb4da44=""></path></svg>{{ phone |number }}</a>
    </div>
  </header>
</template>

<script>
export default {
  filters: {
    number(tel){
      const newTel = tel.match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/)
      return `(${newTel[2]}) ${newTel[3]}-${newTel[4]}`
    }
  },
  computed: {
    phone() {
      return this.$store.state.phone
    }
  },
  methods: {
    setCall() {
      if( this.$nuxt.$data.layoutName !== 'aff' ){
        EF.conversion({
          offer_id: 1,
          event_id: 10
        })
          .then(res => {
            console.dir(res)
            if(this.$route.name === 'call'){
              return EF.conversion({
                offer_id: 1
              })
            }
          })
          .then(res => {
            console.dir(res)
          })
      }
    }
  }
}
</script>

<style lang="scss">
.main-header {
  padding: res(10, 20) 0;
  .container{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media(min-width:768px){
      align-items: center;
    }
  }
  &__logo {
    width: res(140, 250);
    display: block;
    img {
      height: auto;
      width: 100%;
    }
  }
  &__phone{
    display: block;
    font-size: 12px;
    color: #000;
    text-decoration: none;
    border: 1px solid #106b70;
    padding: 5px 8px;
    border-radius: 16px;
    display: block;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 1s ease-in-out;
    white-space: nowrap;
    @media(min-width:768px){
      font-weight: 700;
      font-size: 18px;
      padding: 10px 20px;
      border-width: 2px;
    }
    svg{
      margin-right: res(5, 10);
      height: res(18, 24);
      width: auto;
      path{
        fill: #106b70;
      }
    }
    &:hover{
      box-shadow: 0 0 120px #106b70;
    }
  }
}
</style>
