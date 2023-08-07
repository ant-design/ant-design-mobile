import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label}不是一個有效的${type}'

const zhHK = mergeLocale(base, {
  locale: 'zh-HK',
  common: {
    confirm: '確定',
    cancel: '取消',
    loading: '加載中',
    close: '關閉',
  },
  Calendar: {
    markItems: ['一', '二', '三', '四', '五', '六', '日'],
    yearAndMonth: '${year}年${month}月',
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
      title: '網絡有點忙',
      description: '動動手指幫忙修復',
    },
    empty: {
      title: '沒有找到您需要的東西',
      description: '找找其他的吧',
    },
  },
  Form: {
    required: '必填',
    optional: '選填',
    defaultValidateMessages: {
      default: '字段驗證錯誤${label}',
      required: '請輸入${label}',
      enum: '${label}必須是其中一個[${enum}]',
      whitespace: '${label}不能為空字符',
      date: {
        format: '${label}日期格式無效',
        parse: '${label}不能轉換為日期',
        invalid: '${label}是一個無效日期',
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate,
      },
      string: {
        len: '${label}須為${len}個字符',
        min: '${label}最少${min}個字符',
        max: '${label}最多${max}個字符',
        range: '${label}須在${min}-${max}字符之間',
      },
      number: {
        len: '${label}必須等於${len}',
        min: '${label}最小值為${min}',
        max: '${label}最大值為${max}',
        range: '${label}須在${min}-${max}之間',
      },
      array: {
        len: '須為${len}個${label}',
        min: '最少${min}個${label}',
        max: '最多${max}個${label}',
        range: '${label}数量須在${min}-${max}之間',
      },
      pattern: {
        mismatch: '${label}與模式不匹配${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: '上傳中...',
  },
  InfiniteScroll: {
    noMore: '沒有更多了',
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

export default zhHK
