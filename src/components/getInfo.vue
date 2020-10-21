<template>
  <div>{{ data }}</div>
</template>

<script>
export default {
  name: "getInfo",
  data: () => ({ data: "" }),
  methods: {},
  mounted() {
    // .get("https://api.bilibili.com/x/relation/stat?vmid=451793")
  //   this.$axios({
  //     baseURL:"/api",
  //     url: "https://api.bilibili.com/x/web-interface/card",
  //     method: "get",
  //     params: { vmid: 451793 },
  //   }).then((response) => (this.data = response));
  //   console.log(this.data);
  },
}
</script>

<style>
</style>