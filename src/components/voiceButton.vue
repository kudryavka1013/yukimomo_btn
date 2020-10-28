<template>
  <!-- 音声按钮 -->
  <v-btn rounded color="cyan lighten-3" @click="play" dark class="me-3 mb-3">
    {{ voiceName }}
  </v-btn>
</template>

<script>
export default {
  name: "voiceButton",
  methods: {
    play() {
      const audio = new Audio();
      // 此处请务必要require，否则解析成 text/html
      audio.src = require("../../public/voices/" + this.path);
      audio.preload = "metadata";
      audio.load();
      audio.oncanplay = function () {
        console.log(audio.duration);
      };
      console.log(audio);
      audio.play();
    },
  },
  props: ["voiceName", "path", "tag"],
};
</script>

<style>
</style>