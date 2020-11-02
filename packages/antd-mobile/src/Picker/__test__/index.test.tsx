import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
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

describe('Picker', () => {
  it('snapshot', () => {
    const component = shallow(
      <div>
        <List>
          <Picker title="选择季节" data={seasons} cascade={false}>
            {/* <List.Item arrow="horizontal"> */}
            <h3 key="123">Multiple</h3>
            {/* </List.Item> */}
          </Picker>
        </List>
      </div>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
