<template>
  <v-footer inset app absolute>
    <div class="mx-auto">
      <div class="copyright">
        <span>Copyright © 2020-2021 <b>kudryavka1013</b>. All rights reserved.</span>
      </div>
      <div class="record">
        <a
          target="_blank"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=36072202000185"
        >
          <img src="../../public/备案图标.png" style="float: left" />
          <p>赣公网安备 36072202000185号</p>
        </a>

        <v-divider class="mx-1" vertical></v-divider>

        <a target="_blank" href="beian.miit.gov.cn">
          <p>赣ICP备2021001858号-1</p>
        </a>
      </div>
      <div class="badge">
        <a
          href="https://github.com/kudryavka1013/yukimomo_btn"
          title="GitHub"
          target="_blank"
        >
          <img
            src="https://badgen.net/github/release/kudryavka1013/yukimomo_btn?color=cyan"
          />
          <img
            src="https://badgen.net/github/watchers/kudryavka1013/yukimomo_btn?color=cyan"
          />
          <img
            src="https://badgen.net/github/stars/kudryavka1013/yukimomo_btn?color=cyan"
          />
          <img
            src="https://badgen.net/github/forks/kudryavka1013/yukimomo_btn?color=cyan"
          />
        </a>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "pageFooter",
};
</script>

<style>
.badge {
  text-align: center;
  line-height: 20px;
}
.badge img {
  padding: 5px;
}
.copyright{
  text-align: center;
}
/* .copyright p{
  height: 20px;
  line-height: 20px;
} */
.record {
  /* width: auto; */
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;
}
.record a {
  display: inline-block;
  text-decoration: none;
  height: 20px;
  line-height: 20px;
}
.record p {
  float: left;
  height: 20px;
  line-height: 20px;
  margin: 0px 0px 0px 5px;
  color: #939393;
}
</style>