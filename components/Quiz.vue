<template>
  <div class="quiz">
    <form class="quiz__form" @submit.prevent="submit">
      <div class="quiz__step quiz__step-1" :class="step === 1 ? 'active':''" :data-passed="step > 1 ? true:false">
        <h3>Step 1: <b>Did you accept Visa / MC?</b></h3>
        <div class="quiz__inner">
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
          <div class="field"><button class="btn btn-blue" @click="toStep2" type="button" :disabled="!card">Next step</button></div>
        </div>
      </div>

      <div class="quiz__step quiz__step-2" :class="step === 2 ? 'active':''" :data-passed="step > 2 ? true:false">
        <h3>Step 2: <b>What type of business do you have?</b></h3>
        <div class="quiz__inner">
          <div class="field">
            <input
              type="text"
              v-model="type"
              id="type"
              placeholder="Partnership, LLC, Corporation, ..."
              required />
          </div>
          <div class="field"><button class="btn btn-blue" @click="toStep3" type="button" :disabled="!type">Next step</button></div>
        </div>
      </div>

      <div class="quiz__step quiz__step-3" :class="step === 3 ? 'active':''" :data-passed="step > 3 ? true:false">
        <h3>Step 3: Personal info</h3>
        <div class="quiz__inner">
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
          <div class="field"><button class="btn btn-blue" @click="toStep4" type="button" :disabled="!fullName && !phone && !email">Next step</button></div>
        </div>
      </div>

      <div class="quiz__step quiz__step-4" :class="step === 4 ? 'active':''" :data-passed="step > 4 ? true:false">
        <h3>Step 4: <b>Special Info</b></h3>
        <div class="quiz__inner">
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
              value="SUBMIT"
              :disabled="spinner" />
          </div>
        </div>
      </div>
    </form>
  </div>
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
      console.log('start submit');
      this.spinner = true
      const params = {
        card: this.card,
        type: this.type,
        fullName: this.fullName,
        phone: this.phone,
        email: this.email,
        company: this.company,
        address: this.address,
        ein: this.ein
      }
      console.log('DB started');
      this.$axios.post(`${process.env.API}/db`, {
        headers: { 'Content-Type': 'application/json' },
        params: params
      })
        .then(dbResult => {
          console.dir(dbResult);
          console.log('DB finished');
          params.ID = dbResult.data.msg
          console.dir(params.ID);
          console.log('DOCX started');
          return this.$axios.post(`${process.env.API}/file-docx`, {
            headers: { 'Content-Type': 'application/json' },
            params: params
          })
        })
        .then(docxResult => {
          console.log(docxResult);
          console.log('DOCX end');
          console.log('PDF started');
          return this.$axios.post(`${process.env.API}/file-pdf`, {
            headers: { 'Content-Type': 'application/json' },
            params: params
          })
        })
        .then(pdfResult => {
          console.log(pdfResult);
          console.log('PDF END');
          console.log('EMAIL started');
          return this.$axios.post(`${process.env.API}/email`, {
            headers: { 'Content-Type': 'application/json' },
            params: params
          })
        })
        .then(email => {
          console.dir(email);
          console.log('EMAIL end');
          this.card = null
          this.type = null
          this.fullName = null
          this.phone = null
          this.email = null
          this.company = null
          this.address = null
          this.ein = null
          this.step = 1
          this.$router.push('/thanks')
        })
        .catch(err => {
          console.dir(err)
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
  width: 100%;
  @media(max-width:991px){
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    order: 2;
  }
  @media(min-width:992px){
    width: 45%;
  }
  &__form{
    margin: 0 auto res(25, 40);
    padding-top: 8px;
    width: 100%;
  }
  h3{
    background: rgba(255, 255, 255, .3);
    font-size: 16px;
    padding: 15px;
    @media(min-width:992px){
      font-size: 20px;
      padding: 15px 30px;
    }
  }
  &__inner{
    overflow: hidden;
    transition: .5s ease-in-out;
    // opacity: .6;
    max-height: 0px;
    padding: 0 15px;
    @media(min-width:992px){
      padding: 0 30px;
    }
  }
  &__step{
    background: #dbeae9;
    border-radius: 16px;
    overflow: hidden;
    &.active{
      .quiz__inner{
        transition: 1s ease-in-out .5s;
        max-height: 1000px;
        opacity: 1;
        padding-top: 15px;
        padding-bottom: 15px;
        @media(min-width:992px){
          padding-top: 30px;
          padding-bottom: 30px;
        }
      }
    }
    &:not(:first-child){
      margin-top: 16px;
    }
    &[data-passed="true"]{
      h3{
        background: var(--fm-mint);
        color: var(--text-white);
      }
    }
  }
  input[type="radio"]{
    display: none;
    & + label{
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      position: relative;
      padding-left: 30px;
      &:before, &:after{
        content: "";
        border-radius: 50%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &:before{
        width: 20px;
        height: 20px;
        background: #fff;
        border: 2px solid var(--bg-green);
        left: 0;
      }
      &:after{
        width: 16px;
        height: 16px;
        background: var(--bg-green);
        left: 4px;
        opacity: 0;
        transition: .2s ease;
      }
    }
    &:checked + label{
      &:after{
        opacity: 1;
      }
    }
    &:hover{
      opacity: .7;
    }
  }
  .field:not(:first-child) {
    margin-top: 30px;
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
