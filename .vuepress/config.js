module.exports = {
  // 站点配置
  plugins: [
    [
      'vuepress-plugin-yuque', {
        repoUrl: 'https://www.yuque.com/rnxwoa/ul87tg',
        html: true,
        home: {
          features: [
            { title: '东理前端', details: '一群搞子没事练练手' },
            { title: '服务', details: '资料交流' },
            { title: '内容', details: '绝大部分内容由oyh编写，部分内容来源于网络，侵权必删' },
          ]
        }
      }
    ]
  ]
 } 