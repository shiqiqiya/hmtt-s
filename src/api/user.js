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
