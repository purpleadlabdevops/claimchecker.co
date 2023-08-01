<template>
  <section class="reviews">
    <div class="container">
      <div class="reviews-row">
        <div class="reviews-video" @click="videoOpen('terry')">
          <img src="@/assets/img/logos/img-13.png">
          <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36.5" cy="36.5" r="36.5" fill="#40696E" fill-opacity="0.6"/><path d="M53.075 34.8113C54.375 35.5618 54.375 37.4382 53.075 38.1888L29.675 51.6987C28.375 52.4493 26.75 51.5111 26.75 50.01L26.75 22.99C26.75 21.4889 28.375 20.5507 29.675 21.3013L53.075 34.8113Z" fill="white"/></svg>
        </div>
        <div class="reviews-wrap">
          <div class="reviews-item">
            <p>"I was skeptical but I liked that they never asked for any upfront fee. They worked diligently and fast. I felt like I had a true partner the entire time. Words can't describe how grateful I was when I received a $182,900 ERC check less than 3 months later. Thank you to everyone at Financial Match!" </p>
            <svg width="106" height="19" viewBox="0 0 106 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.30603 0L11.3954 6.43031H18.1566L12.6866 10.4045L14.776 16.8348L9.30603 12.8606L3.83608 16.8348L5.92542 10.4045L0.45547 6.43031H7.2167L9.30603 0Z" fill="#E6883A"/><path d="M30.9181 0L33.0074 6.43031H39.7687L34.2987 10.4045L36.388 16.8348L30.9181 12.8606L25.4481 16.8348L27.5375 10.4045L22.0675 6.43031H28.8288L30.9181 0Z" fill="#E6883A"/><path d="M52.5302 0L54.6195 6.43031H61.3807L55.9108 10.4045L58.0001 16.8348L52.5302 12.8606L47.0602 16.8348L49.1495 10.4045L43.6796 6.43031H50.4408L52.5302 0Z" fill="#E6883A"/><path d="M74.1422 0L76.2316 6.43031H82.9928L77.5228 10.4045L79.6122 16.8348L74.1422 12.8606L68.6723 16.8348L70.7616 10.4045L65.2917 6.43031H72.0529L74.1422 0Z" fill="#E6883A"/><path d="M95.7543 0L97.8436 6.43031H104.605L99.1349 10.4045L101.224 16.8348L95.7543 12.8606L90.2843 16.8348L92.3737 10.4045L86.9037 6.43031H93.6649L95.7543 0Z" fill="#E6883A"/></svg>
            <h4>Terry O'Grady, Backyard Games LLC</h4>
          </div>
        </div>
      </div>
      <div class="reviews-row">
        <div class="reviews-video" @click="videoOpen('robert')">
          <img src="@/assets/img/logos/img-14.png">
          <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36.5" cy="36.5" r="36.5" fill="#40696E" fill-opacity="0.6"/><path d="M53.075 34.8113C54.375 35.5618 54.375 37.4382 53.075 38.1888L29.675 51.6987C28.375 52.4493 26.75 51.5111 26.75 50.01L26.75 22.99C26.75 21.4889 28.375 20.5507 29.675 21.3013L53.075 34.8113Z" fill="white"/></svg>
        </div>
        <div class="reviews-wrap">
          <div class="reviews-item">
            <p>ERC seemed too complicated. I didn't think I'd qualify since I took PPP. But Financial Match really came through for us. They got us over $200,000 in less than 60 days. I used the money to upgrade our facility and now I think we will make it through these next few turbulent years.</p>
            <svg width="106" height="19" viewBox="0 0 106 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.30603 0L11.3954 6.43031H18.1566L12.6866 10.4045L14.776 16.8348L9.30603 12.8606L3.83608 16.8348L5.92542 10.4045L0.45547 6.43031H7.2167L9.30603 0Z" fill="#E6883A"/><path d="M30.9181 0L33.0074 6.43031H39.7687L34.2987 10.4045L36.388 16.8348L30.9181 12.8606L25.4481 16.8348L27.5375 10.4045L22.0675 6.43031H28.8288L30.9181 0Z" fill="#E6883A"/><path d="M52.5302 0L54.6195 6.43031H61.3807L55.9108 10.4045L58.0001 16.8348L52.5302 12.8606L47.0602 16.8348L49.1495 10.4045L43.6796 6.43031H50.4408L52.5302 0Z" fill="#E6883A"/><path d="M74.1422 0L76.2316 6.43031H82.9928L77.5228 10.4045L79.6122 16.8348L74.1422 12.8606L68.6723 16.8348L70.7616 10.4045L65.2917 6.43031H72.0529L74.1422 0Z" fill="#E6883A"/><path d="M95.7543 0L97.8436 6.43031H104.605L99.1349 10.4045L101.224 16.8348L95.7543 12.8606L90.2843 16.8348L92.3737 10.4045L86.9037 6.43031H93.6649L95.7543 0Z" fill="#E6883A"/></svg>
            <h4>Robert S., CarStar Collisions LLC</h4>
          </div>
        </div>
      </div>
    </div>
    <Video v-if="video" :name="videoName"/>
  </section>
</template>
<script>
export default {
  data(){
    return {
      video: false,
      videoName: false
    }
  },
  methods: {
    videoOpen(name){
      this.video = true
      this.videoName = name
    }
  }
}
</script>
<style lang="scss" scoped>
.reviews{
  background: rgb(243, 255, 255);
  padding-top: 30px;
  @media(min-width:768px){
    padding-top: 60px;
  }
  @media(min-width:1200px){
    padding-top: 90px;
  }
  &-row{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    &:not(:first-child){
      margin-top: 30px;
    }
  }
  &-video{
    position: relative;
    width: 100%;
    @media(min-width:768px){
      width: 50%;
    }
    @media(min-width:1200px){
      width: 600px;
    }
    img{
      display: block;
      width: 100%;
    }
    svg{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      cursor: pointer;
      transition: .25s ease;
      &:hover{
        transform: translate(-50%, -50%) scale(1.2);
      }
    }
  }
  &-item{
    p{
      margin: 0 0 15px;
    }
    svg{
      display: block;
      margin-bottom: 5px;
    }
    h4{
      margin: 0;
    }
    &:not(:first-child){
      margin-top: 30px;
    }
  }
  &-wrap{
    width: 100%;
    margin-top: 30px;
    @media(min-width:768px){
      width: 50%;
      padding-left: 30px;
      margin-top: 0;
    }
    @media(min-width:1200px){
      width: calc(100% - 600px);
    }
  }
}
</style>