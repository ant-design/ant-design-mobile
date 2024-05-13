import { Ellipsis, Space } from 'antd-mobile'
import { DownOutline, UpOutline } from 'antd-mobile-icons'
import { DemoBlock } from 'demos'
import React from 'react'

const content =
  '蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。'

export default () => {
  return (
    <>
      <DemoBlock title='尾部省略'>
        <Ellipsis direction='end' content={content} />
      </DemoBlock>

      <DemoBlock title='头部省略'>
        <Ellipsis direction='start' content={content} />
      </DemoBlock>

      <DemoBlock title='中间省略'>
        <Ellipsis direction='middle' content={content} />
      </DemoBlock>

      <DemoBlock title='多行省略'>
        <Ellipsis direction='end' rows={3} content={content} />
      </DemoBlock>

      <DemoBlock title='开头插入自定义节点'>
        <Ellipsis
          direction='end'
          rows={3}
          content={content}
          expandText='展开'
          collapseText='收起'
          contentPrefixNode={
            <>
              <span style={{ color: '#f00' }}>#你好Antd-mobile〓！😊 </span>
            </>
          }
        />
      </DemoBlock>

      <DemoBlock title='展开收起'>
        <Ellipsis
          direction='end'
          content={content}
          expandText='展开'
          collapseText='收起'
        />
      </DemoBlock>

      <DemoBlock title='仅展开'>
        <Space block direction='vertical'>
          <Ellipsis direction='end' content={content} expandText='展开' />
          <Ellipsis direction='start' content={content} expandText='展开' />
          <Ellipsis direction='middle' content={content} expandText='展开' />
        </Space>
      </DemoBlock>

      <DemoBlock title='默认展开'>
        <Ellipsis
          content={content}
          defaultExpanded={true}
          expandText='展开'
          collapseText='收起'
        />
      </DemoBlock>

      <DemoBlock title='emoji'>
        <Ellipsis
          direction='end'
          content={
            '🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉'
          }
          expandText='展开'
          collapseText='收起'
        />
      </DemoBlock>
      <DemoBlock title='这是一个使用icon的例子'>
        <Ellipsis
          direction='end'
          content={content}
          expandText={
            <>
              展开
              <DownOutline />
            </>
          }
          collapseText={
            <>
              收起
              <UpOutline />
            </>
          }
        />
      </DemoBlock>
    </>
  )
}
