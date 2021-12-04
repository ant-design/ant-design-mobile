import React, { useState, useEffect } from 'react'
import { Collapse, Loading, Result } from 'antd-mobile'
import { DemoBlock, sleep } from 'demos'

const DynamicContent = () => {
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      await sleep(1000)
      setFinished(true)
    }
    loadData()
  }, [])

  return finished ? <Result status='success' title='处理成功' /> : <Loading />
}

export default () => {
  return (
    <>
      <DemoBlock title='基础用法' padding='0' border='none'>
        <Collapse defaultActiveKey={['1']}>
          <Collapse.Panel key='1' title='第一项'>
            这里是第一项的内容
            <br />
            这里是第一项的内容
            <br />
            这里是第一项的内容
            <br />
            这里是第一项的内容
            <br />
            这里是第一项的内容
            <br />
            这里是第一项的内容
            <br />
          </Collapse.Panel>
          <Collapse.Panel key='2' title='第二项'>
            这里是第二项的内容
          </Collapse.Panel>
          <Collapse.Panel key='3' title='第三项'>
            这里是第三项的内容
          </Collapse.Panel>
        </Collapse>
      </DemoBlock>

      <DemoBlock title='手风琴模式' padding='0' border='none'>
        <Collapse accordion>
          <Collapse.Panel key='1' title='第一项'>
            手风琴模式只能同时展开一个
          </Collapse.Panel>
          <Collapse.Panel key='2' title='第二项'>
            手风琴模式只能同时展开一个
          </Collapse.Panel>
          <Collapse.Panel key='3' title='第三项'>
            手风琴模式只能同时展开一个
          </Collapse.Panel>
        </Collapse>
      </DemoBlock>

      <DemoBlock title='禁用' padding='0' border='none'>
        <Collapse>
          <Collapse.Panel key='1' title='第一项'>
            这里是第一项的内容
          </Collapse.Panel>
          <Collapse.Panel key='2' title='第二项' disabled>
            这里是第二项的内容
          </Collapse.Panel>
          <Collapse.Panel key='3' title='第三项' disabled>
            这里是第三项的内容
          </Collapse.Panel>
        </Collapse>
      </DemoBlock>

      <DemoBlock title='动态内容' padding='0' border='none'>
        <Collapse accordion>
          <Collapse.Panel key='1' title='第一项'>
            <DynamicContent />
          </Collapse.Panel>
          <Collapse.Panel key='2' title='第二项'>
            <DynamicContent />
          </Collapse.Panel>
        </Collapse>
      </DemoBlock>
    </>
  )
}
