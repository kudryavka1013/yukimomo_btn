<template>
  <div height="auto" class="fixed">
    <div class="volume-bar">
      <voice-player-volume />
    </div>

    <v-btn rounded v-on:click="stopAudio" class="my-4 ms-6">
      <v-icon>mdi-stop</v-icon>
      <span>停止播放</span>
    </v-btn>

    <v-btn rounded v-on:click="randomAudio" class="ms-4">
      <v-icon>mdi-shuffle-variant</v-icon>
      <span>随机播放</span>
    </v-btn>

    <v-btn rounded v-on:click="loopAudio" class="ma-4">
      <v-icon>mdi-refresh</v-icon>
      <span>洗脑循环</span>
    </v-btn>

    <voice-player-content :is-playing="true" :content="456"/>
  </div>
</template>

<script>
import VoicePlayerContent from "./voicePlayerContent.vue";
import voicePlayerVolume from "./voicePlayerVolume.vue";
export default {
  components: { voicePlayerVolume, VoicePlayerContent },
  name: "voicePlayer",
  data: () => ({}),
};
</script>

<style scope>
.fixed {
  position: fixed;
  bottom: 0px;
  width: 100%;
  z-index: 1;
  background-color: #dddddd;
  opacity: 1;
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