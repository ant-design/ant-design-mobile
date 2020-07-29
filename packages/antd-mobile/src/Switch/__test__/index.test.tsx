import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Switch } from '..'

describe('Switch', () => {
  it('snapshot', () => {
    const component = shallow(<Switch checked disabled data-y="111" />)
    expect(toJSON(component)).toMatchSnapshot()
  })

  it('normal', () => {
    const component = shallow(<Switch checked disabled />)

    expect(component.find('input').prop('checked')).toBeTruthy()
    expect(component.find('input').prop('disabled')).toBeTruthy()
    expect(component.find('input').prop('value')).toBe('on')

    const component2 = shallow(<Switch checked={false} />)
    expect(component2.find('input').prop('checked')).toBeFalsy()
    expect(component2.find('input').prop('disabled')).toBeFalsy()
    expect(component2.find('input').prop('value')).toBe('off')
  })
})
