import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Alipay } from '../src'

describe('Touchable', () => {
  it('snapshot', () => {
    const component = shallow(<Alipay />)

    expect(toJSON(component)).toMatchSnapshot()
  })
})
