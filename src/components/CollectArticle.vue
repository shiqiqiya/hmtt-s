<template>
  <van-loading v-if="isLoding" size=".53333rem" />

  <van-icon
    v-else
    color="#777"
    :name="is_collected ? 'star' : 'star-o'"
    @click="onClick"
  />
</template>

<script>
import { addCollect, delCollect } from '@/api/article'
export default {
  name: 'CollectArticle',
  props: {
    is_collected: {
      type: Boolean,
      required: true
    }
  },
  created () { },
  data () {
    return {
      isLoding: false
    }
  },
  methods: {
    async onClick () {
      this.isLoding = true
      const target = this.$route.params.article_id
      // this.$emit('update:is_collected', !this.is_collected)
      if (this.is_collected) {
        // 如果是true说明当前已收藏
        // 取消收藏
        try {
          await delCollect(target)
          this.$emit('update:is_collected', !this.is_collected)
        } catch (err) {
          console.log(err)
        }
      } else {
        try {
          await addCollect(target)
          this.$emit('update:is_collected', !this.is_collected)
        } catch (err) {
          console.log(err)
        }
      }
      this.isLoding = false
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
