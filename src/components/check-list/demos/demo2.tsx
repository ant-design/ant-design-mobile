import React, { useMemo, useState } from 'react'
import { Button, CheckList, Popup, SearchBar, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'
import styles from './demo2.less'

const items = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export default () => {
  const [visible, setVisible] = useState(true)
  const [selected, setSelected] = useState('A')
  const [searchText, setSearchText] = useState('')
  const filteredItems = useMemo(() => {
    if (searchText) {
      return items.filter(item => item.includes(searchText))
    } else {
      return items
    }
  }, [items, searchText])

  return (
    <DemoBlock title='Popup + SearchBar + CheckList 组合使用'>
      <Space align='center'>
        <Button
          onClick={() => {
            setVisible(true)
          }}
        >
          显示面板
        </Button>
        <div>你选择了 {selected}</div>
      </Space>
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false)
        }}
        destroyOnClose
      >
        <div className={styles.searchBarContainer}>
          <SearchBar
            placeholder='输入文字过滤选项'
            value={searchText}
            onChange={v => {
              setSearchText(v)
            }}
          />
        </div>
        <div className={styles.checkListContainer}>
          <CheckList
            className={styles.myCheckList}
            defaultValue={selected ? [selected] : []}
            onChange={val => {
              setSelected(val[0])
              setVisible(false)
            }}
          >
            {filteredItems.map(item => (
              <CheckList.Item key={item} value={item}>
                {item}
              </CheckList.Item>
            ))}
          </CheckList>
        </div>
      </Popup>
    </DemoBlock>
  )
}
