<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app color="cyan lighten-5">
      <v-list dense nav>
        <v-subheader>这里是导航，妙啊！</v-subheader>
        <v-list-item-group mandatory>
          
          <v-list-item color="cyan" :to="{name:'home'}">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>主页</v-list-item-title>
          </v-list-item>

          <v-list-item color="cyan" :to="{name:'bilibili'}">
            <v-list-item-icon>
              <v-icon>mdi-web</v-icon>
            </v-list-item-icon>
            <v-list-item-title>哔哩哔哩</v-list-item-title>
          </v-list-item>

          <v-list-item color="cyan" :to="{name:'about'}">
            <v-list-item-icon>
              <v-icon>mdi-code-tags</v-icon>
            </v-list-item-icon>
            <v-list-item-title>关于</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="cyan lighten-3">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>桃按钮 🍑</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <transition>
        <router-view></router-view>
      </transition>
      <bilibili></bilibili>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {

  },

  data: () => ({
    drawer: false,
  }),
};
</script>
