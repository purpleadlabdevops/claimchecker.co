<template>
  <section class="section3">
    <div class="section3__grid">
      <div class="section3__grid-row">
        <div class="section3__grid-img-col">
          <figure>
            <img src="@/assets/img/s3_1.jpg" alt="" />
          </figure>
        </div>
        <div class="section3__grid-dscr-col">
          <h4 class="section3__grid-title">$5.6 Billion Antitrust Class Action Settlement With Millions Of Retailers Accused Visa and MasterCard of Fixing Credit and Debit Card Fees.</h4>
          <p class="section3__grid-text">The overcharging of interchange fees on retailers and businesses that accepted Visa and Mastercard payments was rampant. This settlement is for eligible transactions that robbed retailers of profits. <br><br> Businesses and retailers that accepted Visa/Mastercard are eligible for compensation per the terms of the settlement agreement. The settlement is still on appeal, but has been moving through the courts for 7 years (and counting).</p>
        </div>
      </div>

      <div class="section3__grid-row reverse">
        <div class="section3__grid-img-col">
          <figure>
            <img src="@/assets/img/s3_2.jpg" alt="" />
          </figure>
        </div>
        <div class="section3__grid-dscr-col">
          <h4 class="section3__grid-title">Many Businesses Don’t Realize They Can Get Cash Now Without Waiting</h4>
          <p class="section3__grid-text">This lawsuit is 7 years old, with at least 3 more years of litigation. <br><br> But, with our program, businesses can get cash today!</p>
        </div>
      </div>

      <div class="section3__grid-row">
        <div class="section3__grid-img-col">
          <figure>
            <img src="@/assets/img/s3_3.jpg" alt="" />
          </figure>
        </div>
        <div class="section3__grid-dscr-col">
          <h4 class="section3__grid-title">Many Businesses Don’t Realize They Can Qualify (for $5k on average) – But Must Act Now For Early Cash Payment</h4>
          <p class="section3__grid-text">Most businesses have no idea they qualify for thousands of dollars. But this early-cashout program is available right now. <br><br> Get your estimated settlement amount and a quick cash payment, in roughly 1 month, but only if you act now.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section3 {
  background: var(--text-white);
  padding-bottom: 80px;
}
.section3__grid {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
}
.section3__grid-row {
  display: flex;
  align-items: flex-start;
  @include sm {
    display: block;
  }
  &:not(:first-child) {
    margin-top: 60px;
  }
  &.reverse {
    .section3__grid-dscr-col {
      order: -1;
      padding: 15px 30px 15px 80px;
      @include sm {
        width: 100%;
        padding: 0;
      }
    }
  }
}
.section3__grid-dscr-col {
  padding: 15px 80px 15px 30px;
  width: 60%;
  @include sm {
    width: 100%;
    padding: 0;
  }
}
.section3__grid-title {
  color: var(--fm-mint);
  font-size: 30px;
  margin: 0;
  font-weight: 600;
  line-height: 1.2;
}
.section3__grid-text {
  font-size: 18px;
}
.section3__grid-img-col {
  padding: 0px 15px 0px 0px;
  width: 40%;
  @include sm {
    width: 100%;
    padding: 0;
    margin-bottom: 30px;
  }
  figure {
    margin: 0;
  }
  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 460px;
    box-shadow: 5px 5px 10px 0px rgb(0 0 0 / 15%);
    border: 10px solid white;
    @include sm {
      max-width: none;
    }
  }
}
</style>
