import * as React from 'react'
import {
  unstable_Collapse as Collapse,
  unstable_List as List,
} from '@ant-design/mobile'

export default () => (
  <div>
    <Collapse onChange={key => console.log('key', key)} defaultActiveKey="0">
      <Collapse.Panel header="Title 1">
        <List className="my-list">
          <List.Item>content 1</List.Item>
          <List.Item>content 2</List.Item>
          <List.Item>content 3</List.Item>
        </List>
      </Collapse.Panel>
      <Collapse.Panel header="Title 2">
        this is panel content2 or other
      </Collapse.Panel>
      <Collapse.Panel header="Title 3">
        text text text text text text text text text text text text text text
        text
      </Collapse.Panel>
    </Collapse>
  </div>
)
