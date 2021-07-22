import {Dropdown} from 'antd-mobile'
import {DemoBlock} from 'antd-mobile/src/demos/demo-block'
import React from 'react'

export default () => {
  return (
    <div>
      <DemoBlock title='一列' padding={'0'}>
        <Dropdown>
          <Dropdown.Item key='sorter' title='排序'>
            <div style={{padding: 12}}>
              排序内容
              <br />
              排序内容
              <br />
              排序内容
              <br />
              排序内容
              <br />
            </div>
          </Dropdown.Item>
        </Dropdown>
      </DemoBlock>
      <DemoBlock title='两列' padding={'0'}>
        <Dropdown>
          <Dropdown.Item key='sorter' title='排序'>
            <div style={{padding: 12}}>
              排序内容
              <br />
              排序内容
              <br />
              排序内容
              <br />
              排序内容
              <br />
            </div>
          </Dropdown.Item>
          <Dropdown.Item key='bizop' title='商机筛选'>
            <div style={{padding: 12}}>
              商机筛选内容
              <br />
              商机筛选内容
              <br />
              商机筛选内容
              <br />
            </div>
          </Dropdown.Item>
        </Dropdown>
      </DemoBlock>
      <DemoBlock title='三列' padding={'0'}>
        <Dropdown>
          <Dropdown.Item key='sorter' title='排序'>
            <div style={{padding: 12}}>
              排序内容
              <br />
              排序内容
              <br />
              排序内容
              <br />
              排序内容
              <br />
            </div>
          </Dropdown.Item>
          <Dropdown.Item key='bizop' title='商机筛选'>
            <div style={{padding: 12}}>
              商机筛选内容
              <br />
              商机筛选内容
              <br />
              商机筛选内容
              <br />
            </div>
          </Dropdown.Item>
          <Dropdown.Item key='more' title='更多筛选'>
            <div style={{padding: 12}}>
              更多筛选内容
              <br />
              更多筛选内容
              <br />
            </div>
          </Dropdown.Item>
        </Dropdown>
      </DemoBlock>
    </div>
  )
}
