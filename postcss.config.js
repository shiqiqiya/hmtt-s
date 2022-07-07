
module.exports = {
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      // rootValue 设置设计稿量出来的尺寸除以多少 设置基准字体大小
      rootValue ({ file }) {
        // 如果是vant的样式就除37.5 如果是自己的样式就除 75
        return (file.indexOf('vant') !== -1 || file.indexOf('github-markdown-css') !== -1) ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}
