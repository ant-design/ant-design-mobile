import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Footer } from '..'

const { Text, Tags, Links, Logo } = Footer

describe('Avatar', () => {
  it('footer snapshot', () => {
    const component = shallow(
      <Footer data-y="111">
        <Text>底部文案置底说明</Text>
      </Footer>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('footer tags snapshot', () => {
    const component = shallow(
      <Footer>
        <Text>© 2004-2020 Alipay.com. All rights reserved.</Text>
        <Tags
          tags={[
            {
              value: '蚂蚁借呗',
              onPress: () => null,
            },
            {
              value: '备用金',
              onPress: () => null,
            },
            {
              value: '花呗收钱',
              onPress: () => null,
            },
          ]}
        />
      </Footer>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('footer links snapshot', () => {
    const component = shallow(
      <Footer>
        <Links
          links={[
            {
              value: '蚂蚁借呗',
              onPress: () => null,
            },
            {
              value: '备用金',
              onPress: () => null,
            },
          ]}
        />
        <Text>© 2004-2020 Alipay.com. All rights reserved.</Text>
      </Footer>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('footer logo snapshot', () => {
    const component = shallow(
      <Footer>
        <Logo src="https://intranetproxy.alipay.com/skylark/lark/0/2020/png/35/1578040656524-338e314f-20fa-4e1e-be89-02730f286e5b.png" />
        <Text>© 2004-2020 Alipay.com. All rights reserved.</Text>
      </Footer>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
