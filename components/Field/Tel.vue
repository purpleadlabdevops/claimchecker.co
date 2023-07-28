<template>
  <div class="field">
    <input
      id="phone"
      type="tel"
      v-model="$parent.data.phone"
      @input="input"
      @blur="blur"
      @change="reset"
      @keyup="reset"
      maxlength="14"
      required>
    <span :class="reportClass" v-if="report">{{ report }}</span>
  </div>
</template>
<script>
import intlTelInput from 'intl-tel-input';
export default {
  data(){
    return{
      report: null,
      reportClass: null,
      errorMap: ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"],
      iti: null
    }
  },
  methods: {
    reset(){
      this.report = null
      this.reportClass = null
    },
    blur(){
      this.reset()
      if(this.$parent.data.phone.trim()) {
        if(this.iti.isValidNumber()) {
          this.report = 'Valid!'
          this.reportClass = 'valid'
          this.$parent.notValid = false
          setTimeout(()=> this.reset(), 2000)
        } else {
          let errorCode = this.iti.getValidationError();
          this.report = this.errorMap[errorCode]
          this.reportClass = 'error'
          this.$parent.notValid = true
        }
      }
    },
    input(e) {
      let arr = this.$parent.data.phone.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '').split('');
      if (arr.length > 0) arr.splice(0, 0, '(');
      if (arr.length > 4) arr.splice(4, 0, ') ');
      if (arr.length > 8) arr.splice(8, 0, '-');
      this.$parent.data.phone = arr.toString().replace(/[,]/g, '');
    },
    inputOld(){
      const phoneNumber = this.$parent.data.phone.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '').split('')
      const mask = '(###) ###-####'.split('')
      phoneNumber.forEach(l => {
        if(mask.some((m,i) => m === '#')){
          const index = mask.findIndex((m,i) => m === '#')
          mask[index] = l
        }
      })

      let i = 0, newNumber = ''
      do {
        if(mask[i] !== '#'){
          newNumber += mask[i]
        } else {
          break;
        }
        i = i + 1;
      } while (i < mask.length)

      this.$parent.data.phone = newNumber
    }
  },
  mounted(){
    this.iti = intlTelInput(document.querySelector('#phone'), {
      utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.21/js/utils.min.js',
      allowDropdown: false,
      onlyCountries: ['US'],
    })
  }
}
</script>

<style lang="scss">
@import 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.21/css/intlTelInput.css';
.field{
  position: relative;
  .iti{
    width: 100%;
    &__flag-container{
      display: none !important;
    }
  }
  input{
    margin-left: auto !important;
    margin-right: auto !important;
  }
  span{
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    display: block;
    font-size: 12px;
    &.valid{
      color: green;
    }
    &.error{
      color: red;
    }
  }
}
</style>