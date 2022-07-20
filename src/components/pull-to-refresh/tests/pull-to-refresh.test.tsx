import React, { useState } from 'react'
import { render, fireEvent, sleep, screen, act } from 'testing'
import PullToRefresh, { PullToRefreshProps, PullStatus } from '..'
import { List } from 'antd-mobile'

const classPrefix = `adm-pull-to-refresh`

function $$(className: string) {
  return document.querySelectorAll(className)
}

async function getNextData() {
  await sleep(1000)
  return ['A', 'B', 'C']
}

function drag(element: Element, clientY: number) {
  fireEvent.mouseDown(element, {
    buttons: 1,
  })

  fireEvent.mouseMove(element, {
    buttons: 1,
    clientY,
  })

  fireEvent.mouseUp(element)
}

describe('PullToRefresh', () => {
  const originWindowProto = Object.getPrototypeOf(window)
  const getBoundingClientRectMock = jest.spyOn(
    HTMLElement.prototype,
    'getBoundingClientRect'
  )
  beforeAll(() => {
    jest.useFakeTimers()
    // window instanceof Window should be true
    Object.setPrototypeOf(window, Window.prototype)
    getBoundingClientRectMock.mockReturnValue({
      height: 10,
    } as DOMRect)
  })

  afterAll(() => {
    jest.useRealTimers()
    Object.setPrototypeOf(window, originWindowProto)
    getBoundingClientRectMock.mockRestore()
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
    drag(content, 40)
    expect(screen.getByText('下拉刷新')).toBeInTheDocument()
  })

  test('can celease status should be correct', async () => {
    render(<App />)
    const content = $$(`.${classPrefix}-content`)[0]
    fireEvent.mouseDown(content, {
      buttons: 1,
    })

    fireEvent.mouseMove(content, {
      buttons: 1,
      clientY: 200,
    })
    expect(screen.getByText('释放立即刷新')).toBeInTheDocument()
  })

  test('loading and complete status should be correct', async () => {
    render(<App />)
    const content = $$(`.${classPrefix}-content`)[0]
    drag(content, 200)
    expect(screen.getByText('加载中...')).toBeInTheDocument()

    await act(async () => {
      jest.advanceTimersByTime(1000)
    })
    expect(screen.getByText('刷新成功')).toBeInTheDocument()
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

    fireEvent.mouseDown(content, {
      buttons: 1,
    })

    fireEvent.mouseMove(content, {
      buttons: 1,
      clientY: 100,
    })
    expect(screen.getByText('用力拉')).toBeInTheDocument()

    fireEvent.mouseMove(content, {
      buttons: 1,
      clientY: 200,
    })
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
    drag(content, 200)
    await act(async () => {
      Promise.resolve()
    })
    expect(screen.getByText('刷新成功')).toBeInTheDocument()

    drag(content, 200)
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
    drag(content, 200)
    await act(async () => {
      Promise.resolve()
    })
    expect(onRefresh).not.toBeCalled()
    window.scrollY = 0
  })

  test('refresh should not work when scroll parent scrollY > 0', async () => {
    render(<App headHeight={30} threshold={40} />)
    const content = $$(`.${classPrefix}-content`)[0]
    drag(content, 120)
    await act(async () => {
      jest.advanceTimersByTime(1000)
    })
    expect(screen.getByText('刷新成功')).toBeInTheDocument()
  })
})
