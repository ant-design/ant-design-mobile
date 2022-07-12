import React, { useRef } from 'react'
import { render, testA11y, fireEvent } from 'testing'
import IndexBar, { IndexBarRef } from '..'
import { List } from 'antd-mobile'

const classPrefix = `adm-index-bar`

const charCodeOfA = 'A'.charCodeAt(0)
const groups = Array(26)
  .fill('')
  .map((_, i) => ({
    title: String.fromCharCode(charCodeOfA + i),
    items: Array(3).fill(`item ${String.fromCharCode(charCodeOfA + i)}`),
  }))

function mockPxTester(px: number) {
  const tester = document.querySelectorAll('.adm-px-tester')

  tester.forEach(
    item =>
      (item.getBoundingClientRect = jest.fn(
        () =>
          ({
            height: px,
          } as DOMRect)
      ))
  )
}

describe('IndexBar', () => {
  const App = () => (
    <IndexBar>
      {groups.map(group => {
        const { title, items } = group
        return (
          <IndexBar.Panel
            index={title}
            title={`标题${title}`}
            key={`标题${title}`}
          >
            <List>
              {items.map((item, index) => (
                <List.Item key={index}>{item}</List.Item>
              ))}
            </List>
          </IndexBar.Panel>
        )
      })}
    </IndexBar>
  )

  test('a11y', async () => {
    await testA11y(<App />)
  })

  test('mouse event', async () => {
    render(<App />)

    const indexEls = document.querySelectorAll(`.${classPrefix}-sidebar-row`)

    // B -> D
    fireEvent.mouseDown(indexEls[1])
    const bubbleEl = document.querySelectorAll(
      `.${classPrefix}-sidebar-bubble`
    )[0]
    expect(bubbleEl).toBeInTheDocument()
    expect(indexEls[1].lastChild).toHaveClass(
      `${classPrefix}-sidebar-item-active`
    )

    fireEvent.mouseEnter(indexEls[3])
    expect(indexEls[3].lastChild).toHaveClass(
      `${classPrefix}-sidebar-item-active`
    )

    fireEvent.mouseUp(indexEls[3])
    expect(bubbleEl).not.toBeInTheDocument()
  })

  test('set active index when scroll', async () => {
    mockPxTester(35)
    const { getByText } = render(<App />)

    const bodyEl = document.querySelectorAll(`.${classPrefix}-body`)[0]
    const elements = document.querySelectorAll(`.${classPrefix}-anchor`)

    // mock
    Object.defineProperty(bodyEl, 'scrollTop', {
      value: 400,
    })

    elements.forEach((panel, i) =>
      Object.defineProperties(panel, {
        clientHeight: {
          value: 188,
        },
        offsetTop: {
          value: i * 188,
        },
      })
    )

    fireEvent.scroll(bodyEl)

    expect(getByText('C').parentElement).toHaveClass(
      `${classPrefix}-sidebar-item-active`
    )
  })

  test('unable to sticky', async () => {
    const { getByTestId } = render(
      <IndexBar sticky={false} data-testid='indexbar'>
        <IndexBar.Panel index='A' key='A'>
          A
        </IndexBar.Panel>
        <IndexBar.Panel index='B' key='B'>
          B
        </IndexBar.Panel>
      </IndexBar>
    )

    expect(getByTestId('indexbar')).not.toHaveClass(`${classPrefix}-sticky`)
  })

  test('touch event', async () => {
    render(<App />)

    const indexEls = document.querySelectorAll(`.${classPrefix}-sidebar-row`)

    // mock target
    document.elementFromPoint = jest.fn().mockReturnValueOnce(indexEls[1])

    fireEvent.touchStart(indexEls[1], { touches: [{ clientX: 0, clientY: 0 }] })
    fireEvent.touchMove(indexEls[1], { touches: [{ clientX: 0, clientY: 10 }] })
    fireEvent.touchEnd(indexEls[1], { touches: [{ clientX: 0, clientY: 20 }] })

    expect(indexEls[1].lastChild).toHaveClass(
      `${classPrefix}-sidebar-item-active`
    )
  })

  test('the children must be react valid element', async () => {
    render(<IndexBar>{1}</IndexBar>)
    expect(
      document.querySelectorAll(`.${classPrefix}-body`)[0]
    ).toBeEmptyDOMElement()
  })

  test('warning when the children id not `IndexBar.Panel` components`', async () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementationOnce(() => {})

    render(
      <IndexBar>
        <div />
      </IndexBar>
    )

    expect(warnSpy).toHaveBeenCalledWith(
      '[antd-mobile: IndexBar] The children of `IndexBar` must be `IndexBar.Panel` components.'
    )
  })

  test('ref.scrollTo', async () => {
    const App = () => {
      const ref = useRef<IndexBarRef>(null)
      return (
        <>
          <IndexBar ref={ref} data-testid='indexbar'>
            <IndexBar.Panel index='A' title='Title A'>
              PanelA
            </IndexBar.Panel>
            <IndexBar.Panel index='B' title='Title B'>
              Panel B
            </IndexBar.Panel>
          </IndexBar>
          <button onClick={() => ref.current?.scrollTo('B')}>btn</button>
        </>
      )
    }
    const { getByText } = render(<App />)
    fireEvent.click(getByText('btn'))
    expect(getByText('B').parentElement).toHaveClass(
      `${classPrefix}-sidebar-item-active`
    )
  })

  test('touch move when not interact', async () => {
    render(<App />)

    const indexEls = document.querySelectorAll(`.${classPrefix}-sidebar-row`)
    fireEvent.touchMove(indexEls[1], { touches: [{ clientX: 0, clientY: 10 }] })
    expect(indexEls[0].lastChild).toHaveClass(
      `${classPrefix}-sidebar-item-active`
    )
  })

  test('touch move when not get element from point', async () => {
    render(<App />)

    const indexEls = document.querySelectorAll(`.${classPrefix}-sidebar-row`)
    // mock target
    document.elementFromPoint = jest.fn().mockReturnValueOnce(null)
    fireEvent.touchStart(indexEls[0], { touches: [{ clientX: 0, clientY: 0 }] })
    fireEvent.touchMove(indexEls[1], { touches: [{ clientX: 0, clientY: 10 }] })

    expect(indexEls[0].lastChild).toHaveClass(
      `${classPrefix}-sidebar-item-active`
    )
  })
})

describe('IndexBar.Panel', () => {
  test('`brief` prop', async () => {
    render(
      <IndexBar>
        {groups.map(group => {
          const { title, items } = group
          return (
            <IndexBar.Panel index={title} brief={`${title} brief`} key={title}>
              <List>
                {items.map((item, index) => (
                  <List.Item key={index}>{item}</List.Item>
                ))}
              </List>
            </IndexBar.Panel>
          )
        })}
      </IndexBar>
    )

    const indexEls = document.querySelectorAll(`.${classPrefix}-sidebar-row`)
    expect(indexEls[0]).toHaveTextContent('A brief')
  })
})
