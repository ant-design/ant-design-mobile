import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Button from '../../Button'
import { ErrorBlock } from '..'

describe('ErrorBlock', () => {
  it('ErrorBlock with error/button/title snapshot', () => {
    const component = shallow(
      <ErrorBlock
        title="antd-mobile"
        error={{
          src:
            'https://gw.alipayobjects.com/mdn/rms_997765/afts/img/A*x1LaT6Pn5MwAAAAAAAAAAABkARQnAQ',
          text: '请稍等哦，马上出来',
        }}
        data-y="111"
      >
        <Button type="ghost" capsuleSize="lg" capsule>
          胶囊按钮
        </Button>

        <Button type="ghost" capsuleSize="lg" capsule>
          胶囊按钮
        </Button>
      </ErrorBlock>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('ErrorBlock with error/button snapshot', () => {
    const component = shallow(
      <ErrorBlock
        error={{
          src:
            'https://gw.alipayobjects.com/mdn/rms_997765/afts/img/A*x1LaT6Pn5MwAAAAAAAAAAABkARQnAQ',
          text: '请稍等哦，马上出来',
        }}
      >
        <Button type="ghost" capsuleSize="lg" capsule>
          胶囊按钮
        </Button>
      </ErrorBlock>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('ErrorBlock with error snapshot', () => {
    const component = shallow(
      <ErrorBlock
        error={{
          src:
            'https://gw.alipayobjects.com/mdn/rms_997765/afts/img/A*bp-yRoHpmj4AAAAAAAAAAABkARQnAQ',
          text: '页面遇到一些小问题',
        }}
      />,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
