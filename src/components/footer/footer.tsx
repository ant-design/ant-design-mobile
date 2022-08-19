import React, { ReactNode, FC, useRef, useState, useEffect } from 'react'
import { mergeProps } from '../../utils/with-default-props'
import { withNativeProps, NativeProps } from '../../utils/native-props'
import classNames from 'classnames'
import { Divider } from '../divider/divider'
import Tag, { TagProps } from '../tag'

const classPrefix = `adm-footer`

export type ChipItem = {
  text: ReactNode
  tagProps?: TagProps
  type?: 'plain' | 'link'
}

export type FooterProps = {
  label?: ReactNode
  links?: ReactNode[]
  content?: ReactNode
  chips?: ChipItem[]
  onTagClick?: (item: ReactNode | any, index: number) => void
} & NativeProps<'--background-color'>

const defaultProps: FooterProps = {
  label: '',
  links: [],
  content: '',
  chips: [],
}

export const Footer: FC<FooterProps> = p => {
  const props = mergeProps(defaultProps, p)
  const [computedLinks, setComputedLinks] = useState(props.links)
  const [computedChips, setComputedChips] = useState(props.chips)
  const clickChipItem = (item: ChipItem, index: number) => {
    if (props.chips?.length && item.type === 'link') {
      props.onTagClick?.(item, index)
    }
  }

  const container = useRef<HTMLDivElement | null>(null)

  const computedWidth = () => {
    const containerWidth = Number(
      window
        .getComputedStyle(container.current as Element, null)
        .width.replace('px', '')
    )
    let w = 0
    if (props.links) {
      for (const i in props.links) {
        const item = document.getElementById(`${classPrefix}-links-item-${i}`)
        const width = window
          .getComputedStyle(item as Element, null)
          .width.replace('px', '')
        console.log('width', width)
        w += Number(width)
        if (w > containerWidth) {
          setComputedLinks(props.links.slice(0, Number(i)))
          break
        }
      }
    }
    if (props.chips) {
      for (const i in props.chips) {
        const item = document.getElementById(`${classPrefix}-chips-item-${i}`)
        const width = window
          .getComputedStyle(item as Element, null)
          .width.replace('px', '')
        w += Number(width)
        if (w > containerWidth) {
          setComputedChips(props.chips.slice(0, Number(i)))
          break
        }
      }
    }
  }

  useEffect(() => {
    computedWidth()
  }, [])

  return withNativeProps(
    props,
    <div
      className={classNames(classPrefix)}
      style={{ padding: props.label ? '0 12px' : '8px 12px' }}
      ref={container}
    >
      {props.label ? (
        <div className={`${classPrefix}-label`}>
          <Divider>{props.label}</Divider>
        </div>
      ) : null}
      {props.links && props.links.length ? (
        <div className={`${classPrefix}-links`}>
          {computedLinks?.map((item, index) => {
            return (
              <div
                key={index}
                className={`${classPrefix}-links-item`}
                id={`${classPrefix}-links-item-${index}`}
              >
                <div>{item}</div>
                {index !== (props.links as ReactNode[]).length - 1 ? (
                  <Divider direction='vertical' />
                ) : null}
              </div>
            )
          })}
        </div>
      ) : null}
      {props.content ? (
        <div className={`${classPrefix}-content`}>{props.content}</div>
      ) : null}
      {props.chips && props.chips ? (
        <div className={`${classPrefix}-chips`}>
          {computedChips?.map((item, index) => {
            return (
              <Tag
                key={index}
                className={`${classPrefix}-chips-item`}
                onClick={() => clickChipItem(item, index)}
                {...item.tagProps}
              >
                <div id={`${classPrefix}-chips-item-${index}`}>{item.text}</div>
              </Tag>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
