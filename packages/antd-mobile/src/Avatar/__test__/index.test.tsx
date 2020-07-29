import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Avatar } from '..'

describe('Avatar', () => {
  it('snapshot', () => {
    const component = shallow(<Avatar data-y="111" />)

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('onPress', () => {
    const onPress = jest.fn()
    const component = shallow(<Avatar onPress={onPress} />)

    component.simulate('press')

    expect(onPress).toHaveBeenCalled()
  })
})
