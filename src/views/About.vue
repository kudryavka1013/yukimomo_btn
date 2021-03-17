<template>
  <div>
    <span class="title">关于</span>
    <span
      >这个网站由<a href="https://space.bilibili.com/22735925" target="_blank"
        >_kudryavka </a
      >（
      <a href="https://github.com/kudryavka1013" target="_blank">
        <v-icon>mdi-github</v-icon>kudryavka1013
      </a>
      ）全力开发并支持
    </span>
    <span class="title">技术参考</span>
    <span>前端框架：Vue（2.6.12）</span>
    <span>前端路由：Vue-Router（3.5.11）</span>
    <span>前端状态管理：VueX（3.6.2）</span>
    <span>前端UI组件库：Vuetify（2.3.14）</span>
    <span>脚手架：Vue-Cli</span>
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