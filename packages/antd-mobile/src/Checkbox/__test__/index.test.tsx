import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Checkbox } from '..'

describe('Checkbox', () => {
  it('snapshot', () => {
    const component = shallow(
      <div>
        <Checkbox checked data-y="111" /> checked
        <br />
        <Checkbox checked={false} /> no checked
        <br />
        <Checkbox checked disabled /> checked disabled
        <br />
        <Checkbox checked={false} disabled /> no checked disabled
        <br />
      </div>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
