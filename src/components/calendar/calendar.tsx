import React, { FC, ReactNode, useState } from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import dayjs from 'dayjs'
import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import { ArrowLeft } from './arrow-left'
import { ArrowLeftDouble } from './arrow-left-double'

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
    <div className={`${classPrefix}-header`}>
      <a
        className={`${classPrefix}-arrow-button`}
        onClick={() => {
          setCurrent(current.subtract(1, 'year'))
        }}
      >
        <ArrowLeftDouble />
      </a>
      <a
        className={`${classPrefix}-arrow-button`}
        onClick={() => {
          setCurrent(current.subtract(1, 'month'))
        }}
      >
        <ArrowLeft />
      </a>
      <div className={`${classPrefix}-title`}>
        {current.year()}年{current.month() + 1}月
      </div>
      <a
        className={`${classPrefix}-arrow-button ${classPrefix}-arrow-button-right`}
        onClick={() => {
          setCurrent(current.add(1, 'month'))
        }}
      >
        <ArrowLeft />
      </a>
      <a
        className={`${classPrefix}-arrow-button ${classPrefix}-arrow-button-right`}
        onClick={() => {
          setCurrent(current.add(1, 'year'))
        }}
      >
        <ArrowLeftDouble />
      </a>
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
          key={d.valueOf()}
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

  const mark = (
    <div className={`${classPrefix}-mark`}>
      {(props.weekStartsOn === 'Monday' ? mondayMarkItems : markItems).map(
        item => (
          <div key={item} className={`${classPrefix}-mark-cell`}>
            {item}
          </div>
        )
      )}
    </div>
  )

  return withNativeProps(
    props,
    <div className={classPrefix}>
      {header}
      {mark}
      {body}
    </div>
  )
}

const markItems = ['日', '一', '二', '三', '四', '五', '六']
const mondayMarkItems = ['一', '二', '三', '四', '五', '六', '日']
