import React, { useState } from 'react'
import {
  render,
  fireEvent,
  sleep,
  screen,
  waitForElementToBeRemoved,
} from 'testing'
import InfiniteScroll from '..'
import { List } from 'antd-mobile'

let count = 0
export async function mockRequest() {
  if (count >= 2) {
    return []
  }
  await sleep(100)
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
  })

  const InfiniteScrollContent = ({ hasMore }: { hasMore?: boolean }) => {
    return <>{hasMore ? <span>Loading</span> : <span>Baseline</span>}</>
  }

  const App = ({ content }: { content?: boolean }) => {
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
        <InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
          {content ? <InfiniteScrollContent hasMore={hasMore} /> : null}
        </InfiniteScroll>
      </>
    )
  }

  test('basic usage', async () => {
    const { getByText } = await render(<App />)

    // mock scroll
    getBoundingClientRectMock.mockReturnValue({
      top: 800,
    } as DOMRect)

    fireEvent.scroll(window)

    // loading
    await screen.findByText('加载中')

    // no more
    await waitForElementToBeRemoved(getByText('加载中'))
    await screen.findByText('没有更多了')
    expect(document.querySelectorAll('.adm-list-item').length).toBe(count * 3)
  })

  test('customized content', async () => {
    await render(<App content={true} />)

    // mock scroll
    getBoundingClientRectMock.mockReturnValue({
      top: 800,
    } as DOMRect)

    fireEvent.scroll(window)

    // loading
    await screen.findByText('Loading')

    // no more
    await screen.findByText('Baseline')
  })
})
