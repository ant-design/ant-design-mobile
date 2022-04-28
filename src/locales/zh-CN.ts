import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label}不是一个有效的${type}'

const zhCN = mergeLocale(base, {
  locale: 'zh-CH',
  common: {
    confirm: '确定',
    cancel: '取消',
    loading: '加载中',
  },
  Calendar: {
    markItems: ['一', '二', '三', '四', '五', '六', '日'],
    renderYearAndMonth: (year: number, month: number) => `${year}年${month}月`,
  },
  Cascader: {
    placeholder: '请选择',
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
  Form: {
    required: '必填',
    optional: '选填',
    defaultValidateMessages: {
      default: '字段验证错误${label}',
      required: '请输入${label}',
      enum: '${label}必须是其中一个[${enum}]',
      whitespace: '${label}不能为空字符',
      date: {
        format: '${label}日期格式无效',
        parse: '${label}不能转换为日期',
        invalid: '${label}是一个无效日期',
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
        len: '${label}须为${len}个字符',
        min: '${label}最少${min}个字符',
        max: '${label}最多${max}个字符',
        range: '${label}须在${min}-${max}字符之间',
      },
      number: {
        len: '${label}必须等于${len}',
        min: '${label}最小值为${min}',
        max: '${label}最大值为${max}',
        range: '${label}须在${min}-${max}之间',
      },
      array: {
        len: '须为${len}个${label}',
        min: '最少${min}个${label}',
        max: '最多${max}个${label}',
        range: '${label}数量须在${min}-${max}之间',
      },
      pattern: {
        mismatch: '${label}与模式不匹配${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: '上传中...',
    upload: '上传',
  },
  InfiniteScroll: {
    noMore: '没有更多了',
  },
  Mask: {
    name: '遮罩层',
  },
  Modal: {
    ok: '我知道了',
  },
  PullToRefresh: {
    pulling: '下拉刷新',
    canRelease: '释放立即刷新',
    complete: '刷新成功',
  },
})

export default zhCN
