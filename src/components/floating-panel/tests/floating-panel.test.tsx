import { reduceMotion, restoreMotion } from 'antd-mobile'
import React, { forwardRef, useRef } from 'react'
import { fireEvent, mockTimedDrag, render, testA11y, waitFor } from 'testing'
import FloatingPanel, { FloatingPanelRef } from '..'
import { nearest } from '../../../utils/nearest'

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

async function mockDrag(el: Element, startY: number, endY: number) {
  fireEvent.mouseDown(el, {
    clientY: startY,
    buttons: 1,
  })
  fireEvent.mouseMove(el, {
    clientY: endY,
    buttons: 1,
  })
  fireEvent.mouseUp(el)
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
    const { getByTestId } = render(<App />)

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
    restoreMotion()
    const fn = jest.fn()
    const { getByTestId } = render(<App onHeightChange={fn} />)

    const panelEl = getByTestId('panel')

    mockDrag(panelEl, 0, -(anchors[1] + 100))
    await waitFor(() => expect(fn).toBeCalled())

    // animating: true
    expect(fn.mock.calls[0][1]).toBeTruthy()

    await waitFor(() => {
      // animating: false
      expect(fn.mock.calls[fn.mock.calls.length - 1][1]).not.toBeTruthy()
      expect(fn.mock.calls[fn.mock.calls.length - 1][0]).toBe(
        anchors[anchors.length - 1]
      )
    })

    expect(panelEl.style.transform).toBe(
      `translateY(calc(100% + (-${anchors[anchors.length - 1]}px)))`
    )
    reduceMotion()
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

    const { getByText, getByTestId } = render(<Wrap />)
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
    const { getByTestId } = render(<App handleDraggingOfContent={false} />)

    const panelEl = getByTestId('panel')
    const headEl = document.querySelectorAll(`.${classPrefix}-header`)[0]

    // content area
    mockDrag(panelEl, 0, -(anchors[0] + 20))
    expect(panelEl.style.transform).toBe(
      `translateY(calc(100% + (-${anchors[0]}px)))`
    )

    // head area
    mockDrag(headEl, 0, -(anchors[0] + 20))
    expect(panelEl.style.transform).toBe(
      `translateY(calc(100% + (-${anchors[1]}px)))`
    )
  })
})

describe('FloatingPanel inertiaFactor logic', () => {
  const possibles = anchors.map(x => -x) // [-100, -200, -400]

  test('inertiaFactor=0 ignores velocity', () => {
    expect(nearest(possibles, -120 + -1 * 1.5 * 0)).toBe(-100)
  })

  test('upward flick pushes snap toward higher anchor', () => {
    expect(nearest(possibles, -120 + -1 * 1.5 * 50)).toBe(-200)
  })

  test('downward flick pushes snap toward lower anchor', () => {
    expect(nearest(possibles, -280 + 1 * 1.5 * 100)).toBe(-100)
  })

  test('small inertiaFactor has minimal effect', () => {
    expect(nearest(possibles, -120 + -1 * 1.5 * 5)).toBe(-100)
  })

  test('large inertiaFactor can skip to farthest anchor', () => {
    expect(nearest(possibles, -120 + -1 * 1.5 * 200)).toBe(-400)
  })
})

describe('FloatingPanel inertiaFactor integration', () => {
  const App = forwardRef((props: any, ref) => (
    <FloatingPanel anchors={anchors} data-testid='panel' {...props} ref={ref}>
      {data.map(item => (
        <div key={item} style={{ height: 20 }}>
          {item}
        </div>
      ))}
    </FloatingPanel>
  ))

  test('without inertiaFactor, fast flick stays at nearest anchor', async () => {
    const { getByTestId } = render(<App inertiaFactor={0} />)
    const panelEl = getByTestId('panel')

    mockTimedDrag(panelEl, 200, 170, 16, 3)

    await waitFor(() =>
      expect(panelEl.style.transform).toBe(
        `translateY(calc(100% + (-${anchors[0]}px)))`
      )
    )
  })

  test('with inertiaFactor, fast flick snaps to higher anchor', async () => {
    const { getByTestId } = render(<App inertiaFactor={50} />)
    const panelEl = getByTestId('panel')

    mockTimedDrag(panelEl, 200, 170, 32, 3)

    await waitFor(() =>
      expect(panelEl.style.transform).toBe(
        `translateY(calc(100% + (-${anchors[1]}px)))`
      )
    )
  })

  test('with inertiaFactor, slow drag stays at nearest anchor', async () => {
    const { getByTestId } = render(<App inertiaFactor={100} />)
    const panelEl = getByTestId('panel')

    mockTimedDrag(panelEl, 200, 170, 1000, 10)

    await waitFor(() =>
      expect(panelEl.style.transform).toBe(
        `translateY(calc(100% + (-${anchors[0]}px)))`
      )
    )
  })

  test('large inertiaFactor with fast flick skips to farthest anchor', async () => {
    const { getByTestId } = render(<App inertiaFactor={300} />)
    const panelEl = getByTestId('panel')

    mockTimedDrag(panelEl, 200, 170, 16, 3)

    await waitFor(() =>
      expect(panelEl.style.transform).toBe(
        `translateY(calc(100% + (-${anchors[2]}px)))`
      )
    )
  })
})