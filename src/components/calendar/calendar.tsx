import React, { FC, ReactNode, useState } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import dayjs from 'dayjs'
import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = 'adm-calendar'

export type CalendarProps = {
  weekStartsOn?: 'Monday' | 'Sunday'
} & NativeProps

const defaultProps = {
  weekStartsOn: 'Sunday',
}

export const Calendar: FC<CalendarProps> = p => {
  const today = dayjs()
  const props = mergeProps(defaultProps, p)
  const [current, setCurrent] = useState(() => dayjs().date(1))
  const header = (
    <div>
      {current.year()}年{current.month() + 1}月
    </div>
  )
  function renderCells() {
    const cells: ReactNode[] = []
    let d = current.subtract(current.isoWeekday(), 'day')
    if (props.weekStartsOn === 'Monday') {
      d = d.add(1, 'day')
    }
    while (cells.length < 6 * 7) {
      cells.push(
        <div
          key={d.date()}
          className={classNames(
            `${classPrefix}-cell`,
            d.month() === current.month()
              ? `${classPrefix}-cell-in`
              : `${classPrefix}-cell-out`,
            d.isSame(today, 'day') && `${classPrefix}-cell-today`
          )}
        >
          <div className={`${classPrefix}-cell-top`}>{d.date()}</div>
          <div className={`${classPrefix}-cell-bottom`} />
        </div>
      )
      d = d.add(1, 'day')
    }
    return cells
  }
  const body = <div className={`${classPrefix}-cells`}>{renderCells()}</div>
  return withNativeProps(
    props,
    <div className={classPrefix}>
      {header}
      {body}
    </div>
  )
}
