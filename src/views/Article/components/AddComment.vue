<template>
  <van-field
    v-model.trim="message"
    rows="2"
    autosize
    type="textarea"
    maxlength="50"
    placeholder="请输入留言"
    show-word-limit
    center
    ref="field"
  >
    <template #extra>
      <!-- 当输入框没有内容的时候 按钮应该被禁用掉 -->
      <van-button
        type="default"
        :disabled="message.length === 0"
        class="btn"
        @click="onClick"
        >发布</van-button
      >
    </template>
  </van-field>
</template>

<script>
import { addComment } from '@/api/comment'
export default {
  name: 'AddComment',
  props: {
    target: {
      type: [Number, String],
      required: true
    },
    // 如果对文章评论不用传  对评论评论要传
    art_id: {
      type: [String, String]
    }
  },
  created () { },
  data () {
    return {
      message: ''
    }
  },
  methods: {
    async onClick () {
      try {
        const res = await addComment({
          target: this.target,
          content: this.message,
          art_id: this.art_id
        })
        console.log(res)
        this.$emit('add-comment', res.data.data.new_obj)
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {},
  mounted () {
    // 组件最终会变成dom结构 $el 可以获得这个组件的根标签
    this.$refs.field.$el.querySelector('textarea').focus()
  }
}
</script>

<style scoped lang='less'>
.btn {
  border: none;
}
</style>
