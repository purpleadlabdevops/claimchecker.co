<template>
  <section class="quiz">
    <div class="container">
      <div class="quiz__info">
        <h1>Lorem ipsum dolor sit amet <br> consectetur adipisicing elit. Aut, ipsam.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium in cumque?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, tempora provident, ipsa facilis dicta atque quaerat necessitatibus molestiae quos ipsum ab quod laboriosam voluptas placeat voluptate. Similique, nemo commodi laboriosam.</p>
      </div>
      <form class="quiz__form" @submit.prevent="submit">

        <div class="quiz__step quiz__step-1" :class="step === 1 ? 'active':''" :data-passed="step > 1 ? true:false">
          <h3>Step 1: <b>Did you accept Visa / MC?</b></h3>
          <div class="field__flex">
            <div class="field">
              <input
                type="radio"
                v-model="card"
                id="card__YES"
                value="YES" />
              <label for="card__YES">YES</label>
            </div>
            <div class="field">
              <input
                type="radio"
                v-model="card"
                id="card__NO"
                value="NO" />
              <label for="card__NO">NO</label>
            </div>
          </div>
          <div class="field"><button class="btn" @click="toStep2" type="button" :disabled="!card">Next step</button></div>
        </div>

        <div class="quiz__step quiz__step-2" :class="step === 2 ? 'active':''" :data-passed="step > 2 ? true:false">
          <h3>Step 2: <b>What type of business do you have?</b></h3>
          <div class="field">
            <input
              type="text"
              v-model="type"
              id="type"
              required />
          </div>
          <div class="field"><button class="btn" @click="toStep3" type="button" :disabled="!type">Next step</button></div>
        </div>

        <div class="quiz__step quiz__step-3" :class="step === 3 ? 'active':''" :data-passed="step > 3 ? true:false">
          <h3>Step 3: Personal info</h3>
          <div class="field">
            <input
              type="text"
              v-model="fullName"
              id="fullName"
              placeholder="Your Name"
              required />
          </div>
          <div class="field">
            <input
              type="tel"
              placeholder="Phone"
              v-model="phone"
              @input="phoneInput"
              minlength="14"
              maxlength="14"
              id="phone"
              required>
          </div>
          <div class="field">
            <input
              type="email"
              v-model="email"
              id="email"
              placeholder="Your Email"
              required />
          </div>
          <div class="field"><button class="btn" @click="toStep4" type="button" :disabled="!fullName && !phone && !email">Next step</button></div>
        </div>

        <div class="quiz__step quiz__step-4" :class="step === 4 ? 'active':''" :data-passed="step > 4 ? true:false">
          <h3>Step 4: <b>Special Info</b></h3>
          <div class="field">
            <input
              type="text"
              v-model="company"
              id="company"
              placeholder="Company Name"
              required />
          </div>
          <div class="field">
            <input
              type="text"
              v-model="address"
              id="address"
              placeholder="Mailing address"
              required />
          </div>
          <div class="field">
            <input
              type="text"
              v-model="ein"
              id="ein"
              placeholder="EIN"
              required />
          </div>
          <div class="field">
            <input
              type="submit"
              value="Submit"
              :disabled="spinner" />
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      card: null,
      type: null,
      fullName: null,
      phone: null,
      email: null,
      company: null,
      address: null,
      ein: null,
      spinner: false,
      step: 1,
    }
  },
  methods: {
    phoneInput(e) {
      let arr = this.phone.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '').split('');
      if (arr.length > 0) arr.splice(0, 0, '(');
      if (arr.length > 4) arr.splice(4, 0, ') ');
      if (arr.length > 8) arr.splice(8, 0, '-');
      this.phone = arr.toString().replace(/[,]/g, '');
    },
    validateEmail(email){
      return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    },
    toStep2(){
      this.step = 2
    },
    toStep3(){
      this.step = 3
    },
    toStep4(){
      if(this.validateEmail(this.email)){
        this.step = 4
      } else {
        alert('Please insert right email format.')
      }
    },
    submit(e){
      e.preventDefault()
      this.spinner = true
      this.$axios.post(`${process.env.API}/db`, {
        headers: { 'Content-Type': 'application/json' },
        params: {
          card: this.card,
          type: this.type,
          fullName: this.fullName,
          phone: this.phone,
          email: this.email,
          company: this.company,
          address: this.address,
          ein: this.ein,
        }
      })
        .then(result => {
          console.log('Result----------')
          console.dir(result)
          if(result.data.status == "error"){
            throw result.data.status
          } else{
            setTimeout(()=>{
              this.card = null
              this.type = null
              this.fullName = null
              this.phone = null
              this.email = null
              this.company = null
              this.address = null
              this.ein = null
              this.step = 1
              this.$router.push({path: '/thanks'})
            }, 500);
          }
        })
        .catch(err => {
          alert('Oops, something went wrong. Please reload page and try againe or contact us by email.')
        })
        .finally(()=>{
          this.spinner = false
        })
    },
  }
}
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
    margin: 0 auto 16px;
    max-width: 638px;
    @media(min-width:768px){
      font-size: 26px;
    }
    b{
      font-weight: 600;
    }
  }
  &__form{
    margin: 0 auto res(25, 40);
    padding-top: 8px;
    width: 650px;
    max-width: 100%;
  }
  &__info{
    max-width: 900px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: res(30, 60);
  }
  &__step{
    background: var(--bg-lightgray);
    padding: res(25, 30) res(16, 30);
    border-radius: 16px;
    overflow: hidden;
    max-height: res(65, 90);
    transition: 1s ease;
    &.active{
      background: var(--bg-white);
      box-shadow: 0 0 32px var(--text-black);
      max-height: 1000px;
    }
    &:not(:first-child){
      margin-top: 16px;
    }
    &[data-passed="true"]{
      background: var(--bg-green);
      color: var(--text-white);
      h3{
        color: var(--text-white);
      }
    }
  }
  input[type="radio"]{
    display: none;
    & + label{
      border: 2px solid var(--bg-green);
      padding: 10px;
      border-radius: 8px;
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 26px;
      font-weight: 600;
    }
    &:checked + label{
      background: var(--bg-green);
      color: var(--text-white);
    }
  }
}

.spinner {
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  svg {
    width: 50%;
    max-width: 10rem;
    animation: rotate 3.6s linear infinite;
  }
  circle {
    fill: none;
    stroke: #106b70;
    stroke-width: 8px;
    stroke-dasharray: 300;
    animation: outline 2s cubic-bezier(0.77, 0, 0.18, 1) infinite;
  }
}

@keyframes outline {
  0% {
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dashoffset: 300;
  }
  100% {
    stroke-dashoffset: 600;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(-1turn);
  }
}
</style>
