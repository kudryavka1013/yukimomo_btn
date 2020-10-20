<template>
  <!-- 介绍卡片 -->
  <v-card width="auto" rounded="xl" class="">
    <v-row>
      <v-col>
        <v-avatar class="ma-3" width="200" height="auto" tile>
          <v-img src="../assets/peach.jpg" max-width="200" />
        </v-avatar>
      </v-col>
      <v-col>
        <div>
          <v-card-title>这是标题</v-card-title>
          <v-card-text>这是内容</v-card-text>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "introduction",
};
</script>

<style>
</style>