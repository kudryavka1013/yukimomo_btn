<template>
  <div height="auto" class="sticky">
    <div class="volume-bar">
      <voice-player-volume />
    </div>

    <v-btn rounded v-on:click="stopAudio" class="my-4 ms-6 primary">
      <v-icon>mdi-stop</v-icon>
      <span>停止播放</span>
    </v-btn>

    <v-btn rounded disabled v-on:click="randomAudio" class="ms-4 primary">
      <v-icon>mdi-shuffle-variant</v-icon>
      <span>随机播放</span>
    </v-btn>

    <v-btn rounded v-on:click="loopAudio" class="ma-4" :color="loopBtnColor">
      <v-icon>mdi-refresh</v-icon>
      <span>洗脑循环</span>
    </v-btn>

    <voice-player-content :is-playing="isPlaying" :content="content" />
  </div>
</template>

<script>
import VoicePlayerContent from "./voicePlayerContent.vue";
import voicePlayerVolume from "./voicePlayerVolume.vue";
export default {
  components: { voicePlayerVolume, VoicePlayerContent },
  name: "voicePlayer",
  data: () => ({
    isLoop: false,
  }),
  computed: {
    loopBtnColor: function () {
      if (this.isLoop) {
        return "primary";
      } else {
        return "second";
      }
    },
    isPlaying() {
      return this.$store.state.isPlaying;
    },
    content() {
      return this.$store.state.content;
    },
  },
  methods: {
    stopAudio: function () {
      this.$audio.pause();
      // this.$audio.currentTime = this.$audio.duration;
      // console.log(this.$audio.ended);
      this.$store.commit("toggleIsPlaying", { isPlaying: false });
      console.log("pause audio");
    },
    randomAudio: function () {
      // this.$audio.
    },
    loopAudio: function () {
      this.$audio.loop = !this.$audio.loop;
      console.log("loop is " + this.$audio.loop);
      this.isLoop = this.$audio.loop;
    },
  },
};
</script>

<style scoped>
.sticky {
  position: sticky;
  bottom: 0px;
  width: 100%;
  margin-bottom: 15px;
  z-index: 1;
  background-color: rgba(178, 235, 242, 0.7);
}
span {
  font-size: 16px;
}
.volume-bar {
  display: inline-block;
  position: relative;
  left: 8px;
  top: 16px; /*偏移*/
}
</style>