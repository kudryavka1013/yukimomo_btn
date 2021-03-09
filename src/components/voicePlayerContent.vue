<template>
  <div class="wrapper" v-show="isPlaying">
    <v-progress-circular
      indeterminate
      width="1"
      size="20"
      class="me-2"
    ></v-progress-circular>
    <span class="text">正在播放：{{ content }}</span>
  </div>
</template>

<script>
export default {
  name: "voicePlayerContent",
  props: ['isPlaying', 'content'],
};
</script>

<style scope>
.wrapper{
    display: inline-block;
}
.text{
    text-align: center
}
</style>