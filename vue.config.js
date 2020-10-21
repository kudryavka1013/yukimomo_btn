module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  //跨域请求问题有待解决
  // devServer: {
  //   open: true, 
  //   https: true,
  //   proxy: {
  //     "/api": {
  //       target: "https://api.bilibili.com/",
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/api": ""
  //       }
  //     }
  //   } 
  // },
}