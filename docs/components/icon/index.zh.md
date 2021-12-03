# Icon 图标

图标是在一个单独的 npm 包中，如果你想使用图标，需要先安装它：

```bash
npm install --save antd-mobile-icons
# or
yarn add antd-mobile-icons
```

然后从这个包中引入你所需要的图标即可：

```js
import { AntOutline } from 'antd-mobile-icons'
```

由于主流的构建工具会自动做 Tree-Shaking，所以最终被打包进来的只有你用到的那些图标，不必担心包体积问题。

## 图标列表

```tsx | preview
/**
 * inline: true
 */

const classPrefix = 'adm-icon-doc'
const nameDic = {
  outline: '线框风格',
  fill: '实底风格',
  copyName: '复制名称',
  copyJSX: '复制JSX',
  searchPlaceholder: '搜索 Icon',
  copySucceeded: '复制成功',
}

import React, { useState, ComponentType, useEffect } from 'react'
import { Grid, SearchBar, Selector, Toast } from 'antd-mobile'
import * as Icons from 'antd-mobile-icons'
import { useDebounceEffect } from 'ahooks'
import { useCopy } from 'dumi/theme'
import './demo-all.less'

const iconTypes = [
  {
    label: nameDic.outline,
    value: 'outline',
  },
  {
    label: nameDic.fill,
    value: 'fill',
  },
]

const copyTypes = [
  {
    label: nameDic.copyName,
    value: 'name',
  },
  {
    label: nameDic.copyJSX,
    value: 'jsx',
  },
]

type IconItem = {
  name: string
  component: ComponentType
}
const items: Record<'outline' | 'fill', IconItem[]> = {
  outline: [],
  fill: [],
}

for (let key in Icons) {
  const component = (Icons as any)[key] as ComponentType

  if (typeof component !== 'function') {
    continue
  }
  if (key.includes('Outline')) {
    items.outline.push({
      name: key,
      component,
    })
  } else {
    items.fill.push({
      name: key,
      component,
    })
  }
}

export default () => {
  const [displayedItems, setDisplayedItems] = useState<typeof items>(items)
  const [searchValue, setSearchValue] = useState<string>('')
  const [copyType, setCopyType] = useState<string>(copyTypes[1].value)
  const [iconType, setIconType] = useState<string[]>(
    iconTypes.map(it => it.value)
  )

  const [copyCode] = useCopy()
  const handleIconClick = (item: IconItem) => {
    if (copyType === 'name') {
      copyCode(item.name)
    } else {
      copyCode(`<${item.name} />`)
    }
    Toast.show({
      icon: <item.component />,
      content: nameDic.copySucceeded,
      duration: 1000,
    })
  }

  useDebounceEffect(
    () => {
      setDisplayedItems({
        outline: items.outline.filter(it =>
          it.name.toLowerCase().includes(searchValue.toLowerCase())
        ),
        fill: items.fill.filter(it =>
          it.name.toLowerCase().includes(searchValue.toLowerCase())
        ),
      })
    },
    [searchValue],
    {
      wait: 200,
      leading: false,
      trailing: true,
    }
  )

  let gridColumns = Math.floor(window.innerWidth / 80)
  gridColumns = gridColumns > 7 ? 7 : gridColumns
  gridColumns = gridColumns < 4 ? 4 : gridColumns

  return (
    <div className={classPrefix}>
      <div className={`${classPrefix}-header`}>
        <Selector
          options={iconTypes}
          value={iconType}
          onChange={(val: string[]) => setIconType(val)}
          className={`${classPrefix}-icon-type-selector`}
          multiple
        />
        <Selector
          options={copyTypes}
          value={copyType}
          onChange={(val: string[]) => setCopyType(val[0])}
          className={`${classPrefix}-copy-type-selector`}
        />
        <SearchBar
          value={searchValue}
          onChange={val => setSearchValue(val)}
          placeholder={nameDic.searchPlaceholder}
          className={`${classPrefix}-search`}
        />
      </div>

      {iconTypes.map(type => {
        const iconType_ = type.value
        if (iconType.includes(iconType_)) {
          return (
            <>
              {displayedItems[iconType_].length > 0 && <h3>{nameDic[iconType_]}</h3>}
              <Grid columns={gridColumns}>
                {displayedItems[iconType_].map(item => (
                  <Grid.Item
                    key={item.name}
                    className={`${classPrefix}-item`}
                    onClick={() => handleIconClick(item)}
                  >
                    <div className={`${classPrefix}-icon`}>
                      <item.component />
                    </div>
                    <div className={`${classPrefix}-label`}>{item.name}</div>
                  </Grid.Item>
                ))}
              </Grid>
            </>
          )
        }
      })}
    </div>
  )
}

```

## 使用示例

<code src="./demo-single.tsx"></code>

<!-- <code src="./demo-all.tsx"></code> -->
