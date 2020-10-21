<template>
  <div>阿桃粉丝数：{{ data }}</div>
</template>

<script>
export default {
  name: "getInfo",
  data: () => ({ data: "" }),
  methods: {},
  mounted() {
    // .get("https://api.bilibili.com/x/relation/stat?vmid=451793")
    this.$axios({
      baseURL:"/api",
      url: "https://bird.ioliu.cn/v1?url=https://api.bilibili.com/x/relation/stat",
      method: "get",
      params: { vmid: 451793 },
    }).then((response) => (this.data = response.data.data.follower));
    
  },
}
</script>

<style>
</style>