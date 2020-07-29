import * as React from 'react'
import { useMemo } from 'react'
import classnames from 'classnames'

import { buildChildren, prefixCls } from './util'
import Next from './Next'
import { StepPropsType } from './PropsType'

export interface IStep {
  stepIndex?: number
  activeStep?: number
  stepLen?: number
  customNext?: boolean
  showSkip?: boolean
  goNext?: () => void
  goSkip?: () => void
}

const Step: React.FC<StepPropsType & IStep> = props => {
  const {
    className,
    children,
    stepIndex,
    activeStep,
    stepLen,
    customNext,
    nextBtnText,
    showSkip,
    goNext,
    goSkip,
  } = props
  const childrenWithProps = customNext
    ? useMemo(
        () =>
          buildChildren(children, 'Next', {
            stepIndex,
            stepLen,
            customNext,
            nextBtnText,
            showSkip,
            goNext,
            goSkip,
          }),
        [children, goNext, stepIndex],
      )
    : null

  const cls = classnames({
    [`${prefixCls}-step-hide`]: stepIndex !== activeStep,
    [`${className}`]: !!className,
  })

  return (
    <div className={cls}>
      {customNext ? (
        childrenWithProps
      ) : (
        <>
          {children}
          <Next
            stepIndex={stepIndex}
            goNext={goNext}
            customNext={customNext}
            nextBtnText={nextBtnText}
            stepLen={stepLen}
            showSkip={showSkip}
            goSkip={goSkip}
          />
        </>
      )}
    </div>
  )
}
Step.displayName = 'Step'

export default Step
