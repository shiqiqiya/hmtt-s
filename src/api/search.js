
import request from '@/utils/request'
/**
 *搜索联想数据列表
 * @param {*} q
 * @returns
 */
export const getSuggestList = q => {
  return request({
    url: '/suggestion',
    params: {
      q
    }
  })
}
/**
 * 获取搜索结果列表
 * @param {*} page 当前页数 per_page 每页的数量 q 搜索关键词
 * @returns
 */
// eslint-disable-next-line camelcase
export const getSearchResult = ({ page = 1, per_page, q }) => {
  return request({
    url: '/search',
    params: {
      page,
      per_page,
      q
    }
  })
}
