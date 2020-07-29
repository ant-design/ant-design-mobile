import * as React from 'react'
import { act } from 'react-dom/test-utils'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Loading } from '..'

describe('Loading', () => {
  it('snapshot', () => {
    const component = shallow(<Loading show={true}>内容区域 </Loading>)
    expect(toJSON(component)).toMatchSnapshot()
  })

  it('snapshot: show=true', () => {
    const component = mount(<Loading show={true}>内容区域 </Loading>)
    expect(toJSON(component)).toMatchSnapshot()
    expect(component.find('.amd-loading-spin').exists()).toBeTruthy()
  })

  it('snapshot: show=true text="加载中"', () => {
    const component = mount(
      <Loading show={true} text={'加载中'}>
        内容区域{' '}
      </Loading>,
    )
    expect(toJSON(component)).toMatchSnapshot()
    expect(component.find('.amd-loading-spin').exists()).toBeTruthy()
    expect(component.find('.amd-loading-text').exists()).toBeTruthy()
    expect(component.find('.amd-loading-text').text()).toEqual('加载中')
  })

  it('snapshot: show=true text="加载中" delay="100"', async () => {
    const component = mount(<Loading show delay={100} />)
    await act(async () => {
      expect(component.find('.amd-loading-spin').exists()).not.toBeTruthy()
      await new Promise(resolve => setTimeout(resolve, 500))
      component.update()
      expect(component.find('.amd-loading-spin').exists()).toBeTruthy()
      expect(toJSON(component)).toMatchSnapshot()
    })
  })

  it('snapshot: show=false', () => {
    const component = mount(
      <Loading show={false} text={'加载中'} delay={1000}>
        内容区域{' '}
      </Loading>,
    )
    expect(toJSON(component)).toMatchSnapshot()
    expect(component.find('.amd-loading-spin').exists()).not.toBeTruthy()
    expect(component.find('.amd-loading-text').exists()).not.toBeTruthy()
  })

  it('snapshot: show=true delay=100', async () => {
    const component = mount(<Loading show delay={100} />)
    await act(async () => {
      expect(component.find('.amd-loading-spin').exists()).not.toBeTruthy()
      await new Promise(resolve => setTimeout(resolve, 10))
      component.setProps({ show: false })
      await new Promise(resolve => setTimeout(resolve, 200))
      component.update()
      expect(component.find('.amd-loading-spin').exists()).not.toBeTruthy()
      expect(toJSON(component)).toMatchSnapshot()
    })
  })
})
