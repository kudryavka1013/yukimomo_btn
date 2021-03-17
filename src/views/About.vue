<template>
  <div>
    <span class="title">关于</span>
    <span
      >这个网站由 <a href="https://space.bilibili.com/22735925" target="_blank"
        >_kudryavka </a
      >（
      <a href="https://github.com/kudryavka1013" target="_blank">
        <v-icon>mdi-github</v-icon>kudryavka1013
      </a>
      ）全力开发并支持
    </span>
    <span class="title mt-3">技术参考</span>
    <div>
      <span>前端框架：<a href="https://cn.vuejs.org/" target="_blank" style="color: #63b587">Vue（2.6.12）</a></span>
      <span>前端路由：<a href="https://router.vuejs.org/zh/" target="_blank" style="color: #63b587">Vue-Router（3.5.11）</a></span>
      <span>前端状态管理：<a href="https://vuex.vuejs.org/zh/" target="_blank" style="color: #63b587">VueX（3.6.2）</a></span>
      <span>前端UI组件库：<a href="https://vuetifyjs.com/zh-Hans/" target="_blank" style="color: #4197ef">Vuetify（2.3.14）</a></span>
      <span>前端脚手架：<a href="https://cli.vuejs.org/zh/" target="_blank" style="color: #63b587">Vue-Cli（4.5.7）</a></span>
      <span>语言：<a href="https://www.javascript.com/" target="_blank" style="color: #f8db4a">Javascript</a></span>
      <span>图标库：<a href="https://materialdesignicons.com/" target="_blank" style="color: #4496ec">Material Design Icons</a></span>
    </div>
    <span class="title mt-3">项目参考</span>
    <div>
      <a style="color: #f4b2a9" href="https://github.com/CaoMeiYouRen/shirakami-haruka-button" target="_blank">豹按钮 (:3っ)∋</a>
    </div>
    <span class="title mt-3">友情链接</span>
    <div>
      <a style="color: #f4b2a9" href="https://haruka.fun">豹按钮 (:3っ)∋
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
div {
  text-align: center;
}
span {
  display: block;
}
a:link {
  text-decoration: none;
}
</style>