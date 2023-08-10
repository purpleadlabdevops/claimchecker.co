<template>
  <section class="partners">
    <div class="container">
      <div class="partners__list" v-if="list">
        <div class="partners__item" v-for="item in list.slice().reverse()">
          <h3>{{ item.fullName }} ({{ item.ID }})</h3>
          <div class="partners__row">
            <div>
              <p>company: <b>{{ item.company }}</b></p>
              <p>email: <b>{{ item.email }}</b></p>
              <p>phone: <b>{{ item.phone }}</b></p>
            </div>
            <div>
              <p>address: <b>{{ item.address }}</b></p>
              <p>ein: <b>{{ item.ein }}</b></p>
            </div>
          </div>
          <div>
            <p v-if="item.card">card: <b>{{ item.card }}</b></p>
            <p v-if="item.type">type: <b>{{ item.type }}</b></p>
            <p v-if="item.revenue">revenue: <b>{{ item.revenue }}</b></p>
          </div>
          <div v-if="item.questions">
            <p v-for="question in Object.values(JSON.parse(item.questions))">
              <span v-html="question.q"></span>: <br><b v-html="question.a"></b>
            </p>
          </div>
          <!-- <p><a :href="`https://claimchecker.co/saved/f8821_${item.ID}.pdf`" target="_blank">Open PDF</a></p>
          <p><a :href="`https://claimchecker.co/saved/if_engage_ltr_${item.ID}.docx`" target="_blank">Open DOCX</a></p> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      list: null,
    }
  },
  mounted(){
    this.$axios.get(`${process.env.API}/db`, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(dbResult => {
        console.dir(dbResult.data)
        this.list = dbResult.data
      })
  }
}
</script>

<style lang="scss" scoped>
.partners{
  padding-top: 60px;
  padding-bottom: 60px;
  &__item{
    max-width: 800px;
    background: var(--bg-white);
    box-shadow: 0 0 16px var(--bg-gray);
    border-radius: 12px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    padding: 20px 15px;
    margin-bottom: 30px;
  }
  h3{
    font-weight: 600;
    font-size: 18px;
    line-height: 1.3;
    color: var(--text-black);
    margin-bottom: 10px;
  }
  p{
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    color: var(--text-black);
    margin-bottom: 5px;
  }
  &__row{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
    }
    & > div{
      @media(min-width:768px){
        width: calc(50% - 10px);
      }
    }
  }
}
</style>
