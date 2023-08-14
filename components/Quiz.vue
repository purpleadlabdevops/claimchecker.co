<template>
  <div class="quiz">
    <div class="quiz__step notQualify" v-if="notQualify">
      <h4>You Do Not Qualify</h4>
      <h5>Unfortunately, based on your answers it appears we can not help you at this time.</h5>
    </div>
    <form class="quiz__form" @submit.prevent="submit" v-else>

      <div class="quiz__step quiz__step-1" :class="step === 1 ? 'active':''" :data-passed="step > 1 ? true:false" :style="spinner ? 'filter: blur(2px);':''">
        <h3 v-html="card.q"></h3>
        <div class="quiz__inner">
          <button type="button" @click="toStep2('YES')" class="quiz__btn">YES</button>
          <button type="button" @click="notQualify = true" class="quiz__btn">NO</button>
        </div>
      </div>

      <div class="quiz__step quiz__step-2" :class="step === 2 ? 'active':''" :data-passed="step > 2 ? true:false" :style="spinner ? 'filter: blur(2px);':''">
        <h3>Answer to some questions</h3>
        <div class="quiz__inner">
          <div class="field">
            <h6 v-html="type.q"></h6>
            <input
              type="text"
              v-model="type.a"
              id="type"
              placeholder="Your Industry"
              required />
          </div>
          <div class="field">
            <h6 v-html="revenue.q"></h6>
            <select v-model="revenue.a" required>
              <option>Under 10k$</option>
              <option>10k-50k$</option>
              <option>50k$-100k$</option>
              <option>100k$-500k$</option>
              <option>Over 500k$ a month</option>
            </select>
          </div>
          <div class="field">
            <h6 v-html="how_old.q"></h6>
            <input
              type="number"
              v-model="how_old.a"
              id="type"
              required />
          </div>
          <div class="field"><button class="btn btn-blue" @click="toStep3" type="button" :disabled="!(type.a && revenue.a && how_old.a)">Next step</button></div>
        </div>
      </div>

      <div class="quiz__step quiz__step-3" :class="step === 3 ? 'active':''" :data-passed="step > 3 ? true:false" :style="spinner ? 'filter: blur(2px);':''">
        <h3>Personal info</h3>
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

      <div class="quiz__step quiz__step-4" :class="step === 4 ? 'active':''" :data-passed="step > 4 ? true:false" :style="spinner ? 'filter: blur(2px);':''">
        <h3>Business info</h3>
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
              placeholder="Business Address"
              required />
          </div>
          <div class="field">
            <h6>EIN</h6>
            <input
              type="text"
              v-model="ein"
              id="ein"
              placeholder="XX-XXXXXXX"
              minlength="10"
              maxlength="10"
              @input="einMask"
              required />
            <div class="quiz__small">Your EIN is used to make sure you have a real operating business. We keep information 100% secure and NEVER share it</div>
          </div>
          <div class="field">
            <input
              type="submit"
              value="SUBMIT"
              :disabled="spinner" />
          </div>
        </div>
      </div>

      <div class="spinner" v-if="spinner">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" />
        </svg>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      card: {
        q: `Did You Accept Payments From VISA OR MasterCard Between 2004-2019?`,
        a: null
      },
      type: {
        q: `What industry do you work in?`,
        a: null
      },
      revenue: {
        q: `Approximately how much credit card revenue does your business process MONTHLY? (rough estimate)`,
        a: null
      },
      how_old: {
        q: `Approximately how old is your business (in years)?`,
        a: null
      },
      fullName: null,
      phone: null,
      email: null,
      company: null,
      address: null,
      ein: null,
      spinner: false,
      step: 1,
      ID: null,
      notQualify: false,
      linkDOCX: null,
      linkPDF: null,
    }
  },
  methods: {
    einMask(e){
      // XX-XXXXXXX
      let arr = this.ein.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '').split('');
      if (arr.length > 2) arr.splice(2, 0, '-');
      this.ein = arr.toString().replace(/[,]/g, '');
    },
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
    toStep2(value){
      this.card.a = value
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
      console.log('DB started');
      this.$axios.post(`${process.env.API}/db`, {
        headers: { 'Content-Type': 'application/json' },
        params: {
          fullName: this.fullName,
          phone: this.phone,
          email: this.email,
          company: this.company,
          address: this.address,
          ein: this.ein,
          questions: JSON.stringify({
            card: this.card,
            type: this.type,
            revenue: this.revenue,
            how_old: this.how_old,
          })
        }
      })
        .then(dbResult => {
          console.dir(dbResult);
          this.ID = dbResult.data.msg
          this.getDOCX()
        })
    },
    getDOCX(){
      let date = new Date()
      this.$axios.post(`${process.env.API}/file-docx`, {
        headers: { 'Content-Type': 'application/json' },
        params: {
          fullName: this.fullName,
          company: this.company,
          ID: this.ID,
          address: this.address,
        }
      })
        .then(docxResult => {
          console.log(docxResult);
          this.linkDOCX = docxResult.data.msg
          setTimeout(()=>{
            this.getPDF()
          }, 2000);
        })
    },
    getPDF(){
      let date = new Date()
      this.$axios.post(`${process.env.API}/file-pdf`, {
        headers: { 'Content-Type': 'application/json' },
        params: {
          company: this.company,
          address: this.address,
          ein: this.ein,
          fullName: this.fullName,
          phone: this.phone,
          ID: this.ID
        }
      })
        .then(pdfResult => {
          console.log(pdfResult);
          this.linkPDF = pdfResult.data.msg
          setTimeout(()=>{
            this.signNow()
          }, 2000);
        })
    },
    signNow(){
      this.$axios.post(`${process.env.API}/signnow`, {
        headers: { 'Content-Type': 'application/json' },
        params: {
          ID: this.ID,
        }
      })
        .then(result => {
          console.log('signNow result -------------------------');
          console.dir(result);
          setTimeout(()=>{
            this.signNowInvite(result.data.msg.access_token, result.data.msg.pdfID, result.data.msg.docxID)
          }, 3000);
        })
        .catch(err => {
          console.dir(err);
        })
        .finally(()=>{
          this.spinner = false
        })
    },
    signNowInvite(access_token, pdfID, docxID){
      console.log('signNowInvite ----------------------------------------');
      console.dir({
        ID: this.ID,
        email: this.email,
        phone: this.phone,
        fullName: this.fullName,
        access_token: access_token,
        pdfID: pdfID,
        docxID: docxID
      });
      this.$axios.post(`${process.env.API}/signnow-invite`, {
        headers: { 'Content-Type': 'application/json' },
        params: {
          ID: this.ID,
          email: this.email,
          phone: this.phone,
          fullName: this.fullName,
          access_token: access_token,
          pdfID: pdfID,
          docxID: docxID
        }
      })
        .then(result => {
          console.dir(result);
          this.$router.push({
            path: '/thanks',
            query: {
              revenue: this.revenue.a,
            }
          })
          this.fullName = null
          this.phone = null
          this.email = null
          this.company = null
          this.address = null
          this.ein = null
          this.card.a = null
          this.type.a = null
          this.revenue.a = null
          this.how_old.a = null
          this.step = 1
        })
        .catch(err => {
          console.dir(err);
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
    max-width: 600px;
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
    position: relative;
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
  h6{
    font-size: 14px;
    text-align: left;
    margin-bottom: 10px;
    font-weight: 500;
    @media(min-width:992px){
      font-size: 16px;
    }
  }
  &__inner{
    overflow: hidden;
    transition: .25s ease;
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
        transition: .5s ease .25s;
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
    &-1{
      .quiz__inner{
        @media(min-width:576px){
          display: flex;
          justify-content: space-between;
        }
        .quiz__btn{
          width: 100%;
          @media(max-width:575px){
            &:not(:first-child){
              margin-top: 15px;
            }
          }
          @media(min-width:576px){
            width: calc(50% - 10px);
          }
        }
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
  &__btn{
    border: none;
    font-weight: 500;
    font-size: res(18, 24);
    color: var(--text-black);
    background: #fff;
    box-shadow: 0 4px 10px rgba(1,1,1,.3), inset 0 -4px 0 #f8f8f8;
    border-radius: 15px;
    display: block;
    width: 340px;
    max-width: 100%;
    transition: .5s ease-in-out;
    padding: res(15, 30) 0;
  }
  h4{
    font-size: res(20, 30);
    padding: res(15, 30) 15px res(15, 30);
    text-align: center;
  }
  h5{
    font-size: res(16, 20);
    padding: 0 15px res(15, 30);
    text-align: center;
    font-weight: 400;
  }
  &__small{
    font-size: 10px;
    margin-top: 5px;
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
