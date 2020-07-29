import * as React from 'react'
import classnames from 'classnames'
import RMCInputNumber from 'rmc-input-number'
import { Add, Minus } from '@ant-design/mobile-icons'
import { withError } from '../rmc'
import { useTracker } from '../hooks'
import { StepperPropsType } from './PropsType'

import '@ant-design/mobile-styles/lib/Stepper'

export const Stepper: React.FC<StepperPropsType> = props => {
  useTracker(Stepper.displayName)

  const { showNumber, className, ...restProps } = props
  const stepperCls = classnames(className, {
    ['showNumber']: !!showNumber,
  })

  return (
    // @ts-ignore
    <RMCInputNumber
      {...restProps}
      upHandler={<Add />}
      downHandler={<Minus />}
      prefixCls="amd-stepper"
      focusOnUpDown={false}
      className={stepperCls}
    />
  )
}

Stepper.displayName = 'Stepper'

Stepper.defaultProps = {
  step: 1,
  readOnly: false,
  showNumber: false,
}

export default withError(Stepper)
