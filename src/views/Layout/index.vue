<template>
  <div>
    <keep-alive :include="['Home']">
      <router-view class="main" />
    </keep-alive>

    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">
        首页 <i class="toutiao toutiao-shouye" slot="icon"></i>
      </van-tabbar-item>
      <van-tabbar-item replace to="/video" icon="home-o">
        视频 <i class="toutiao toutiao-shipin" slot="icon"></i>
      </van-tabbar-item>
      <van-tabbar-item replace to="/question" icon="home-o">
        问答 <i class="toutiao toutiao-wenda" slot="icon"></i>
      </van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="home-o">
        我的 <i class="toutiao toutiao-wode" slot="icon"></i>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.toutiao {
  font-size: 40px;
}
/deep/.van-tabbar-item__text {
  font-size: 20px !important;
}
.main {
  padding-bottom: 100px;
  background-color: #f5f7f9;
}
</style>
