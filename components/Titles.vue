<template>
  <div class="titles">
    <h3>Most Business Owners Don’t Realize They Can Qualify To</h3>
    <h1>“Get <span>$26,000</span> Cash for Each W2 Employee</h1>
    <h2>Using the IRS’ ERC Program”</h2>
    <ul>
      <li>Qualify 1 of 3 Different Ways (Revenue Reduction, Shutdowns, Supply Chain Disruptions)</li>
      <li>Get Money from the IRS, Even If You Got PPP</li>
      <li>No Cap on Refund. Ie. a 50 Employee Business Can Get $1.3 Million!</li>
      <li>No Up Front Fees. No Credit Check. Not a loan.</li>
    </ul>
    <h4>Take the 60sec Quiz to Find Out If You Qualify, and How Much You Can Get</h4>
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
    padding-left: 10px;
    margin-bottom: 10px;
    @media(min-width:768px){
      margin-bottom: 30px;
      padding-left: 20px;
    }
    li {
      margin: 15px 0;
      padding-left: 36px;
      position: relative;
      font-size: res(14, 18);
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
    font-size: res(16, 22);
    font-weight: 700;
    &:before {
      content: '\21E6';
      animation: bounce_h_2 3s infinite;
      display: inline-block;
      margin-right: 15px;
    }
    @include lg {
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
