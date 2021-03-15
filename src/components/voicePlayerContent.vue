<template>
  <div class="wrapper" v-show="isPlaying">
    <v-progress-circular
      indeterminate
      width="1.5"
      size="20"
      class="me-2"
    ></v-progress-circular>
    <div class="text">
      <span>正在播放：{{ content }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "voicePlayerContent",
  props: ["isPlaying", "content"],
};
</script>

<style>
.wrapper {
  display: inline-block;
}
.text {
  display: inline-block;
  text-align: center;
}
</style>