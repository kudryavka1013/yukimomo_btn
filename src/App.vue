<template>
  <v-app>
    <!-- 侧边导航栏 -->
    <v-navigation-drawer v-model="drawer" app color="cyan lighten-5">
      <v-list dense nav>
        <v-subheader>这里是导航，妙啊！</v-subheader>
        <v-list-item-group mandatory color="cyan">
          <v-list-item :to="{ name: 'home' }">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>主页</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'bilibili' }">
            <v-list-item-icon>
              <v-icon>mdi-web</v-icon>
            </v-list-item-icon>
            <v-list-item-title>哔哩哔哩</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'about' }">
            <v-list-item-icon>
              <v-icon>mdi-code-tags</v-icon>
            </v-list-item-icon>
            <v-list-item-title>关于</v-list-item-title>
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
    <v-main>
      <!-- 过渡动画，先滑出旧元素再滑入新元素，原本会有旧元素占位的bug -->
      <v-slide-x-transition mode="out-in" appear>
        <!-- 主页面 -->
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </v-slide-x-transition>
      <!-- 返回顶部按钮 -->
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-fab-transition>
            <v-btn
              v-show="isShowBackToTop"
              color="cyan lighten-3"
              fixed
              bottom
              right
              fab
              v-on="on"
              dark
              @click="backToTop"
            >
              <v-icon>mdi-chevron-up</v-icon>
            </v-btn>
          </v-fab-transition>
        </template>
        <span>回到顶部</span>
      </v-tooltip>
    </v-main>
    <v-footer>
      
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false,
    scroll: 0,
  }),

  computed: {
    isShowBackToTop: function () {
      if (this.scroll >= 300) return true;
      else return false;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.scrollTop);
  },

  methods: {
    // 返回顶部
    backToTop() {
      this.$vuetify.goTo(0, {
        duration: 500,
      });
    },
    // 获取滚动条距页面顶部高度
    scrollTop() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(this.scroll);
    },
  },
};
</script>
<style scoped>
</style>