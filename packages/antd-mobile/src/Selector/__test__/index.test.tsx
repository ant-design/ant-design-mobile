import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Selector } from '..'

describe('Selector', () => {
  it('snapshot', () => {
    const component = shallow(
      <Selector
        items={[
          {
            text: '选项一',
            value: 1,
            active: true,
          },
          {
            text: '选项二',
            value: 2,
          },
        ]}
      />,
    )

    const component2 = shallow(
      <Selector
        items={[
          {
            text: '选项一',
            value: 1,
            active: true,
          },
          {
            text: '选项二',
            value: 2,
            disabled: true,
          },
        ]}
      />,
    )

    expect(toJSON(component)).toMatchSnapshot()
    expect(toJSON(component2)).toMatchSnapshot()
  })

  it('active item className', () => {
    const component = shallow(
      <Selector
        activeItemClassName="custom-active"
        items={[
          {
            text: '选项一',
            value: 1,
            active: true,
          },
          {
            text: '选项二',
            value: 2,
          },
        ]}
      />,
    )

    expect(
      component
        .find('.amd-selector-item')
        .first()
        .hasClass('custom-active'),
    ).toBeTruthy()
  })
})
