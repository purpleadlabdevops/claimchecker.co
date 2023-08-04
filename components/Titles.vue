<template>
  <div class="titles">
    <h3>Most Business Owners Don’t Realize They Can Now</h3>
    <h1>“Get <span>$5,000+</span> From The Visa/Mastercard Class Action”</h1>
    <h2>$5.6 Billion Settlement With 12 Million Retailers</h2>
    <ul>
      <li>Courts are still hearing final arguments</li>
      <li>Money could be 3+ years away</li>
      <li>But you can <b>get settlement dollars in just 1 month</b> through new program</li>
      <li>Skip the line and get your cash now</li>
    </ul>
    <h4>Take this Quick Survey to Find Out If You Qualify, and How Much You Can Get</h4>
  </div>
</template>

<style lang="scss" scoped>
.titles{
  width: 100%;
  margin-bottom: 30px;
  @media(min-width:992px){
    width: 50%;
    margin-bottom: 0;
  }
  h3 {
    font-weight: 400;
    font-size: res(14, 22);
    margin-bottom: 10px;
  }
  h1 {
    font-size: res(22, 54);
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 10;
    span{
      color: #c1ab16;
      display: inline-block;
      position: relative;
      &:before {
        content: '';
        display: block;
        background: rgba(193, 171, 22, 0.5);
        position: absolute;
        left: -4%;
        bottom: 0;
        animation: 2s ease-out 0s 1 scalefromleft;
        width: 110%;
        height: 8px;
        transform: rotate(-2deg);
        border-radius: 2px;
        transform-origin: left center;
      }
    }
  }
  ul{
    font-weight: 400;
    list-style: none;
    margin-bottom: res(10, 30);
    li {
      margin: res(5, 15) 0;
      padding-left: 36px;
      position: relative;
      font-size: res(14, 18);
      line-height: 24px;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 24px;
        height: 24px;
        background: url('@/assets/img/check-mark.svg') center no-repeat;
        background-size: contain;
      }
    }
  }
  h4 {
    color: var(--fm-mint);
    font-size: res(18, 22);
    font-weight: 700;
    &:before {
      content: '\21E6';
      animation: bounce_h_2 3s infinite;
      display: inline-block;
      margin-right: 15px;
    }
    @media(max-width:991px){
      &:before {
        animation: bounce_h_3 3s infinite;
        transform: rotate(-90deg);
      }
    }
  }
}

@keyframes scalefromleft {
  from {
    width: 0;
  }
}
@keyframes bounce_h_2 {
  0%,
  100%,
  20%,
  50%,
  80% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(8px);
  }
  60% {
    transform: translateX(4px);
  }
}
@keyframes bounce_h_3 {
  0%,
  100%,
  20%,
  50%,
  80% {
    transform: translateY(0) rotate(-90deg);
  }
  40% {
    transform: translateY(8px) rotate(-90deg);
  }
  60% {
    transform: translateY(4px) rotate(-90deg);
  }
}
</style>
