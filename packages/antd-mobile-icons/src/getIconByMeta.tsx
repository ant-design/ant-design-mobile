import * as React from 'react'
import loadSprite from './loadSprite'
import BaseIcon from './BaseIcon'
import { IconPropsType } from './PropsType'

export default (meta: { type: string; content: string; name: string }) => {
  const Icon: React.FC<IconPropsType> = props => {
    React.useEffect(() => {
      loadSprite(meta)
    }, [])

    return <BaseIcon type={meta.type} {...props} />
  }

  Icon.displayName = meta.name
  Icon.defaultProps = {
    size: 'md',
  }

  return Icon
}
