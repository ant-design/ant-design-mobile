import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const zhCN = mergeLocale(base, {
  common: {
    confirm: '确定',
    cancel: '取消',
  },
  Dialog: {
    ok: '我知道了',
  },
  ErrorBlock: {
    default: {
      title: '页面遇到一些小问题',
      description: '待会来试试',
    },
    busy: {
      title: '前方拥堵',
      description: '刷新试试',
    },
    disconnected: {
      title: '网络有点忙',
      description: '动动手指帮忙修复',
    },
    empty: {
      title: '没有找到你需要的东西',
      description: '找找其他的吧',
    },
  },
  ImageUploader: {
    uploading: '上传中...',
  },
  Mask: {
    name: '遮罩层',
  },
})

export default zhCN
