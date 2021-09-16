import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const zhCN = mergeLocale(base, {
  common: {
    cancel: '取消',
  },
})

export default zhCN
