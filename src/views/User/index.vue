<template>
  <div class="user-profile">
    <!-- 导航栏 -->
    <van-nav-bar
      class="page-nav-bar"
      title="个人信息"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- /导航栏 -->
    <van-cell title="头像" is-link @click="showInput">
      <van-image
        class="avatar"
        fit="cover"
        round
        :src="profile.photo"
        width="0.9rem"
        height="0.9rem"
      />
    </van-cell>
    <van-cell
      title="昵称"
      @click="isNameShow = true"
      :value="profile.name"
      is-link
    />
    <van-cell
      title="性别"
      :value="profile.gender === 0 ? '男' : '女'"
      is-link
    />
    <van-cell
      title="生日"
      :value="profile.birthday"
      is-link
      @click="isBirthdayShow = true"
    />
    <!-- 昵称遮罩 -->
    <van-popup position="bottom" style="height: 100%" v-model="isNameShow">
      <van-nav-bar
        title="更新昵称"
        left-text="取消"
        right-text="保存"
        @click-left="onNameCanel"
        @click-right="onNameSave"
      />
      <!-- v-model 的原理 -->
      <!-- <van-field v-model="a"></van-field>
      <van-field :value="a" @input="a=$event"></van-field>-->
      <van-field
        :value="profile.name"
        @input="name = $event"
        rows="2"
        autosize
        type="textarea"
        maxlength="50"
        placeholder="请输入留言"
        show-word-limit
      />
    </van-popup>
    <!-- 生日弹出 -->
    <van-popup position="bottom" v-model="isBirthdayShow">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="onConfirm"
      />
    </van-popup>
    <!-- 头像 -->
    <input
      type="file"
      style="display: none"
      accept="image/png,image/jpeg,image/jpg,image/gif"
      ref="file"
      @change="onChange"
    />
    <!-- 头像弹出层 -->
    <van-popup v-model="isAvatarShow" position="bottom" style="height: 100%">
      <UpdateAvatar :img-src.sync="imgSrc" @close="isAvatarShow = false"></UpdateAvatar>
    </van-popup>
  </div>
</template>

<script>
import UpdateAvatar from './components/UpdateAvatar.vue'
import { getUserProfile, updateUserProfile } from '@/api/user'
export default {
  async created () {
    try {
      const res = await getUserProfile()
      console.log(res)
      this.profile = res.data.data
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      profile: {}, // 用户画像 个人简介
      isNameShow: false,
      // 绑定的input事件的值
      name: '',
      isBirthdayShow: false,
      minDate: new Date(1990, 0, 1),
      maxDate: new Date(2025, 10, 1),
      birthday1: '',
      isAvatarShow: false,
      imgSrc: ''
    }
  },
  methods: {
    onNameCanel () {
      this.isNameShow = false
    },
    async onNameSave () {
      // 执行完毕后再关闭弹窗
      await this.save()
      this.isNameShow = false
    },
    async save () {
      try {
        // 获取名字信息
        this.profile.name = this.name
        const res = await updateUserProfile(this.profile)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    },
    onConfirm () {
      this.profile.birthday = this.birthday1
      this.save()
      this.isBirthdayShow = false
    },
    showInput () {
      this.$refs.file.click()
    },
    onChange () {
      const url = window.URL.createObjectURL(this.$refs.file.files[0])
      console.log(url)
      this.imgSrc = url
      this.isAvatarShow = true
    }
  },
  computed: {
    // 因为van-cell单元要的是字符串 1990-11-20 但是datetimepicker选择器里面的要的是数据v-model是日期
    currentDate: {
      get () {
        return new Date(this.profile.birthday)
      },
      set (newVal) {
        this.birthday1 = newVal.getFullYear() + '-' + (newVal.getMonth() + 1) + '-' + newVal.getDate()
      }
    }
  },
  watch: {},
  filters: {},
  components: {
    UpdateAvatar
  }
}
</script>

<style scoped lang='less'>
/deep/.van-nav-bar__text {
  color: #fff;
}
</style>
