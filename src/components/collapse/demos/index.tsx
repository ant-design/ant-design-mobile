import React from 'react'
import { Collapse, Toast } from 'antd-mobile'
import { DemoBlock } from 'antd-mobile/src/demos/demo-block'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Collapse
          defaultActiveKey={['3']}
          onChange={(actionName: string) =>
            Toast.show({
              content: `你选的的key是:${actionName}`,
            })
          }
        >
          <Collapse.Panel key='1' title='第一项'>
            这一项的key是1
          </Collapse.Panel>
          <Collapse.Panel key='2' title='第二项'>
            这一项的key是2
          </Collapse.Panel>
          <Collapse.Panel key='3' title='禁用' disabled>
            这一项默认展开，同时不可以点击
          </Collapse.Panel>
        </Collapse>
      </DemoBlock>
      <DemoBlock title='手风琴模式'>
        <Collapse
          accordion
          defaultActiveKey={['1']}
          onChange={(actionName: string) =>
            Toast.show({
              content: `你选的的key是:${actionName}`,
            })
          }
        >
          <Collapse.Panel key='1' title='标题1'>
            手风琴模式只能同时展开一个
          </Collapse.Panel>
          <Collapse.Panel key='2' title='标题2'>
            手风琴模式只能同时展开一个
          </Collapse.Panel>
          <Collapse.Panel key='3' title='标题3'>
            手风琴模式只能同时展开一个
          </Collapse.Panel>
        </Collapse>
      </DemoBlock>
      <DemoBlock title='隐藏依旧显示DOM结构'>
        <Collapse defaultActiveKey={['1']}>
          <Collapse.Panel key='1' title='第一项' forceRender>
            虽然我隐藏了，但是我的DOM还在
          </Collapse.Panel>
          <Collapse.Panel key='2' title='第二项' forceRender>
            虽然我隐藏了，但是我的DOM还在
          </Collapse.Panel>
          <Collapse.Panel key='3' title='这一项不可点击' disabled>
            你看不到我
          </Collapse.Panel>
        </Collapse>
      </DemoBlock>
    </>
  )
}
