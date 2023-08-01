<template>
  <div class="video-frame">
    <div class="video-border">
      <div class="video-holder" @click="videoIsActivated = true">
        <div class="video-holder__ratio">
          <iframe
            v-if="videoIsActivated"
            class="video-holder__iframe"
            allowfullscreen=""
            title="vimeo Video Player"
            :src="`https://player.vimeo.com/video/${videoId}?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=0&amp;portrait=0&amp;byline=0#t=`"
          ></iframe>
          <div v-else class="video-holder__video-wrap">
            <div class="video-holder__play"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoFrame',
  props: {
    videoId: { type: [String, Number], default: 235215203 },
  },
  data() {
    return {
      videoIsActivated: false,
    }
  },
}
</script>

<style lang="scss">
.video-border {
  border-radius: 10px;
  border: 15px solid white;
  box-shadow: 0px 10px 20px 0px rgb(0 0 0 / 20%);
  margin-top: -100px;
  background: white;
}
.video-holder__ratio {
  padding-bottom: 56.25%;
  position: relative;
  background: black;
}
.video-holder__video-wrap {
  background: url('@/assets/img/video-holder.png') center no-repeat;
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.video-holder__play {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: url('@/assets/img/play-button.svg') center no-repeat;
  background-size: cover;
  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));
  pointer-events: none;
}
.video-holder__iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  outline: 0;
}
</style>
