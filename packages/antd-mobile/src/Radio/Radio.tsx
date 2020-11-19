import * as React from 'react'
import { CheckOutline } from '@ant-design/mobile-icons'
import CheckboxCore from '../Checkbox/Checkbox'
import { useControlledByChecked } from '../hooks'
import { RadioPropsType } from './PropsType'

export const Radio: React.FC<RadioPropsType> = props => {
  const { checked, onChange } = useControlledByChecked(props)

  return (
    <CheckboxCore
      {...props}
      onChange={onChange}
      prefixCls="amd-radio"
      type="radio"
      checked={checked}
    >
      {checked ? (
        <CheckOutline className={'amd-radio-checked-icon'} size="xs" />
      ) : (
        undefined
      )}
    </CheckboxCore>
  )
}

Radio.defaultProps = {
  defaultChecked: false,
}

export default Radio
