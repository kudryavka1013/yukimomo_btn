<template>
  <div>
    <div>阿桃粉丝数：{{ follower }}</div>
    <div>直播间信息：{{ data }}</div>
    <v-btn @click="getFollower">获取粉丝数</v-btn>
    <v-btn @click="getLiveRoom">获取直播间信息</v-btn>
  </div>
</template>

<script>
export default {
  name: "getInfo",
  data: () => ({ follower: "" }),
  methods: {
    getFollower() {
      // .get("https://api.bilibili.com/x/relation/stat?vmid=451793")
      this.$axios({
        url:
          "https://bird.ioliu.cn/v1?url=https://api.bilibili.com/x/relation/stat",
        method: "get",
        params: { vmid: 451793 },
      }).then(
        (response) => (
          (this.follower = response.data.data.follower),
          console.log(response.data)
        )
      );
    },
    getLiveRoom() {
      // .get("https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld?mid=451793")
      this.$axios({
        url:
          "https://bird.ioliu.cn/v2?url=https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld",
        method: "get",
        params: { mid: 451793 },
      }).then((response) => (console.log(response.data)));
    },
  },
  mounted() {},
};
</script>

<style>
</style>