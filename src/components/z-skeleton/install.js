/**
 * @date 2021-04-21
 * @author zhouweipeng
 * @explain 此文件为全局安装组件，在main.js中一次性导入或按需引入
 */

import { defineAsyncComponent } from 'vue'

const zSkeleton_c = defineAsyncComponent(() => import('./index.js'))
const zSkeletonRow_c = defineAsyncComponent(() => import('./z-skeleton-row.vue'))
const zSkeletonBlock_c = defineAsyncComponent(() => import('./z-skeleton-block.vue'))
const zSkeletonText_c = defineAsyncComponent(() => import('./z-skeleton-text.vue'))

export function zSkeletonRow(app) {
  app.component('zSkeletonRow', zSkeletonRow_c)
}

export function zSkeletonBlock(app) {
  app.component('zSkeletonBlock', zSkeletonBlock_c)
}

export function zSkeletonText(app) {
  app.component('zSkeletonText', zSkeletonText_c)
}

export default function (app) {
  app.component('zSkeleton', zSkeleton_c)
  app.component('zSkeletonRow', zSkeletonRow_c)
  app.component('zSkeletonBlock', zSkeletonBlock_c)
  app.component('zSkeletonText', zSkeletonText_c)
}