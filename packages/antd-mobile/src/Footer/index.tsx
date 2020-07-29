import * as React from 'react'
import classnames from 'classnames'
import { Touchable, withError } from '../rmc'
import { getDataAttr } from '../_internal'
import { useTracker } from '../hooks'
import {
  FooterPropsType,
  TagsPropsType,
  LinksPropsType,
  LogoPropsType,
} from './PropsType'

import '@ant-design/mobile-styles/lib/Footer'

const prefixCls = 'amd-footer'

const Text: React.FC = ({ children }) => (
  <div className={`${prefixCls}-text`}>{children}</div>
)

const Tags: React.FC<TagsPropsType> = ({ tags = [] }) => {
  if (!tags.length) {
    return null
  }
  return (
    <ul className={`${prefixCls}-tags`}>
      {tags.map((tag, index) => {
        return (
          <Touchable key={index} onPress={tag.onPress}>
            <li>{tag.value}</li>
          </Touchable>
        )
      })}
    </ul>
  )
}

const Links: React.FC<LinksPropsType> = ({ links = [] }) => {
  if (!links.length) {
    return null
  }
  return (
    <ul className={`${prefixCls}-links`}>
      {links.map((link, index) => {
        return (
          <Touchable key={index} onPress={link.onPress}>
            <li>{link.value}</li>
          </Touchable>
        )
      })}
    </ul>
  )
}

const Logo: React.FC<LogoPropsType> = ({ src }) => (
  <div className={`${prefixCls}-logo`}>
    <img src={src} />
  </div>
)

export const Footer: React.FC<FooterPropsType> & {
  Text: typeof Text
  Tags: typeof Tags
  Links: typeof Links
  Logo: typeof Logo
} = ({ children, ...rest }) => {
  useTracker(Footer.displayName)

  const wrapperClassName = classnames({
    [`${prefixCls}`]: true,
  })

  return (
    <div {...getDataAttr(rest)} className={wrapperClassName}>
      {children}
    </div>
  )
}

Footer.Text = Text

Footer.Tags = Tags

Footer.Links = Links

Footer.Logo = Logo

Footer.displayName = 'Footer'

export default withError(Footer)
