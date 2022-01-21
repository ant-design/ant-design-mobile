import { DemoBlock, DemoDescription } from 'demos'
import React from 'react'
import { Avatar, List, Space } from 'antd-mobile'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space block wrap>
          <Avatar src={demoAvatarImages[0]} />
          <Avatar src={demoAvatarImages[1]} />
          <Avatar src={demoAvatarImages[2]} />
          <Avatar src={demoAvatarImages[3]} />
        </Space>
      </DemoBlock>
      <DemoBlock title='默认图'>
        <Space block direction='vertical'>
          <Avatar src='' />
          <DemoDescription>
            如果你不传图片，或者图片加载失败，那么会显示一个默认的图像
          </DemoDescription>
        </Space>
      </DemoBlock>
      <DemoBlock title='自定义大小'>
        <Space block wrap>
          <Avatar src={demoAvatarImages[0]} style={{ '--size': '32px' }} />
          <Avatar src={demoAvatarImages[0]} style={{ '--size': '48px' }} />
          <Avatar src={demoAvatarImages[0]} style={{ '--size': '64px' }} />
        </Space>
      </DemoBlock>
      <DemoBlock title='配合列表使用' padding='0' border='none'>
        <List>
          <List.Item
            prefix={<Avatar src={demoAvatarImages[0]} />}
            description='Deserunt dolor ea eaque eos'
          >
            Novalee Spicer
          </List.Item>
        </List>
      </DemoBlock>
    </>
  )
}

const demoAvatarImages = [
  'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
  'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
]
