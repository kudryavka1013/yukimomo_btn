<template>
  <v-app>
    <layout/>
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
      <copyrightFooter/>
    </v-main>
  </v-app>
</template>

<script>
import layout from './layout/layout'
import copyrightFooter from "./components/copyrightFooter";
export default {
  name: "App",

  components: {
    layout,
    copyrightFooter,
    
  },

  data: () => ({
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