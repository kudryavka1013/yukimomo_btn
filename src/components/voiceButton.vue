<template>
  <!-- 音声按钮 -->
  <v-btn rounded color="cyan lighten-3" @click="playtest" dark>{{ voiceName }}</v-btn>
</template>

<script>
export default {
  name: "voiceButton",
  methods: {
    playtest() {
      const audio = new Audio();
      // 此处请务必要require，否则解析成 text/html
      audio.src = require("../../public/voices/我裂开了，我裂开了！.mp3");
      audio.preload = "metadata";
      audio.play();
    },
  },
  props:['voiceName','path','tag'],
};
</script>

<style>
</style>