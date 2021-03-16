<template>
  <div>
    <v-card width="auto" rounded="lg" class="mb-3" hover>
      <v-card-title class="primary white--text">
        <v-icon medium left class="white--text">mdi-account</v-icon>
        雪桃子Official
      </v-card-title>
      <v-card-text class="black--text pt-3">
        这里是阿桃介绍，阿巴阿巴
      </v-card-text>
    </v-card>
    <v-card width="auto" rounded="lg" :loading="isLoading" hover>
      <v-card-title class="blue white--text">
        <v-icon medium left class="white--text">mdi-clock-outline</v-icon>
        直播动态
      </v-card-title>
      <v-card-text class="blue--text text-h6 grey lighten-5">
        <div class="pt-3">
          <div>B站关注数：{{ follower }}</div>
          <div>
            当前直播间：{{ liveRoomisOpen ? "正在直播中！" : "未开播" }}
          </div>
        </div>

        <v-hover class="mt-3 me-3">
          <template v-slot="{ hover }">
            <v-btn
              :class="`elevation-${hover ? 6 : 2}`"
              color="blue white--text"
              href="https://space.bilibili.com/451793"
              target="_blank"
              rounded
            >
              雪桃子Official
            </v-btn>
          </template>
        </v-hover>
        <v-hover class="mt-3 me-3">
          <template v-slot="{ hover }">
            <v-btn
              :class="`elevation-${hover ? 6 : 2}`"
              color="blue white--text"
              href="https://live.bilibili.com/6580433"
              target="_blank"
              rounded
            >
              桃桃的直播间
            </v-btn>
          </template>
        </v-hover>
        <v-hover class="mt-3 me-3">
          <template v-slot="{ hover }">
            <v-btn
              :class="`elevation-${hover ? 6 : 2}`"
              :loading="isLoading"
              :disabled="preventClick"
              color="blue"
              target="_blank"
              @click="getLiveRoomInfo"
              rounded
              icon
            >
              <v-icon>mdi-cached</v-icon>
              <template v-slot:loader>
                <span class="custom-loader">
                  <v-icon light>mdi-cached</v-icon>
                </span>
              </template>
            </v-btn>
          </template>
        </v-hover>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "getInfo",
  data: () => ({
    follower: "有几个粉丝呢？",
    liveRoomisOpen: 0,
    isLoading: true,
    preventClick: false,
  }),
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
      this.isLoading = true;
      this.preventClick = true;
      setTimeout(() => (this.preventClick = false), 5000),
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
            (this.isLoading = false),
            console.log(response.data)
          )
        );
    },
  },
  mounted() {},
  watch: {},
};
</script>

<style>
</style>