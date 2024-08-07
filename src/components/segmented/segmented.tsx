import classNames from 'classnames'
import type {
  SegmentedLabeledOption as RcSegmentedLabeledOption,
  SegmentedProps as RCSegmentedProps,
  SegmentedRawOption,
} from 'rc-segmented'
import RcSegmented from 'rc-segmented'
import * as React from 'react'

import { NativeProps, withNativeProps } from '../../utils/native-props'

export type { SegmentedValue } from 'rc-segmented'

interface SegmentedLabeledOptionWithoutIcon extends RcSegmentedLabeledOption {
  label: RcSegmentedLabeledOption['label']
}

interface SegmentedLabeledOptionWithIcon
  extends Omit<RcSegmentedLabeledOption, 'label'> {
  label?: RcSegmentedLabeledOption['label']
  /** Set icon for Segmented item */
  icon: React.ReactNode
}

function isSegmentedLabeledOptionWithIcon(
  option:
    | SegmentedRawOption
    | SegmentedLabeledOptionWithIcon
    | SegmentedLabeledOptionWithoutIcon
): option is SegmentedLabeledOptionWithIcon {
  return (
    typeof option === 'object' &&
    !!(option as SegmentedLabeledOptionWithIcon)?.icon
  )
}

export type SegmentedLabeledOption =
  | SegmentedLabeledOptionWithIcon
  | SegmentedLabeledOptionWithoutIcon

interface InternalSegmentedProps
  extends Omit<RCSegmentedProps, 'size' | 'options'> {
  options: (SegmentedRawOption | SegmentedLabeledOption)[]
  /** Option to fit width to its parent's width */
  block?: boolean
}

export type SegmentedProps = InternalSegmentedProps &
  NativeProps<
    | '--segmented-background'
    | '--segmented-item-color'
    | '--segmented-item-selected-background'
    | '--segmented-item-selected-color'
    | '--segmented-item-disabled-color'
  >

const classPrefix = `adm-segmented`

const Segmented = React.forwardRef<HTMLDivElement, SegmentedProps>(
  (props, ref) => {
    const {
      prefixCls: customizePrefixCls,
      className,
      block,
      options = [],
      ...restProps
    } = props

    // syntactic sugar to support `icon` for Segmented Item
    const extendedOptions = React.useMemo<RCSegmentedProps['options']>(
      () =>
        options.map(option => {
          if (isSegmentedLabeledOptionWithIcon(option)) {
            const { icon, label, ...restOption } = option
            return {
              ...restOption,
              label: (
                <>
                  <span className={`${classPrefix}-item-icon`}>{icon}</span>
                  {label && <span>{label}</span>}
                </>
              ),
            }
          }
          return option
        }),
      [options, classPrefix]
    )

    return withNativeProps(
      props,
      <RcSegmented
        {...restProps}
        className={classNames(className, {
          [`${classPrefix}-block`]: block,
        })}
        options={extendedOptions}
        ref={ref}
        prefixCls={classPrefix}
      />
    )
  }
)

if (process.env.NODE_ENV !== 'production') {
  Segmented.displayName = 'Segmented'
}

export { Segmented }
