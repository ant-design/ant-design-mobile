import * as React from 'react'
import classnames from 'classnames'
import ReactCarousel from 'nuka-carousel'
import { CarouselPropsType } from './PropsType'
import { withError } from '../rmc'
import { useTracker } from '../hooks'
import PagingDots from './PagingDots'

import '@ant-design/mobile-styles/lib/Carousel'

const prefix = 'amd-carousel'
export const Carousel: React.FC<CarouselPropsType> = props => {
  const { dots, infinite, className, ...rest } = props
  const cls = classnames(className, prefix)
  useTracker(Carousel.displayName)

  return (
    <ReactCarousel
      {...rest}
      className={cls}
      renderCenterLeftControls={() => null}
      renderCenterRightControls={() => null}
      renderBottomCenterControls={p => dots && <PagingDots {...p} />}
      wrapAround={infinite}
    >
      {props.children}
    </ReactCarousel>
  )
}

Carousel.displayName = 'Carousel'

export default withError(Carousel)
