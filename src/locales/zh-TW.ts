import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const zhTW = mergeLocale(base, {
  common: {
    confirm: '確定',
    cancel: '取消',
    loading: '加載中……',
  },
  Cascader: {
    placeholder: '請選擇',
  },
  Dialog: {
    ok: '我知道了',
  },
  ErrorBlock: {
    default: {
      title: '頁面遇到一些小問題',
      description: '待會來試試',
    },
    busy: {
      title: '前方擁堵',
      description: '刷新試試',
    },
    disconnected: {
      title: '網路有點忙',
      description: '動動手指幫忙修復',
    },
    empty: {
      title: '沒有找到您需要的東西',
      description: '找找其他的吧',
    },
  },
  ImageUploader: {
    uploading: '上傳中...',
  },
  Mask: {
    name: '遮罩層',
  },
  Modal: {
    ok: '我知道了',
  },
  PullToRefresh: {
    pulling: '下拉刷新',
    canRelease: '釋放立即刷新',
    complete: '刷新成功',
  },
})

export default zhTW
