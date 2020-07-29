import * as React from 'react'
import {
  unstable_Picker as Picker,
  unstable_List as List,
} from '@ant-design/mobile'

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
]

export default () => (
  <div>
    <List>
      <Picker
        data={seasons}
        title="我是沙"
        cascade={false}
        extra="请选择(可选)"
      >
        <List.Item arrow="horizontal">
          <h3 key="123">Multiple</h3>
        </List.Item>
      </Picker>
    </List>
  </div>
)
