import React from 'react'
import { Tabs, Badge } from 'antd-mobile'
import { DemoBlock } from 'demos'
import { AppstoreOutline } from 'antd-mobile-icons'
import styles from './demo2.less'

export default () => {
  return (
    <>
      <DemoBlock title='搭配 Badge 使用' padding='0'>
        <Tabs>
          <Tabs.Tab title='水果' key='fruits'>
            菠萝
          </Tabs.Tab>
          <Tabs.Tab title='蔬菜' key='vegetables'>
            西红柿
          </Tabs.Tab>
          <Tabs.Tab
            title={
              <Badge content='1' style={{ '--right': '-10px', '--top': '8px' }}>
                动物
              </Badge>
            }
            key='animals'
          >
            蚂蚁
          </Tabs.Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title='自定义选中项下划线长度' padding='0'>
        <Tabs
          activeLineMode='fixed'
          style={{
            '--fixed-active-line-width': '20px',
          }}
        >
          <Tabs.Tab title='超长的tab111' key='1'>
            1
          </Tabs.Tab>
          <Tabs.Tab title='超长的tab2' key='2'>
            2
          </Tabs.Tab>
          <Tabs.Tab title='超长的tab333' key='3'>
            3
          </Tabs.Tab>
          <Tabs.Tab title='超长的tab4444' key='4'>
            4
          </Tabs.Tab>
          <Tabs.Tab title='超长的tab55555' key='5'>
            5
          </Tabs.Tab>
        </Tabs>
      </DemoBlock>

      <DemoBlock title='自定义字体大小' padding='0'>
        <Tabs
          style={{
            '--title-font-size': '13px',
          }}
        >
          <Tabs.Tab title='水果' key='fruits' />
          <Tabs.Tab title='蔬菜' key='vegetables' />
          <Tabs.Tab title='动物' key='animals' />
        </Tabs>
      </DemoBlock>

      <DemoBlock title='自定义拓展图标' padding='0'>
        <div className={styles.customHeader}>
          <Tabs className={styles.tabs}>
            <Tabs.Tab title='超长的tab111' key='1' />
            <Tabs.Tab title='超长的tab2' key='2' />
            <Tabs.Tab title='超长的tab333' key='3' />
            <Tabs.Tab title='超长的tab4444' key='4' />
            <Tabs.Tab title='超长的tab55555' key='5' />
          </Tabs>
          <AppstoreOutline className={styles.moreIcon} />
        </div>
      </DemoBlock>
    </>
  )
}
