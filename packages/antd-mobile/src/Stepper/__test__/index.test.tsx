import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Stepper } from '..'

describe('Stepper', () => {
  it('snapshot', () => {
    const component = shallow(
      <Stepper max={10} min={1} value={1} data-y="111" />,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
