<template>
  <div class="signature">
    <VueSignaturePad width="100%" height="200px" ref="signaturePad" class="signature__canvas" />
    <div class="signature__buttons">
      <button type="button" @click="save" title="Save"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg></button>
      <button type="button" @click="undo" title="Undo"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"/></svg></button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      if(isEmpty){
        alert('Please provide a signature first.')
      } else {
        this.$parent.signature = data
        // console.dir(data)
        this.$axios.post(`${process.env.API}/image`, {
          headers: { 'Content-Type': 'application/json' },
          params: {
            data: data
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.signature {
  margin-top: 10px;
  &__canvas{
    background: #fff;
    border: 2px solid var(--fm-mint);
    border-radius: 16px;
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
  }
  &__buttons{
    display: flex;
    button{
      background: var(--fm-mint);
      border: none;
      height: 32px;
      width: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      &:not(:first-child){
        margin-left: 15px;
      }
      svg{
        width: 16px;
        height: auto;
        fill: var(--text-white);
      }
    }
  }
  h4{
    font-size: 16px;
    margin-bottom: 10px;
  }
}
</style>