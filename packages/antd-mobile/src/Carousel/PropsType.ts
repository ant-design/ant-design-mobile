import { BasePropsType } from '../_internal'

export interface CarouselPropsType extends BasePropsType {
  afterSlide?: () => void
  beforeSlide?: () => void
  autoplay?: boolean
  autoplayInterval?: number
  easing?: string // https://github.com/d3/d3-ease
  heightMode?: 'first' | 'current' | 'max'
  vertical?: boolean
  slideIndex?: number

  // 修改的参数
  dots?: boolean
  infinite?: boolean
}
