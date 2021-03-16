<template>
  <div class="cyan lighten-5">
    <!-- <v-parallax
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    > -->
      <div class="ma-3 mt-0 pt-3">
        <introduction />
        <v-alert
          class="mt-3"
          dense
          rounded="lg"
          tran
          transition="scroll-x-transition"
          border="left"
          colored-border
          type="info"
          color="primary"
          elevation="2"
          dismissible
        >
          音量注意！由于点击按钮引发的包括耳膜破损在内的各种后果本站概不负责！
        </v-alert>
        <v-alert
          class="mt-3"
          dense
          rounded="lg"
          tran
          transition="scroll-x-transition"
          border="left"
          colored-border
          type="info"
          color="primary"
          elevation="2"
          dismissible
        >
          手机端适配尚未完成，最好用电脑网页打开
        </v-alert>
      </div>

      <div class="ma-3">
        <voice-card
        class="mb-3"
          rounded="lg"
          :title="item.tag"
          v-for="item in voicesGroup"
          :key="item.tag"
        >
          <voice-button
            v-for="(i, index) in item.childs"
            :key="index"
            :voiceName="i.voiceName"
            :path="i.path"
          />
        </voice-card>
      </div>
    <!-- </v-parallax> -->
    <voice-player class="player" />
  </div>
</template>

<script>
import introduction from "../components/introduction";
import voiceButton from "../components/voiceButton";
import voicesInfo from "../config/voicesInfo";
import voiceCard from "../components/voiceCard";
import voicePlayer from "../components/voicePlayer.vue";

export default {
  name: "Home",
  components: {
    introduction,
    voiceButton,
    voiceCard,
    voicePlayer,
  },
  computed: {
    // 此处可用Lodash的groupBy方法
    voicesGroup: function () {
      const arr = [];
      voicesInfo.forEach((item) => {
        const temp = arr.find((current) => current.tag === item.tag);
        if (temp) {
          temp.childs.push(item);
        } else {
          const obj = {
            tag: item.tag,
            childs: [item],
          };
          arr.push(obj);
        }
      });
      console.log(arr[0].childs);
      return arr;
    },
  },
  data: () => ({}),
};
</script>

<style>
/* .player{
  position: sticky;
} */
</style>