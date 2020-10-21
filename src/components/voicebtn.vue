<template>
  <!-- 音声按钮 -->
  <v-btn rounded color="cyan lighten-3" @click="playtest" dark>妙啊</v-btn>
</template>

<script>
export default {
  name: "voicebtn",
  methods: {
    playtest() {
      const audio = new Audio();
      audio.src = "../assets/我裂开了，我裂开了！.mp3";
      audio.preload = "metadata";
      audio.play();
    },
  },
};
</script>

<style>
</style>