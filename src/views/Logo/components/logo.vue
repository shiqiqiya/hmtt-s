<template>
  <div>
    这还是一个用来测试分支的
    <van-nav-bar title="登录" left-arrow @click-left="$router.back()">
      <template #left>
        <van-icon name="cross"></van-icon>
      </template>
    </van-nav-bar>
    再次的进行最后一次的测试
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

<style scoped>
</style>
