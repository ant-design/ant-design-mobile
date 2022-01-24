import { FC } from 'react'
import React from 'react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import classNames from 'classnames'
import { generateIntArray } from '../../utils/generate-int-array'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = 'adm-skeleton'

export type SkeletonProps = {
  animated?: boolean
} & NativeProps<'--width' | '--height' | '--border-radius'>

export const Skeleton: FC<SkeletonProps> = props => {
  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix, {
        [`${classPrefix}-animated`]: props.animated,
      })}
    />
  )
}

export type SkeletonTitleProps = {
  animated?: boolean
} & NativeProps

export const SkeletonTitle: FC<SkeletonTitleProps> = props => {
  return withNativeProps(
    props,
    <Skeleton animated={props.animated} className={`${classPrefix}-title`} />
  )
}

export type SkeletonParagraphProps = {
  animated?: boolean
  lineCount?: number
} & NativeProps

const defaultSkeletonParagraphProps = {
  lineCount: 3,
}

export const SkeletonParagraph: FC<SkeletonParagraphProps> = p => {
  const props = mergeProps(defaultSkeletonParagraphProps, p)
  const keys = generateIntArray(1, props.lineCount)
  const node = (
    <div className={`${classPrefix}-paragraph`}>
      {keys.map(key => (
        <Skeleton
          key={key}
          animated={props.animated}
          className={`${classPrefix}-paragraph-line`}
        />
      ))}
    </div>
  )
  return withNativeProps(props, node)
}
