import { Dropdown, Radio, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'
import React from 'react'

export default () => {
  return (
    <div>
      <DemoBlock title='一列' padding={'0'}>
        <Dropdown>
          <Dropdown.Item key='sorter' title='排序'>
            <div style={{ padding: 12 }}>
              <Radio.Group defaultValue='default'>
                <Space direction='vertical' block>
                  <Radio block value='default'>
                    综合排序
                  </Radio>
                  <Radio block value='nearest'>
                    距离最近
                  </Radio>
                  <Radio block value='top-rated'>
                    评分最高
                  </Radio>
                </Space>
              </Radio.Group>
            </div>
          </Dropdown.Item>
        </Dropdown>
      </DemoBlock>
      <DemoBlock title='两列' padding={'0'}>
        <Dropdown>
          <Dropdown.Item key='sorter' title='排序'>
            <div style={{ padding: 12 }}>
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
            <div style={{ padding: 12 }}>
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
            <div style={{ padding: 12 }}>
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
            <div style={{ padding: 12 }}>
              商机筛选内容
              <br />
              商机筛选内容
              <br />
              商机筛选内容
              <br />
            </div>
          </Dropdown.Item>
          <Dropdown.Item key='more' title='更多筛选'>
            <div style={{ padding: 12 }}>
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
