import React, { FC } from 'react'
import classNames from 'classnames'

const classPrefix = `adm-slider-mark`

export type SliderMarks = {
  [key: number]: React.ReactNode
}

type MarksProps = {
  marks: SliderMarks
  max: number
  min: number
  upperBound: number
  lowerBound: number
}

const Marks: FC<MarksProps> = ({ marks, upperBound, lowerBound, max, min }) => {
  const marksKeys = Object.keys(marks)

  const range = max - min
  const elements = marksKeys
    .map(parseFloat)
    .sort((a, b) => a - b)
    .filter(point => point >= min && point <= max)
    .map(point => {
      const markPoint = marks[point]
      if (!markPoint && markPoint !== 0) {
        return null
      }

      const isActive = point <= upperBound && point >= lowerBound
      const markClassName = classNames({
        [`${classPrefix}-text`]: true,
        [`${classPrefix}-text-active`]: isActive,
      })

      const style = {
        left: `${((point - min) / range) * 100}%`,
      }
      return (
        <span className={markClassName} style={style} key={point}>
          {markPoint}
        </span>
      )
    })

  return <div className={classPrefix}>{elements}</div>
}

export default Marks
