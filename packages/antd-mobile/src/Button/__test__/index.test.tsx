import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Alipay } from '@ant-design/mobile-icons'
import { Button } from '..'

describe('Button', () => {
  it('snapshot', () => {
    const component = shallow(
      <Button className="a b" data-y="111">
        button
      </Button>,
    )
    const component2 = shallow(
      <Button capsule icon={Alipay}>
        icon
      </Button>,
    )

    expect(toJSON(component)).toMatchSnapshot()
    expect(toJSON(component2)).toMatchSnapshot()
  })

  it('onPress', () => {
    const onPress = jest.fn()
    const component = shallow(<Button onPress={onPress}>button</Button>)

    component.simulate('press')

    expect(onPress).toHaveBeenCalled()
  })

  it('active className', () => {
    const component = shallow(
      <Button className="a" activeClassName="active">
        button
      </Button>,
    )
    expect(toJSON(component)).toMatchSnapshot()

    component.simulate('pressIn')
    expect(component.find('.amd-button').hasClass('a')).toBeTruthy()
    expect(component.find('.amd-button').hasClass('active')).toBeTruthy()
    expect(toJSON(component)).toMatchSnapshot()

    component.simulate('pressOut')
    expect(component.find('.amd-button').hasClass('a')).toBeTruthy()
    expect(component.find('.amd-button').hasClass('active')).toBeFalsy()
    expect(toJSON(component)).toMatchSnapshot()
  })
})
