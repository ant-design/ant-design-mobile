import React, { ReactNode } from 'react'
import { Footer } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { ChipItem } from '../footer'

export default () => {
  const links = ['底部链接', '底部链接']
  const content = '过往业绩不预示产品未来表现，市场有风险，投资需谨慎'
  const chips: ChipItem[] = [
    {
      text: '蚂蚁借呗',
      tagProps: {
        round: true,
      },
    },
    {
      text: '备用金',
      tagProps: {
        round: true,
      },
    },
    {
      text: '蚂蚁花呗',
      tagProps: {
        color: 'primary',
        round: true,
      },
    },
  ]
  const chips1: ChipItem[] = [
    {
      text: '蚂蚁借呗',
      tagProps: {
        round: true,
      },
      type: 'link',
    },
    {
      text: '备用金',
      tagProps: {
        round: true,
      },
      type: 'link',
    },
    {
      text: '蚂蚁花呗',
      tagProps: {
        color: 'primary',
        round: true,
      },
      type: 'link',
    },
  ]
  const onTagClick = (item: ReactNode, index: number) => {
    console.log(item, index)
  }

  return (
    <>
      <DemoBlock title='只有label'>
        <Footer label='描述信息'></Footer>
      </DemoBlock>

      <DemoBlock title='只有内容'>
        <Footer content={content}></Footer>
      </DemoBlock>

      <DemoBlock title='只有链接'>
        <Footer links={links}></Footer>
      </DemoBlock>

      <DemoBlock title='只有底部标签'>
        <Footer chips={chips}></Footer>
      </DemoBlock>

      <DemoBlock title='任意组合'>
        <Footer label='描述信息' content={content}></Footer>
        <br />
        <Footer label='描述信息' links={links}></Footer>
        <br />
        <Footer content={content} chips={chips}></Footer>
        <br />
        <Footer
          label='描述信息'
          links={links}
          content={content}
          chips={chips}
        ></Footer>
      </DemoBlock>

      <DemoBlock title='标签可以点击'>
        <Footer
          content={content}
          chips={chips1}
          onTagClick={onTagClick}
        ></Footer>
      </DemoBlock>
    </>
  )
}
