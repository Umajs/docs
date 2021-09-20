import { defineClientAppEnhance } from '@vuepress/client'
import 'default-passive-events'
import './utils/date'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  console.log(app, router, siteData)
})
