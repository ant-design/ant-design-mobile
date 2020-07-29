import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Steps } from '..'

const { Step } = Steps

describe('Steps', () => {
  it('horizontal snapshot', () => {
    const component = shallow(
      <Steps current={3} direction="horizontal">
        <Step title="Finished" data-y="1" />
        <Step title="In Progress" description="This is description" />
        <Step title="Waiting" description="This is description" />
      </Steps>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('vertical snapshot', () => {
    const component = shallow(
      <Steps current={2} direction="vertical">
        <Step title="Finished" description="This is description" />
        <Step title="In Progress" description="This is description" />
        <Step title="Waiting" />
        <Step title="Final" description="This is description" />
      </Steps>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
