<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <!-- <van-cell v-for="item in commentList" :key="item.com_id">
        <van-image
          slot="icon"
          round
          width="30"
          height="30"
          style="margin-right: 10px"
          :src="item.aut_photo"
        />
        <span style="color: #466b9d" slot="title">hello</span>
        <div slot="label">
          <p style="color: #363636">{{ item.content }}</p>
          <p>
            <span style="margin-right: 10px">{{
              item.pubdate | dateformat
            }}</span>
            <van-button size="mini" type="default">回复</van-button>
          </p>
        </div>
        <van-icon slot="right-icon" name="like-o" />
      </van-cell> -->
      <CommentItem
        v-for="item in commentList"
        :key="item.com_id"
        :item="item"
        @replay-show="$emit('replay-show', $event)"
      ></CommentItem>
    </van-list>
  </div>
</template>

<script>
import CommentItem from './CommentItem.vue'
import { getCommentList } from '@/api/comment'
export default {
  name: 'ArticleComment',
  props: {
    type: {
      type: String,
      required: true,
      validator (value) {
        // return ['a', 'c'].indexOf(value) !== -1
        // 数据只能是a或者c才能通过
        return ['a', 'c'].includes(value)
      }
    },
    source: {
      type: [Number, String],
      required: true
    },
    commentList: {
      type: Array,
      required: true
    }
  },
  created () {
    this.getCommentList()
  },
  data () {
    return {
      paramsObj: {
        type: this.type,
        source: this.source,
        limit: 5,
        offset: null
      },
      // commentList: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    async getCommentList () {
      try {
        const res = await getCommentList(this.paramsObj)
        // 判断数据是否加载完毕
        if (res.data.data.results.length === 0) {
          this.finished = true
        }
        console.log(res)
        this.$emit('set-count', res.data.data.total_count)
        // 保留每一页的户数
        this.commentList.push(...res.data.data.results)
        this.paramsObj.offset = res.data.data.last_id
        // 每次拿回数据 关闭转圈
        this.loading = false
      } catch (err) {
        console.log(err)
      }
    },
    onLoad () {
      // 获取下一页的数据
      this.getCommentList()
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {
    CommentItem
  }
}
</script>

<style scoped lang='less'>
.publish-wrap {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

.van-list {
  margin-bottom: 45px;
}
</style>
