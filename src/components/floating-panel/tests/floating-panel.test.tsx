import React, { useRef, forwardRef } from 'react'
import {
  render,
  testA11y,
  fireEvent,
  waitFor,
  createEvent,
  sleep,
} from 'testing'
import FloatingPanel, { FloatingPanelRef } from '..'
import { patchCreateEvent } from '../../../tests/gesture/utils'

const classPrefix = `adm-floating-panel`

const anchors = [100, 200, 400]

const data = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
]

patchCreateEvent(createEvent)

async function mockDrag(el: Element, startY: number, endY: number) {
  fireEvent.pointerDown(el, {
    pointerId: 1,
    clientX: 0,
    clientY: startY,
    buttons: 1,
  })
  fireEvent.pointerMove(el, {
    pointerId: 1,
    clientX: 10,
    clientY: endY,
    buttons: 1,
  })
  fireEvent.pointerUp(el, { pointerId: 1 })
}

describe('FloatingPanel', () => {
  const App = forwardRef((props: any, ref) => (
    <FloatingPanel anchors={anchors} data-testid='panel' {...props} ref={ref}>
      {data.map(item => (
        <div key={item} style={{ height: 20 }}>
          {item}
        </div>
      ))}
    </FloatingPanel>
  ))

  test('a11y', async () => {
    await testA11y(<App />)
  })

  test('basic usage', async () => {
    const { getByTestId } = await render(<App />)

    const panelEl = getByTestId('panel')

    expect(panelEl.style.transform).toBe(
      `translateY(calc(100% + (-${anchors[0]}px)))`
    )

    mockDrag(panelEl, 0, -(anchors[0] + 20))
    await waitFor(() =>
      expect(panelEl.style.transform).toBe(
        `translateY(calc(100% + (-${anchors[1]}px)))`
      )
    )

    mockDrag(panelEl, 0, -(anchors[1] + 100))
    await waitFor(() =>
      expect(panelEl.style.transform).toBe(
        `translateY(calc(100% + (-${anchors[anchors.length - 1]}px)))`
      )
    )
  })

  test('height change', async () => {
    const fn = jest.fn()
    const { getByTestId } = await render(<App onHeightChange={fn} />)

    const panelEl = getByTestId('panel')

    mockDrag(panelEl, 0, -(anchors[1] + 100))
    await waitFor(() => expect(fn).toBeCalled())

    // animating: true
    expect(fn.mock.calls[0][1]).toBeTruthy()

    await waitFor(() =>
      expect(panelEl.style.transform).toBe(
        `translateY(calc(100% + (-${anchors[anchors.length - 1]}px)))`
      )
    )

    // animating: false
    expect(fn.mock.calls[fn.mock.calls.length - 1][1]).not.toBeTruthy()
    expect(fn.mock.calls[fn.mock.calls.length - 1][0]).toBe(
      anchors[anchors.length - 1]
    )
  })

  test('set height in an imperative way', async () => {
    const Wrap = () => {
      const ref = useRef<FloatingPanelRef>(null)
      return (
        <>
          <App ref={ref} />
          <button onClick={() => ref.current?.setHeight(120)}>btn</button>
          <button
            onClick={() => ref.current?.setHeight(320, { immediate: true })}
          >
            btn-immediate
          </button>
        </>
      )
    }

    const { getByText, getByTestId } = await render(<Wrap />)
    const panelEl = getByTestId('panel')

    getByText('btn').click()
    await waitFor(() =>
      expect(panelEl.style.transform).toBe(`translateY(calc(100% + (-120px)))`)
    )

    getByText('btn-immediate').click()
    await waitFor(() =>
      expect(panelEl.style.transform).toBe(`translateY(calc(100% + (-320px)))`)
    )
  })

  test('only the head area can be dragged', async () => {
    const { getByTestId } = await render(
      <App handleDraggingOfContent={false} />
    )

    const panelEl = getByTestId('panel')
    const headEl = document.querySelectorAll(`.${classPrefix}-header`)[0]

    // content area
    mockDrag(panelEl, 0, -(anchors[0] + 20))
    await sleep(500)
    expect(panelEl.style.transform).toBe(
      `translateY(calc(100% + (-${anchors[0]}px)))`
    )

    // head area
    mockDrag(headEl, 0, -(anchors[0] + 20))
    await sleep(500)
    await waitFor(() =>
      expect(panelEl.style.transform).toBe(
        `translateY(calc(100% + (-${anchors[1]}px)))`
      )
    )
  })
})
