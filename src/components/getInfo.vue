<template>
  <div>
    <div>阿桃粉丝数：{{ follower }}</div>
    <div>直播间信息：{{ liveRoomisOpen? "开播啦，好耶！":"啊，没播呢" }}</div>
    <v-btn @click="getFollower">获取粉丝数</v-btn>
    <v-btn @click="getLiveRoomInfo">获取直播间信息</v-btn>
  </div>
</template>

<script>
export default {
  name: "getInfo",
  data: () => ({ follower: "有几个粉丝呢？", liveRoomisOpen: 0, }),
  created: function () {
    this.getFollower();
    this.getLiveRoomInfo();
  },
  methods: {
    // 获取粉丝数
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
    // 获取直播间信息
    getLiveRoomInfo() {
      // .get("https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld?mid=451793")
      this.$axios({
        url:
          // 不知道为什么远程调api返回的是个html，本来可以拿到更多直播间信息的，QAQ
          // "https://bird.ioliu.cn/v2?url=https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld",
          "https://bird.ioliu.cn/v1?url=https://api.live.bilibili.com/room/v1/Room/room_init",
        method: "get",
        params: {
          // mid: 451793,
          id: 6580433,
        },
      }).then(
        (response) => (
          (this.liveRoomisOpen = response.data.data.live_status),
          console.log(response.data)
        )
      )
    },
  },
  mounted() {},
};
</script>

<style>
</style>