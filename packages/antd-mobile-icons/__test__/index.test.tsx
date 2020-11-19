import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { AlipayCircleFill } from '../src'

describe('Touchable', () => {
  it('snapshot', () => {
    const component = shallow(<AlipayCircleFill />)

    expect(toJSON(component)).toMatchSnapshot()
  })
})
