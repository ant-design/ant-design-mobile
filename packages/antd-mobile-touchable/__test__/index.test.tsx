import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Touchable from '../src'

describe('Touchable', () => {
  it('snapshot', () => {
    const component = shallow(
      <Touchable>
        <div />
      </Touchable>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('onPress', () => {
    const fn = jest.fn()
    const component = shallow(
      <Touchable onPress={fn}>
        <div />
      </Touchable>,
    )

    component.simulate('press')

    expect(fn).toHaveBeenCalled()
  })

  it('onPressIn', () => {
    const fn = jest.fn()
    const component = shallow(
      <Touchable onPressIn={fn}>
        <div />
      </Touchable>,
    )

    component.simulate('pressIn')

    expect(fn).toHaveBeenCalled()
  })

  it('onPressOut', () => {
    const fn = jest.fn()
    const component = shallow(
      <Touchable onPressOut={fn}>
        <div />
      </Touchable>,
    )

    component.simulate('pressOut')

    expect(fn).toHaveBeenCalled()
  })
})
