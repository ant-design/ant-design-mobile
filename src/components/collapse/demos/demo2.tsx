import React, { useState, useEffect } from 'react'
import { Collapse, DotLoading, Result } from 'antd-mobile'
import { DemoBlock, sleep } from 'demos'
import {
  CheckCircleOutline,
  CloseCircleOutline,
  ArrowDownCircleOutline,
  AddOutline,
  MinusOutline,
} from 'antd-mobile-icons'

const DynamicContent = () => {
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      await sleep(1000)
      setFinished(true)
    }
    loadData()
  }, [])

  return finished ? (
    <Result status='success' title='处理成功' />
  ) : (
    <DotLoading />
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='禁用' padding='0'>
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

      <DemoBlock title='自定义折叠图标' padding='0'>
        <Collapse
          defaultActiveKey={['1']}
          arrow={active => (active ? <MinusOutline /> : <AddOutline />)}
        >
          <Collapse.Panel key='1' title='第一项'>
            你可以通过 Collapse 的 arrow 属性来控制全部面板的箭头
          </Collapse.Panel>
          <Collapse.Panel
            key='2'
            title='第二项'
            arrow={<ArrowDownCircleOutline />}
          >
            也可以通过 Collapse.Panel 的 arrow 属性来自定义单个面板的箭头
          </Collapse.Panel>
          <Collapse.Panel
            key='3'
            title='第三项'
            arrow={active =>
              active ? <CheckCircleOutline /> : <CloseCircleOutline />
            }
          >
            如果你给 arrow 属性传入的是是一个渲染函数，那么 antd-mobile
            不会为你增加动画，arrow 属性的效果就完全交由你自己来控制了
          </Collapse.Panel>
        </Collapse>
      </DemoBlock>

      <DemoBlock title='动态内容' padding='0'>
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
