<template>
  <v-timeline align-top class="mx-8">
    <v-timeline-item
      v-for="(item, i) in timeLineInfo"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <!-- 反方向时间插槽 -->
      <template v-slot:opposite>
        <span class="text-h4 primary--text">
          {{ item.date }}
        </span>
      </template>
      <!-- 卡片 -->
      <v-card :color="item.color" dark hover>
        <v-card-title class="text-h5">{{ item.title }}</v-card-title>
        <v-card-subtitle class="text-subtitle-1 font-weight-medium">
          {{ item.subtitle }}
        </v-card-subtitle>
        <v-card-text class="white text--primary pt-3">
          <p class="text-body-1">
            {{ item.text }}
          </p>
          <!-- 可能会有的链接 -->
          <v-btn
            :color="item.color"
            v-if="item.btn"
            outlined
            :href="item.link"
            target="_blank"
          >
            {{ item.btnText }}
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import timeLineInfo from "../config/timeLineInfo";
export default {
  name: "timeLine",
  data: () => ({
    timeLineInfo: timeLineInfo,
  }),
};
</script>

<style>
</style>