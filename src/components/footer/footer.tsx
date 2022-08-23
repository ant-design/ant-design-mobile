import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { Divider } from '../divider/divider'
import Tag, { TagProps } from '../tag'

const classPrefix = `adm-footer`

export type LinkItem = {
  label: string
  value: string
}

export type ChipItem = {
  text: string | ReactNode
  tagProps?: TagProps
  type?: 'plain' | 'link'
}

export type FooterProps = {
  label?: string | ReactNode
  links?: LinkItem[]
  content?: string | ReactNode
  chips?: ChipItem[]
  onChipClick?: (item: ReactNode | any, index: number) => void
  onLinkClick?: (item: ReactNode | any, index: number) => void
} & NativeProps<'--background-color'>

const defaultProps: FooterProps = {
  label: '',
  links: [],
  content: '',
  chips: [],
}

export const Footer: FC<FooterProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { label, links, content, chips, onChipClick, onLinkClick } = props

  // 点击 标签
  const clickChipItem = (item: ChipItem, index: number) => {
    if (chips?.length && item.type === 'link') {
      onChipClick?.(item, index)
    }
  }

  // 点击 链接
  const clickLinkItem = (
    item: LinkItem,
    index: number,
    e: React.MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>
  ): void => {
    if (onLinkClick) {
      e.preventDefault()
      onLinkClick(item, index)
    }
  }
  return withNativeProps(
    props,
    <div className={classNames(classPrefix)}>
      {label && (
        <div className={`${classPrefix}-label`}>
          <Divider>{label}</Divider>
        </div>
      )}
      {links && links?.length > 0 && (
        <div className={`${classPrefix}-links`}>
          {links?.map((link: LinkItem, index: number) => {
            return (
              <div key={index} className={`${classPrefix}-links-item`}>
                <a
                  href={link?.value}
                  rel='noopener noreferrer'
                  onClick={event => clickLinkItem(link, index, event)}
                >
                  {link?.label}
                </a>
                {index !== links?.length - 1 && (
                  <Divider direction='vertical' />
                )}
              </div>
            )
          })}
        </div>
      )}
      {content && <div className={`${classPrefix}-content`}>{content}</div>}
      {chips && chips?.length > 0 && (
        <div className={`${classPrefix}-chips`}>
          {chips?.map((chip: ChipItem, index: number) => {
            return (
              <Tag
                key={index}
                onClick={() => clickChipItem(chip, index)}
                className={classNames(`${classPrefix}-chips-item`, {
                  [`${classPrefix}-chips-item-link`]: chip.type === 'link',
                })}
                {...chip.tagProps}
              >
                {chip?.text}
              </Tag>
            )
          })}
        </div>
      )}
    </div>
  )
}
