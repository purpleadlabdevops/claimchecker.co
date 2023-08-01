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
          <h4 class="section3__grid-title">
            Employee Retention Tax Credit (ERC) Was Put Into Place with CARES
            Act, But PPP Got All the Attention
          </h4>
          <p class="section3__grid-text">
            The pandemic and related shutdown wreaked havoc on businesses, so
            Congress passed multiple stimulus acts to distribute relief quickly.
          </p>
          <p class="section3__grid-text">
            The two programs that got all the media attention were the PPP and
            EIDL programs. Most didn’t even know about the ERC Program, and even
            if so, didn’t think they qualified for it (even though it was as
            good or better than PPP).
          </p>
        </div>
      </div>

      <div class="section3__grid-row reverse">
        <div class="section3__grid-img-col">
          <figure>
            <img src="@/assets/img/s3_2.jpg" alt="" />
          </figure>
        </div>
        <div class="section3__grid-dscr-col">
          <h4 class="section3__grid-title">
            Program Was Not Well Understood (even by many CPA’s), so Few Took Advantage
          </h4>
          <p class="section3__grid-text">
            The ERC Program has been amended which can help more businesses qualify.
          </p>
          <p class="section3__grid-text">
            Unlike PPP, there is no limit on max amount you can receive. ERC is getting more attention as business owners realize they can still take advantage.
          </p>
        </div>
      </div>

      <div class="section3__grid-row">
        <div class="section3__grid-img-col">
          <figure>
            <img src="@/assets/img/s3_4.jpg" alt="" />
          </figure>
        </div>
        <div class="section3__grid-dscr-col">
          <h4 class="section3__grid-title">
            Many Businesses Don’t Realize They Can Qualify (for $200k on
            average), but the Window is Closing
          </h4>
          <p class="section3__grid-text">
            Most businesses don’t realize they actually can qualify, or were
            told incorrectly by their CPAs that they wouldn’t.
          </p>
          <p class="section3__grid-text">
            It’s not really the CPA’s fault, as the rules were confusing (and
            changed multiple times), and this is a very specialized one-time
            program.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section3',
}
</script>

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
