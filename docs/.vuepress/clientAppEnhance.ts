import { defineClientAppEnhance } from '@vuepress/client'
import 'default-passive-events'
import './utils/date'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  if (!__SSR__) return
  console.log(app, router, siteData)
})
