// 为了方便项目中使用本地存储的时候写的
/**
 * 获取
 * @param {*} key
 * @returns
 */
export function getItem (key) {
  const res = window.localStorage.getItem(key)
  try {
    return JSON.parse(res)
  } catch (err) {
    return res
  }
}
/**
 * 设置
 * @param {*} key
 * @param {*} value
 */
export function setItem (key, value) {
  if (typeof value === 'object') { // 复合数据类型
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    window.localStorage.setItem(key, value)
  }
}
/**
 * 根据key 删除本地存储中的其中一个
 * @param {*} key
 */
export function removeItem (key) {
  window.localStorage.removeItem(key)
}
/**
 * 删除所有的本地存储
 */
export function clearItem () {
  window.localStorage.clearItem()
}
