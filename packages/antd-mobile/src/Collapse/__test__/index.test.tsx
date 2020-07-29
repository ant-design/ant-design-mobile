import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import {
  unstable_Collapse as Collapse,
  unstable_List as List,
} from '@ant-design/mobile'

describe('Collapse', () => {
  it('snapshot', () => {
    const component = shallow(
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
      </Collapse>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
