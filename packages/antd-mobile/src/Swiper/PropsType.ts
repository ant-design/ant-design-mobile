import { BasePropsType } from '../_internal'

export interface SwiperPropsType extends BasePropsType {
  // 是否有指示点
  indicator?: boolean | { type: 'light' | 'primary' }
  // 自动切换
  autoplay?: boolean
  // 初始位置
  initIndex?: number
  // 自动切换间隔时间 5000ms
  interval?: number
  // 动画时间 500ms
  duration?: number
  // 循环
  loop?: boolean
  // 方向
  direction?: 'horizontal' | 'vertical'
  // 激活样式
  itemActiveClass?: string

  // index 发生变化
  onChange?: (res: { current: number }) => void

  // 每一个视图展示多少 items, 在小程序中需要使用 previous-margin 和 next-margin 来计算百分比
  // 在小程序只支持水平方向
  itemsPerView?: number
  // 间隔, webOnly，在 原生小程序组件中需要在 SwiperItem 上加 margin 来实现
  spaceBetween?: number
}

export interface SwiperItemPropsType extends BasePropsType {}
