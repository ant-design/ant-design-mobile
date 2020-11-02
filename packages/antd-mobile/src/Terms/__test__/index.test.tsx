import * as React from 'react'
import { mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { unstable_Button as Button } from '@ant-design/mobile'
import Terms from '..'

describe('Terms', () => {
  it('basic snapshot', () => {
    const component = mount(
      <Terms
        term={
          <>
            同意<a>《用户授权协议》</a>
          </>
        }
        data-y="111"
      >
        <Button type="primary">提交</Button>
      </Terms>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('checkbox snapshot', () => {
    const component = mount(
      <Terms
        hasChecked
        checked={false}
        term={
          <>
            同意<a>《用户授权协议》</a>
          </>
        }
      >
        <Button type="primary">提交</Button>
      </Terms>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('describe snapshot', () => {
    const component = mount(
      <Terms
        term={
          <>
            同意<a>《用户授权协议》</a>
          </>
        }
        describe
      >
        <Button type="primary">提交</Button>
      </Terms>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
