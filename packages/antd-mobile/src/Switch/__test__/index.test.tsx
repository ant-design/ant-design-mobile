import * as React from 'react'
import { mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Switch } from '..'

describe('Switch', () => {
  it('snapshot', () => {
    const component = mount(<Switch checked disabled data-y="111" />)
    expect(toJSON(component)).toMatchSnapshot()
  })

  it('normal', () => {
    const component = mount(<Switch checked disabled />)

    expect(component.find('input').prop('checked')).toBeTruthy()
    expect(component.find('input').prop('disabled')).toBeTruthy()
    expect(component.find('input').prop('value')).toBe(undefined)

    const component2 = mount(<Switch checked={false} value="a1" />)
    expect(component2.find('input').prop('checked')).toBeFalsy()
    expect(component2.find('input').prop('disabled')).toBeFalsy()
    expect(component2.find('input').prop('value')).toBe('a1')
  })
})
