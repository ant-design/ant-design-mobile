import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Button from '../../Button'
import { ErrorPage } from '..'

describe('ErrorPage', () => {
  it('ErrorPage with src/text/subText/button snapshot', () => {
    const component = shallow(
      <ErrorPage
        src={
          'https://gw.alipayobjects.com/zos/basement_prod/df4e7c06-88db-43dd-b171-725bd1cbaa33.svg'
        }
        text={'付款没成功'}
        subText={'请重新付款'}
        data-y="111"
      >
        <Button type="ghost" capsuleSize="lg" capsule>
          返回
        </Button>
      </ErrorPage>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('ErrorPage with src/text/button snapshot', () => {
    const component = shallow(
      <ErrorPage
        src={
          'https://gw.alipayobjects.com/zos/basement_prod/df4e7c06-88db-43dd-b171-725bd1cbaa33.svg'
        }
        text={'付款没成功'}
      >
        <Button type="ghost" capsuleSize="lg" capsule>
          返回
        </Button>
      </ErrorPage>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('ErrorPage with src/text snapshot', () => {
    const component = shallow(
      <ErrorPage
        src={
          'https://gw.alipayobjects.com/zos/basement_prod/df4e7c06-88db-43dd-b171-725bd1cbaa33.svg'
        }
        text={'付款没成功'}
      />,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
