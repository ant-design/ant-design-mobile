import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { NumericInput } from '..'

describe('NumericInput', () => {
  it('snapshot', () => {
    const component = shallow(
      <NumericInput className="a" keypadClassName="b" data-y="111" />,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
