<template>
  <!-- 介绍卡片 -->
  <v-card width="auto" rounded="lg" min-width="230" hover>
    <v-row>
      <v-col cols="auto">
        <v-avatar class="ma-3" width="200" height="auto" tile>
          <v-img src="../assets/peach.jpg" max-width="200">
            <!-- 图片骨架 怎么有bug
            <template v-slot:placeholder>
              <v-sheet>
                <v-skeleton-loader
                  max-width="200"
                  type="image"
                  transition="scale-transition"
                />
              </v-sheet>
            </template> -->
          </v-img>
        </v-avatar>
      </v-col>
      <v-col>
        <div>
          <v-card-title>{{ title }}</v-card-title>
          <v-card-text>{{ content }}</v-card-text>
          <p>
            现在开始征集音声啦，可以投递至邮箱：949495534@qq.com，记得注明桃按钮，格式为256kbps的mp3
          </p>
          <p>最好还可以附上分类，也收集一些分类名称</p>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "introduction",
  data: () => ({
    title: "网页介绍",
    content:
      "这里是“桃按钮”项目，这个项目起于我偶然发现的豹按钮，刚好在学Vue，我就想也做一个出来玩一下，技术有限，可能进展极度缓慢。声明：本项目为个人作品，与 雪桃子Official 没有关联",
  }),
};
</script>

<style>
</style>