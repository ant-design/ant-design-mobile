import * as React from 'react'
import * as icons from '@ant-design/mobile-icons'
import './all.less'

const iconsArr = Object.keys(icons).filter(i => !i.startsWith('_'))

function groupIcons() {
  const fillIcons: any = []
  const outlineIcons: any = []
  const otherIcons: any = []
  const groups = [
    {
      type: 'Fill',
      icons: fillIcons,
    },
    {
      type: 'Outline',
      icons: outlineIcons,
    },
    {
      type: 'Other',
      icons: otherIcons,
    },
  ]

  iconsArr.forEach(name => {
    // @ts-ignore
    const icon = icons[name]
    if (icon.displayName.endsWith('Fill')) {
      fillIcons.push(icon)
    } else if (icon.displayName.endsWith('Outline')) {
      outlineIcons.push(icon)
    } else {
      otherIcons.push(icon)
    }
  })

  return groups
}

const groupedIcons = groupIcons()

const Item: React.FC<{ icon: any }> = props => {
  const handleClick = () => {
    console.log(props.icon.displayName)
  }

  return (
    <div className="demo-icon-group-item" onClick={handleClick}>
      <props.icon color="#1677ff" />
      <div>{props.icon.displayName}</div>
    </div>
  )
}

export default () => (
  <div className="demo-icon-all">
    {groupedIcons.map(({ type, icons }, index) => {
      return (
        <>
          <h3>{type}</h3>
          <div key={index} className="demo-icon-group">
            {icons.map((icon: any, i: string) => {
              return <Item icon={icon} key={i} />
            })}
          </div>
        </>
      )
    })}
  </div>
)
