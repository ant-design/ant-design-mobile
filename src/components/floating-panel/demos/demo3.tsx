import React, { useState, useRef } from 'react'
import {
  FloatingPanel,
  SearchBar,
  Avatar,
  Space,
  Card,
  List,
} from 'antd-mobile'
import type { FloatingPanelRef } from '../index'
import {
  HandPayCircleOutline,
  GiftOutline,
  SoundOutline,
  VideoOutline,
  MailOutline,
  GlobalOutline,
} from 'antd-mobile-icons'

import styles from './demo3.less'

const locations = [
  {
    name: 'Novalee',
    avatar:
      'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  },
  {
    name: 'Sara',
    avatar:
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
  },
  {
    name: 'Marco',
    avatar:
      'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  },
  {
    name: 'Edith',
    avatar:
      'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  },
]

const nearbyList = [
  {
    icon: <SoundOutline />,
    name: 'Broadcast Station',
  },
  {
    icon: <GiftOutline />,
    name: 'Gift Shop',
  },
  {
    icon: <GlobalOutline />,
    name: 'Shopping',
  },
  {
    icon: <VideoOutline />,
    name: 'Cinema',
  },
  {
    icon: <MailOutline />,
    name: 'Post Office',
  },
  {
    icon: <HandPayCircleOutline />,
    name: 'Bank',
  },
]

const anchors = [72, 72 + 119, window.innerHeight * 0.8]

export default () => {
  const [focus, setFocus] = useState(false)
  const ref = useRef<FloatingPanelRef>(null)

  return (
    <>
      <iframe src='https://amap.com' className={styles.map} />

      <FloatingPanel anchors={anchors} ref={ref}>
        <Space block className={styles.search}>
          <SearchBar
            placeholder='Search for a place or address'
            showCancelButton
            onFocus={() => {
              setFocus(true)
            }}
            onBlur={() => {
              setFocus(false)
            }}
          />
          {!focus && <Avatar src='' className={styles.avatar} />}
        </Space>
        <List header='Favorites' style={{ '--border-bottom': 'none' }}>
          <Card>
            <Space block justify='around'>
              {locations.map(item => (
                <div key={item.name} className={styles.item}>
                  <Avatar src={item.avatar} style={{ margin: 'auto' }} />
                  {item.name}
                </div>
              ))}
            </Space>
          </Card>
        </List>

        <List header='Find Nearby'>
          {nearbyList.map(item => (
            <List.Item prefix={item.icon} key={item.name}>
              {item.name}
            </List.Item>
          ))}
        </List>
      </FloatingPanel>
    </>
  )
}
