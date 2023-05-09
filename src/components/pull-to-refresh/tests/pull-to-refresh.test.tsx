import React, { useState } from 'react'
import { render, fireEvent, sleep, screen, act } from 'testing'
import PullToRefresh, { PullToRefreshProps, PullStatus } from '..'
import { List } from 'antd-mobile'

const classPrefix = `adm-pull-to-refresh`

function $$(className: string) {
  return document.querySelectorAll(className)
}

function mockRect(el: Element, value: any) {
  jest.spyOn(el, 'getBoundingClientRect').mockReturnValue(value)
}

function mockHeadContentRect(height: number = 55) {
  const headContent = $$(`.${classPrefix}-head-content`)[0]
  mockRect(headContent, {
    height: height,
  })
}

function mockElementRect() {
  const element = $$(`.${classPrefix}`)[0]
  mockRect(element, {
    height: 500,
  })
}

async function getNextData() {
  await sleep(1000)
  return ['A', 'B', 'C']
}

function drag(element: Element, clientY: number, release?: boolean) {
  fireEvent.mouseDown(element, {
    buttons: 1,
  })

  fireEvent.mouseMove(element, {
    buttons: 1,
    clientY,
  })

  release && fireEvent.mouseUp(element)
}

describe('PullToRefresh', () => {
  const originWindowProto = Object.getPrototypeOf(window)
  beforeAll(() => {
    jest.useFakeTimers()
    // window instanceof Window should be true
    Object.setPrototypeOf(window, Window.prototype)
  })

  afterAll(() => {
    jest.useRealTimers()
    Object.setPrototypeOf(window, originWindowProto)
  })

  const App = (props: Partial<PullToRefreshProps>) => {
    const [data, setData] = useState(['A', 'B', 'C'])
    return (
      <PullToRefresh
        onRefresh={async () => {
          const ret = await getNextData()
          setData([...ret, ...data])
        }}
        {...props}
      >
        <List>
          {data.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      </PullToRefresh>
    )
  }

  test('pulling status should be correct', () => {
    render(<App />)
    const content = $$(`.${classPrefix}-content`)[0]
    mockElementRect()
    mockHeadContentRect()

    drag(content, 40)
    expect(screen.getByText('下拉刷新')).toBeInTheDocument()
  })

  test('can celease status should be correct', async () => {
    render(<App />)
    const content = $$(`.${classPrefix}-content`)[0]
    mockElementRect()
    mockHeadContentRect()

    // should be '释放立即刷新' when >180 and should be '下拉刷新' when <=180
    drag(content, 200)
    expect(screen.getByText('释放立即刷新')).toBeInTheDocument()
  })

  test('loading, complete and reset to pulling status should be correct', async () => {
    render(<App />)
    const content = $$(`.${classPrefix}-content`)[0]
    mockElementRect()
    mockHeadContentRect()

    drag(content, 200, true)
    expect(screen.getByText('加载中...')).toBeInTheDocument()

    await act(async () => {
      jest.advanceTimersByTime(1000)
    })
    expect(screen.getByText('刷新成功')).toBeInTheDocument()

    await act(async () => {
      // advance completeDelay (default 500ms)
      jest.advanceTimersByTime(500)
    })
    expect(screen.getByText('下拉刷新')).toBeInTheDocument()
  })

  test('custom text should be correct', async () => {
    jest.useFakeTimers()
    const statusRecord: Record<PullStatus, string> = {
      pulling: '用力拉',
      canRelease: '松开吧',
      refreshing: '玩命加载中...',
      complete: '好啦',
    }

    render(<App renderText={status => statusRecord[status]} />)
    const content = $$(`.${classPrefix}-content`)[0]
    mockElementRect()
    mockHeadContentRect()

    drag(content, 100)
    expect(screen.getByText('用力拉')).toBeInTheDocument()

    drag(content, 200)
    expect(screen.getByText('松开吧')).toBeInTheDocument()

    fireEvent.mouseUp(content)
    expect(screen.getByText('玩命加载中...')).toBeInTheDocument()

    await act(async () => {
      jest.advanceTimersByTime(1000)
    })
    expect(screen.getByText('好啦')).toBeInTheDocument()
  })

  test('refresh should not work when status is complete', async () => {
    const onRefresh = jest.fn()
    render(<App onRefresh={onRefresh} />)
    const content = $$(`.${classPrefix}-content`)[0]
    mockElementRect()
    mockHeadContentRect()

    drag(content, 200, true)
    await act(async () => {
      Promise.resolve()
    })
    expect(screen.getByText('刷新成功')).toBeInTheDocument()

    drag(content, 200, true)
    await act(async () => {
      Promise.resolve()
    })
    expect(screen.getByText('刷新成功')).toBeInTheDocument()
    expect(onRefresh).toBeCalledTimes(1)
  })

  test('refresh should not work when scroll parent scrollY > 0', async () => {
    window.scrollY = 10
    const onRefresh = jest.fn()
    render(<App onRefresh={onRefresh} />)
    const content = $$(`.${classPrefix}-content`)[0]
    mockElementRect()
    mockHeadContentRect()

    drag(content, 200, true)
    await act(async () => {
      Promise.resolve()
    })
    expect(onRefresh).not.toBeCalled()
    window.scrollY = 0
  })

  test('custom height should be correct', async () => {
    render(<App style={{ '--head-content-padding': '30px' }} />)
    const content = $$(`.${classPrefix}-content`)[0]
    mockElementRect()
    mockHeadContentRect(55 + 20)

    drag(content, 40)
    expect(screen.getByText('下拉刷新')).toBeInTheDocument()

    // should be '释放立即刷新' when >224 and should be '下拉刷新' when <=224
    drag(content, 225)
    expect(screen.getByText('释放立即刷新')).toBeInTheDocument()

    fireEvent.mouseUp(content)
    expect(screen.getByText('加载中...')).toBeInTheDocument()

    await act(async () => {
      jest.advanceTimersByTime(1000)
    })
    expect(screen.getByText('刷新成功')).toBeInTheDocument()
  })
})
