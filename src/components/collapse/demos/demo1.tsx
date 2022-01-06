import React, { useState, useEffect } from 'react'
import { Collapse, Loading, Result } from 'antd-mobile'
import { DemoBlock, sleep } from 'demos'
import {
  PicturesOutline,
  CameraOutline,
  CheckCircleOutline,
  CloseCircleOutline,
  ArrowDownCircleOutline,
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

      <DemoBlock title='自定义箭头' padding='0' border='none'>
        <Collapse
          defaultActiveKey={['1']}
          arrow={active => (active ? <PicturesOutline /> : <CameraOutline />)}
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
