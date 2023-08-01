<template>
  <div class="faq__item">
    <div
      class="faq-q"
      @click="isOpened = !isOpened"
      :class="{ opened: isOpened }"
    >
      <h5><slot name="title" /></h5>
    </div>
    <div class="faq-a" v-if="isOpened">
      <slot name="dscr" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'faq',
  data() {
    return {
      isOpened: false,
    }
  },
}
</script>

<style lang="scss">
.faq__item {
  user-select: none;
  &:not(:last-child) {
    margin: 0 0 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
}
.faq-q {
  cursor: pointer;
  position: relative;
  padding: 5px 0 5px 30px;
  transition: 0.2s ease all;
  &:hover {
    padding-top: 2px;
    padding-bottom: 8px;
  }
  h5 {
    font-weight: 500;
    font-size: 18px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  &:before,
  &:after {
    display: inline-block;
    content: '';
    background: rgba(0, 0, 0, 0.3);
    width: 16px;
    height: 2px;
    position: absolute;
    top: 20px;
    left: 0;
    transition: 0.2s ease all;
  }
  &:after {
    transform: rotate(90deg);
  }
  &.opened:before {
    transform: rotate(45deg);
  }
  &.opened:after {
    transform: rotate(-45deg);
  }
}
.faq-a {
  padding-left: 40px;
  padding-bottom: 20px;
  font-style: italic;
  font-size: 18px;
}
</style>
