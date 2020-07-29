import * as React from 'react'
import * as icons from '@ant-design/mobile-icons'
import './all.less'

const iconsArr = Object.keys(icons).filter(i => !i.startsWith('_'))

const Item: React.FC<{ icon: any }> = props => {
  const handleClick = () => {
    console.log(props.icon.displayName)
  }

  return (
    <div className="demo-icon-all-item" onClick={handleClick}>
      <props.icon color="#1677ff" />
      <div>{props.icon.displayName}</div>
    </div>
  )
}

export default () => (
  <div className="demo-icon-all">
    {iconsArr.map((name, i) => {
      // @ts-ignore
      // icons[name]
      return <Item icon={icons[name]} key={i} />
    })}
  </div>
)
