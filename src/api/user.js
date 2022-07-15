import request from '@/utils/request'

/**
 *获取短信验证码
 * @param {*} mobile
 * @returns
 */
export const getSmsCode = (mobile) => {
  return request({
    url: `/sms/codes/${mobile}`
  })
}
/**
 *登录的接口
 * @param {*} param0
 * @returns
 */
export const login = ({ mobile, code }) => {
  return request({
    method: 'POST',
    url: '/authorizations',
    data: {
      mobile,
      code
    }
  })
}
/**
 * 获取用户个人资料
*/
export const getUserInfo = () => {
  return request({
    url: 'user'
  })
}
/**
 * 频道数据持久化
 * @param {*} channels
 * @returns
 */
export const saveChannels = (channels) => {
  return request({
    url: 'user/channels',
    method: 'PUT',
    data: {
      channels
    }
  })
}
/**
 *
 * @returns 用户个人资料
 */
export const getUserProfile = () => {
  return request({
    url: 'user/profile'
  })
}
/**
 *
 * @param {对象 用户个人资料} profile
 * @returns 修改用户个人资料
 */
export const updateUserProfile = profile => {
  return request({
    method: 'PATCH',
    url: '/user/profile',
    data: profile
  })
}
/**
 * 更新头像
 * @param {裁剪后的头像数据} data
 * @returns
 */
export const updateAvatar = data => {
  return request({
    method: 'PATCH',
    url: '/user/photo',
    data
  })
}
