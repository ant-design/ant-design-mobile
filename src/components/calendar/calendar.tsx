import React, { FC, ReactNode, useState } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import dayjs from 'dayjs'

const classPrefix = 'adm-calendar'

export type CalendarProps = {} & NativeProps

export const Calendar: FC<CalendarProps> = props => {
  const [current, setCurrent] = useState(() => dayjs().date(1))
  const header = (
    <div>
      {current.year()}年{current.month() + 1}月
    </div>
  )
  function renderCells() {
    const cells: ReactNode[] = []
    let d = current.clone()
    for (let i = 1; i < d.isoWeekday(); i++) {
      cells.push(<div key={-i}>empty</div>)
    }
    while (d.month() === current.month()) {
      cells.push(
        <div key={d.date()}>
          {d.date()} - {d.isoWeekday()}
        </div>
      )
      d = d.add(1, 'day')
    }
    return cells
  }
  const body = <div>{renderCells()}</div>
  return withNativeProps(
    props,
    <div className={classPrefix}>
      {header}
      {body}
    </div>
  )
}
