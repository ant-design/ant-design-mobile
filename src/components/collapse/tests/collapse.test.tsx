import * as React from 'react'
import { fireEvent, render, screen, testA11y, waitFor } from 'testing'
import Collapse from '../'

const classPrefix = `adm-collapse`

it('passes a11y test', async () => {
  await testA11y(<Collapse>label</Collapse>)
})

test('basic - children no render', async () => {
  render(
    <Collapse defaultActiveKey={['1']}>
      <Collapse.Panel key='1' title='第一项'>
        <div data-testid='first'>这里是第一项的内容</div>
      </Collapse.Panel>
      <Collapse.Panel key='2' title='第二项'>
        <div data-testid='second'>这里是第二项的内容</div>
      </Collapse.Panel>
      <Collapse.Panel key='3' title='第三项'>
        <div data-testid='third'>这里是第三项的内容</div>
      </Collapse.Panel>
    </Collapse>
  )
  expect(await screen.queryByTestId('first')).toBeVisible()
  expect(await screen.queryByTestId('second')).toBe(null)
  expect(await screen.queryByTestId('third')).toBe(null)

  // 点击第二项，第二项展开
  fireEvent.click(screen.getByText('第二项'))
  expect(await screen.queryByTestId('first')).toBeVisible()
  expect(await screen.queryByTestId('second')).toBeVisible()
  expect(await screen.queryByTestId('third')).toBe(null)
})

test('accordion - only one node is expanded', async () => {
  const { container } = render(
    <Collapse defaultActiveKey={'1'} accordion>
      <Collapse.Panel key='1' title='第一项'>
        <div data-testid='first'>这里是第一项的内容</div>
      </Collapse.Panel>
      <Collapse.Panel key='2' title='第二项'>
        <div data-testid='second'>这里是第二项的内容</div>
      </Collapse.Panel>
      <Collapse.Panel key='3' title='第三项'>
        <div data-testid='third'>这里是第三项的内容</div>
      </Collapse.Panel>
    </Collapse>
  )
  expect(screen.queryByTestId('first')).toBeVisible()
  expect(screen.queryByTestId('second')).toBe(null)
  expect(screen.queryByTestId('third')).toBe(null)

  // 点击第二项，第二项展开，其他闭合,通过height：0px 隐藏
  fireEvent.click(screen.getByText('第二项'))
  await waitFor(() => {
    const [first] = Array.from(
      container.getElementsByClassName(`${classPrefix}-panel-content`)
    )
    expect(first).toHaveStyle('height: 0px')
    // 未展示的组件，依旧没有渲染
    expect(screen.queryByTestId('third')).toBe(null)
  })

  // 点击第三项，第三项展开，其他闭合
  fireEvent.click(screen.getByText('第三项'))
  await waitFor(() => {
    const [first, second] = Array.from(
      container.getElementsByClassName(`${classPrefix}-panel-content`)
    )
    // 第一，第二都隐藏
    expect(first).toHaveStyle('height: 0px')
    expect(second).toHaveStyle('height: 0px')

    // 三个都有渲染，只是前两个隐藏了
    expect(screen.queryByTestId('first')).toBeVisible()
    expect(screen.queryByTestId('second')).toBeVisible()
    expect(screen.queryByTestId('third')).toBeVisible()
  })
})

test('disabled', async () => {
  render(
    <Collapse>
      <Collapse.Panel key='1' title='第一项'>
        <div data-testid='first'>这里是第一项的内容</div>
      </Collapse.Panel>
      <Collapse.Panel key='2' title='第二项' disabled>
        <div data-testid='second'>这里是第二项的内容</div>
      </Collapse.Panel>
    </Collapse>
  )
  // 点击第一项，第一项展开
  fireEvent.click(screen.getByText('第一项'))
  expect(screen.queryByTestId('first')).toBeVisible()
  expect(screen.queryByTestId('second')).toBe(null)

  // 点击第二项，没有反应，因为 disabled 禁用
  fireEvent.click(screen.getByText('第二项'))
  expect(screen.queryByTestId('first')).toBeVisible()
  expect(screen.queryByTestId('second')).toBe(null)
})

describe('arrow', () => {
  it('arrow (deprecated) of collapse', async () => {
    render(
      <Collapse arrow='foobar'>
        <Collapse.Panel key='1' title='第一项'>
          <div data-testid='first'>这里是第一项的内容</div>
        </Collapse.Panel>
      </Collapse>
    )
    expect(screen.getByText('foobar')).toBeVisible()
  })

  it('arrow (deprecated) of panel', async () => {
    render(
      <Collapse>
        <Collapse.Panel key='1' title='第一项' arrow='foobar'>
          <div data-testid='first'>这里是第一项的内容</div>
        </Collapse.Panel>
      </Collapse>
    )
    expect(screen.getByText('foobar')).toBeVisible()
  })

  it('arrow (deprecated) of both collapse and pannel', async () => {
    render(
      <Collapse arrow='foo'>
        <Collapse.Panel key='1' title='第一项' arrow='bar'>
          <div data-testid='first'>这里是第一项的内容</div>
        </Collapse.Panel>
      </Collapse>
    )
    expect(screen.getByText('bar')).toBeVisible()
  })

  it('both arrow (deprecated) and arrowIcon of collapse', async () => {
    render(
      <Collapse arrow='foo' arrowIcon='bar'>
        <Collapse.Panel key='1' title='第一项'>
          <div data-testid='first'>这里是第一项的内容</div>
        </Collapse.Panel>
      </Collapse>
    )
    expect(screen.getByText('bar')).toBeVisible()
  })

  it('both (deprecated) arrow and arrowIcon of pannel', async () => {
    render(
      <Collapse>
        <Collapse.Panel key='1' title='第一项' arrow='foo' arrowIcon='bar'>
          <div data-testid='first'>这里是第一项的内容</div>
        </Collapse.Panel>
      </Collapse>
    )
    expect(screen.getByText('bar')).toBeVisible()
  })

  it('arrow (deprecated) of collapse and arrowIcon of panel', async () => {
    render(
      <Collapse arrow='foo'>
        <Collapse.Panel key='1' title='第一项' arrowIcon='bar'>
          <div data-testid='first'>这里是第一项的内容</div>
        </Collapse.Panel>
      </Collapse>
    )
    expect(screen.getByText('bar')).toBeVisible()
  })

  it('arrowIcon of collapse and arrow (deprecated) of panel', async () => {
    render(
      <Collapse arrowIcon='foo'>
        <Collapse.Panel key='1' title='第一项' arrow='bar'>
          <div data-testid='first'>这里是第一项的内容</div>
        </Collapse.Panel>
      </Collapse>
    )
    expect(screen.getByText('bar')).toBeVisible()
  })
})
