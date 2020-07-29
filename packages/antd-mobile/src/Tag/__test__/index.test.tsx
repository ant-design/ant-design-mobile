import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Tag } from '..'

describe('Tag', () => {
  it('snapshot', () => {
    const component = shallow(
      <Tag className="a b" data-y="111">
        button
      </Tag>,
    )
    expect(toJSON(component)).toMatchSnapshot()
  })

  it('snapshot 2', () => {
    const component = shallow(
      <Tag className="a b" data-count="3" type="line" theme="orange">
        button
      </Tag>,
    )
    expect(toJSON(component)).toMatchSnapshot()
  })

  it('onPress', () => {
    const onPress = jest.fn()
    const component = shallow(
      <Tag className="a b" type="line" theme="orange" onPress={onPress}>
        button
      </Tag>,
    )

    component.simulate('press')

    expect(onPress).toHaveBeenCalled()
  })
})
