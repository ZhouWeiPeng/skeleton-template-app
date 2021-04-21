import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 全部导入
import zSkeleton from './components/z-skeleton/install.js'

// 按需引入
// import { zSkeletonRow, zSkeletonText, zSkeletonBlock } from './components/z-skeleton/install.js'

createApp(App)
  .use(router)
  .use(zSkeleton)
  // .use(zSkeletonRow)
  // .use(zSkeletonText)
  // .use(zSkeletonBlock)
  .mount('#app')
