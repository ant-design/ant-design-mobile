import React from 'react'
import { Footer } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { HandPayCircleOutline } from 'antd-mobile-icons'
import { ChipItem, LinkItem } from '../footer'

export default () => {
  const label = '没有更多了'
  const content = '@ 2004-2020 Alipay.com All rights reserved'
  const links: LinkItem[] = [
    {
      text: '阿里云',
      href: 'https://www.aliyun.com/',
    },
    {
      text: '支付宝',
      href: 'https://www.alipay.com/',
    },
  ]
  const chips: ChipItem[] = [
    {
      text: '蚂蚁借呗',
      tagProps: {
        color: '#ddd',
        round: true,
      },
    },
    {
      text: '备用金',
      tagProps: {
        color: '#ddd',
        round: true,
      },
    },
    {
      text: '蚂蚁花呗',
      tagProps: {
        color: '#ddd',
        round: true,
      },
    },
  ]
  const chipsLinkData: ChipItem[] = [
    {
      text: '蚂蚁借呗',
      type: 'link',
      tagProps: {
        color: '#108ee9',
        round: true,
      },
    },
    {
      text: '备用金',
      type: 'link',
      tagProps: {
        color: '#108ee9',
        round: true,
      },
    },
    {
      text: '蚂蚁花呗',
      type: 'link',
      tagProps: {
        color: '#108ee9',
        round: true,
      },
    },
  ]

  const onChipClick = (item: ChipItem, index: number) => {
    console.log(item, index)
    alert(`${item?.text}被点击了`)
  }
  const onLinkClick = (item: LinkItem, index: number) => {
    console.log(item, index)
    alert(`跳转到${item?.href}`)
  }

  return (
    <>
      <DemoBlock title='label是字符串'>
        <Footer label={label}></Footer>
      </DemoBlock>
      <DemoBlock title='label是自定义DOM'>
        <Footer
          label={
            <div>
              <HandPayCircleOutline /> 蚂蚁财富
            </div>
          }
        ></Footer>
      </DemoBlock>
      <DemoBlock title='只有内容'>
        <Footer content={content}></Footer>
      </DemoBlock>
      <DemoBlock title='1个链接'>
        <Footer links={[links[0]]}></Footer>
      </DemoBlock>
      <DemoBlock title='链接：通过href跳转'>
        <Footer links={links}></Footer>
      </DemoBlock>
      <DemoBlock title='链接：通过点击事件跳转'>
        <Footer links={links} onLinkClick={onLinkClick}></Footer>
      </DemoBlock>
      <DemoBlock title='label和内容'>
        <Footer label={label} content={content}></Footer>
      </DemoBlock>
      <DemoBlock title='标签纯展示'>
        <Footer chips={chips}></Footer>
      </DemoBlock>
      <DemoBlock title='标签可跳转'>
        <Footer chips={chipsLinkData} onChipClick={onChipClick}></Footer>
      </DemoBlock>
      <DemoBlock title='链接和内容'>
        <Footer links={links} content={content}></Footer>
      </DemoBlock>
      <DemoBlock title='标签和内容'>
        <Footer chips={chips} content={content}></Footer>
      </DemoBlock>
      <DemoBlock title='所有'>
        <Footer
          links={links}
          label={label}
          chips={chips}
          content={content}
        ></Footer>
      </DemoBlock>
    </>
  )
}
