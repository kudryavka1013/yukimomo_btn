<template>
  <div>
    <!-- 侧边导航栏 -->
    <v-navigation-drawer v-model="drawer" app color="cyan lighten-4">
      <v-list dense nav>
        <v-subheader>这里是导航，妙啊！</v-subheader>
        <v-list-item-group
          mandatory
          color="cyan darken-3"
        >
          <v-list-item
            :to="item.route"
            v-for="(item, i) in navigation"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- 顶部标题栏 -->
    <v-app-bar dark app color="cyan lighten-3">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>🍑 桃按钮 </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- 右边的项目地址按钮 -->
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            href="https://github.com/kudryavka1013/yukimomo_btn"
            target="_blank"
            v-on="on"
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </template>
        <span>项目地址</span>
      </v-tooltip>
    </v-app-bar>
  </div>
</template>

<script>
import navigation from "../config/navigation";
export default {
  name: "layout",
  data: () => ({
    drawer: null,
    navigation: navigation,
  }),
};
</script>

<style>
</style>