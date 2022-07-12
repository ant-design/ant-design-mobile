import React, { useState } from 'react'
import { render, fireEvent, sleep, screen, act } from 'testing'
import InfiniteScroll, { InfiniteScrollProps } from '..'
import { List } from 'antd-mobile'

let count = 0
const time = 1000
export async function mockRequest() {
  if (count >= 2) {
    return []
  }
  await sleep(time)
  count++
  return ['A', 'B', 'C']
}

describe('InfiniteScroll', () => {
  const getBoundingClientRectMock = jest.spyOn(
    HTMLElement.prototype,
    'getBoundingClientRect'
  )

  beforeEach(() => {
    count = 0

    getBoundingClientRectMock.mockReturnValue({
      top: 1000,
    } as DOMRect)
  })

  beforeAll(() => {
    window.innerHeight = 667

    Object.defineProperty(HTMLElement.prototype, 'offsetParent', {
      value: {},
    })

    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  const App = (props?: Partial<InfiniteScrollProps>) => {
    const [data, setData] = useState<string[]>([])
    const [hasMore, setHasMore] = useState(true)
    async function loadMore() {
      const append = await mockRequest()
      setData(val => [...val, ...append])
      setHasMore(append.length > 0)
    }

    return (
      <>
        <List>
          {data.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
        <InfiniteScroll loadMore={loadMore} hasMore={hasMore} {...props}>
          {props?.children}
        </InfiniteScroll>
      </>
    )
  }

  test('basic usage', async () => {
    render(<App />)

    // mock scroll
    getBoundingClientRectMock.mockReturnValue({
      top: 800,
    } as DOMRect)
    fireEvent.scroll(window)
    // loading
    screen.findByText('加载中')

    await act(async () => {
      jest.advanceTimersByTime(time)
    })
    await act(async () => {
      jest.advanceTimersByTime(time)
    })
    await act(async () => {
      jest.advanceTimersByTime(time)
    })

    // no more
    expect(await screen.findByText('没有更多了')).toBeInTheDocument()
    expect(document.querySelectorAll('.adm-list-item').length).toBe(count * 3)
  })

  test('customized content', async () => {
    render(
      <App>
        {hasMore => (hasMore ? <span>Loading</span> : <span>Baseline</span>)}
      </App>
    )

    getBoundingClientRectMock.mockReturnValue({
      top: 800,
    } as DOMRect)
    fireEvent.scroll(window)
    screen.findByText('Loading')

    await act(async () => {
      jest.advanceTimersByTime(time)
    })
    await act(async () => {
      jest.advanceTimersByTime(time)
    })
    await act(async () => {
      jest.advanceTimersByTime(time)
    })

    expect(await screen.findByText('Baseline')).toBeInTheDocument()
  })
})
