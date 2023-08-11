<template>
  <div class="main-wrap">
    <Header />
    <Nuxt />
    <Sponsors />
    <Estimate />
    <Reviews />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    <Faq />
    <Footer />
  </div>
</template>

<script>
export default{
  name: 'home',
  head() {
    return {
      script: [
        {
          ssr: false,
          async: true,
          src: '/js/fb.js'
        },
        {
          ssr: false,
          defer: true,
          hid: 'everflow',
          src: 'https://www.f98mmtrk.com/scripts/sdk/everflow.js',
          callback: () => {
            EF.click({
              offer_id: 200,
              affiliate_id: EF.urlParameter('affid'),
              sub1: EF.urlParameter('sub1'),
              sub2: EF.urlParameter('sub2'),
              sub3: EF.urlParameter('sub3'),
              sub4: EF.urlParameter('sub4'),
              sub5: EF.urlParameter('sub5'),
              uid: EF.urlParameter('uid'),
              source_id: EF.urlParameter('source_id'),
              transaction_id: EF.urlParameter('_ef_transaction_id')
            })
              .then(res => {
                console.log('EF.click');
                console.dir(res)
              })
          }
        }
      ]
    }
  }
}
</script>