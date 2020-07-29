import * as React from 'react'
import classnames from 'classnames'
import Button from '../Button'

import { BasePropsType } from '../_internal'
import { prefixCls } from './util'
import { Touchable } from '../rmc'

export interface INext extends BasePropsType {
  stepIndex?: number
  stepLen?: number
  nextBtnText?: string
  customNext?: boolean
  showSkip?: boolean
  goNext?: () => void
  goSkip?: () => void
}

const Next: React.FC<INext> = props => {
  const {
    className,
    children,
    stepIndex,
    stepLen,
    nextBtnText,
    customNext,
    showSkip,
    goNext,
    goSkip,
  } = props
  if (customNext) {
    return (
      <Touchable onPress={goNext}>
        <div>{children}</div>
      </Touchable>
    )
  }
  const isLast = stepIndex === (stepLen || 1) - 1
  const btnText = nextBtnText ? nextBtnText : isLast ? '知道了' : '下一步'

  const cls = classnames({
    [`${prefixCls}-next-btn-wrap`]: true,
    [`${className}`]: !!className,
  })

  const showSkipButton = showSkip && !isLast

  return (
    <div className={cls}>
      {showSkipButton ? (
        <Button capsule className={`${prefixCls}-next-btn`} onPress={goSkip}>
          跳过
        </Button>
      ) : null}
      <Button
        capsule
        className={showSkipButton ? '' : `${prefixCls}-next-btn`}
        onPress={goNext}
      >
        {btnText}
      </Button>
    </div>
  )
}
Next.displayName = 'Next'

export default Next
