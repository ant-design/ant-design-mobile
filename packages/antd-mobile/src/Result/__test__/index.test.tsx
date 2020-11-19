import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { AlipayCircleFill } from '@ant-design/mobile-icons'
import { Result } from '..'

describe('Button', () => {
  it('snapshot', () => {
    const component = shallow(
      <Result
        img={<AlipayCircleFill color="#1677ff" size="lg" />}
        title="操作成功"
        message="content"
        buttons={[
          {
            type: 'primary',
            children: 'Back Home',
          },
          {
            children: 'Cancel',
          },
        ]}
      />,
    )
    const component2 = shallow(
      <div>
        <Result type="success" message="content" />
        <Result type="error" message="content" />
        <Result type="info" message="content" />
        <Result type="wait" message="content" />
        <Result type="warn" message="content" />
      </div>,
    )

    expect(toJSON(component)).toMatchSnapshot()
    expect(toJSON(component2)).toMatchSnapshot()
  })
})
