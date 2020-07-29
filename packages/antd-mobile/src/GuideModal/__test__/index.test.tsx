import * as React from 'react'
import { mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import BasicGuideModal from '../demo/basic'

describe('GuideModal', () => {
  it('default snapshot', () => {
    const component = mount(<BasicGuideModal data-y="111" />)

    expect(toJSON(component)).toMatchSnapshot()
  })
})
