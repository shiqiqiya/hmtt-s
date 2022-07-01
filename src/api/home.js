import request from '@/utils/request'
/**
 *我的频道
 * @returns
 */
export const getMyChannels = () => {
  return request({
    url: 'user/channels'
  })
}
/**
 *获取文章李彪
 * @param {*} param0
 * @returns
 */
// eslint-disable-next-line camelcase
export const getArticleList = ({ channel_id, timestamp }) => {
  return request({
    url: '/articles',
    params: { channel_id, timestamp }
  })
}
/**
 * 获取所有的频道列表
 * @returns
 */
export const getAllArticleList = () => {
  return request({
    url: '/channels'
  })
}
