<template>
  <!-- 音声按钮 -->
  <v-hover >
    <v-btn rounded  color="primary" @click="play" dark class="me-3 mb-3">
      {{ voiceName }}
    </v-btn>
  </v-hover>
</template>

<script>
export default {
  name: "voiceButton",
  methods: {
    // play() {
    //   const audio = new Audio();
    //   // 此处请务必要require，否则解析成 text/html
    //   audio.src = require("../../public/voices/" + this.path);
    //   audio.preload = "metadata";
    //   audio.load();
    //   audio.oncanplay = function () {
    //     console.log(audio.duration);
    //   };
    //   console.log(audio);
    //   audio.play();
    // },
    play() {
      // 此处请务必要require，否则解析成 text/html
      this.$audio.src = require("../../public/voices/" + this.path);
      // var voiceName = this.path.slice(0,this.path.lastIndexOf("."));
      console.log(this.voiceName);
      // this.$audio.preload = "metadata";
      // console.log(this.$audio);
      // console.log(this.$audio.preload)
      // console.log(this.$audio.volume)
      this.$audio.load();
      this.$audio.oncanplay = function () {};
      this.$store.commit("toggleIsPlaying", { isPlaying: true });
      this.$store.commit("changeContent", { content: this.voiceName });
      this.$audio.play();
    },
  },
  props: ["voiceName", "path", "tag"],
};
</script>

<style>
</style>