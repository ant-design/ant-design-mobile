import React, { FC } from 'react'
import classNames from 'classnames'

const classPrefix = `adm-slider`

type TicksProps = {
  points: number[]
  max: number
  min: number
  upperBound: number
  lowerBound: number
}

const Ticks: FC<TicksProps> = ({
  points,
  max,
  min,
  upperBound,
  lowerBound,
}) => {
  const range = max - min
  const elements = points.map(point => {
    const offset = `${(Math.abs(point - min) / range) * 100}%`

    const isActived = point <= upperBound && point >= lowerBound
    const style = { left: offset }

    const pointClassName = classNames({
      [`${classPrefix}-tick`]: true,
      [`${classPrefix}-tick-active`]: isActived,
    })

    return <span className={pointClassName} style={style} key={point} />
  })

  return <div className={`${classPrefix}-ticks`}>{elements}</div>
}

export default Ticks
