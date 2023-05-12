import React from 'react'
import { render, testA11y, fireEvent, screen } from 'testing'
import Slider from '..'

const classPrefix = `adm-slider`

function $$(className: string) {
  return document.querySelectorAll(className)
}

function drag(element: Element, moveClientX: number) {
  fireEvent.mouseDown(element, {
    buttons: 1,
  })

  fireEvent.mouseMove(element, {
    buttons: 1,
    clientX: moveClientX,
  })

  fireEvent.mouseUp(element)
}

describe('Slider', () => {
  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      value: 100,
    })
  })

  test('a11y', async () => {
    await testA11y(<Slider />)
  })

  test('basic usage', () => {
    const { container } = render(<Slider />)
    const thumb = screen.getByRole('slider')
    drag(thumb, 20)
    expect(container).toMatchSnapshot()
  })

  test('show ticks and set step', () => {
    jest.useFakeTimers()
    render(<Slider ticks step={10} />)
    const thumb = screen.getByRole('slider')
    const track = $$(`.${classPrefix}-track`)[0]
    drag(thumb, 18)
    expect($$(`.${classPrefix}-ticks`)[0]).toBeInTheDocument()
    expect($$(`.${classPrefix}-tick`)[2]).toHaveClass(
      `${classPrefix}-tick-active`
    )

    // reset dragLockRef
    jest.runAllTimers()
    fireEvent.click(track, { clientX: 60 })
    expect($$(`.${classPrefix}-tick`)[6]).toHaveClass(
      `${classPrefix}-tick-active`
    )
    jest.useRealTimers()
  })

  test('show marks', () => {
    const marks = {
      0: 0,
      20: 20,
      40: 40,
      60: 60,
      80: 80,
      100: 100,
    }
    render(<Slider ticks marks={marks} />)
    drag(screen.getByRole('slider'), 35)
    expect($$(`.${classPrefix}-mark`)[0]).toBeInTheDocument()
    expect($$(`.${classPrefix}-mark-text`)[2]).toHaveClass(
      `${classPrefix}-mark-text-active`
    )
  })

  test('max & min', () => {
    const onAfterChange = jest.fn()
    render(
      <Slider step={100} min={0} max={1000} onAfterChange={onAfterChange} />
    )
    drag(screen.getByRole('slider'), 40)
    expect(onAfterChange).toBeCalledWith(400)
  })

  test('default value', () => {
    render(<Slider step={20} defaultValue={40} />)
    expect($$(`.${classPrefix}-fill`)[0]).toHaveStyle('width: 40%')
  })

  test('swipe and track click when disabled', () => {
    render(<Slider disabled ticks />)
    expect($$(`.${classPrefix}`)[0]).toHaveClass(`${classPrefix}-disabled`)
    const thumb = screen.getByRole('slider')
    const fill = $$(`.${classPrefix}-fill`)[0]
    const track = $$(`.${classPrefix}-track`)[0]

    drag(thumb, 20)
    expect(fill).toHaveStyle('width: 0%')

    fireEvent.click(track, { clientX: 60 })
    expect(fill).toHaveStyle('width: 0%')
  })

  test('custom icon', () => {
    const { getByText } = render(<Slider icon={<div>icon</div>} />)
    expect(getByText('icon')).toBeInTheDocument()
  })

  test('double sliders', async () => {
    jest.useFakeTimers()
    const onAfterChange = jest.fn()
    render(<Slider step={20} ticks range onAfterChange={onAfterChange} />)
    const thumb1 = screen.getAllByRole('slider')[0]
    const thumb2 = screen.getAllByRole('slider')[1]
    const track = $$(`.${classPrefix}-track`)[0]

    drag(thumb2, 80)
    drag(thumb1, 20)
    expect(onAfterChange).toHaveBeenLastCalledWith([20, 80])

    jest.runAllTimers()
    fireEvent.click(track, { clientX: 60 })
    fireEvent.click(track, { clientX: 5 })
    expect(onAfterChange).toHaveBeenLastCalledWith([0, 60])
    jest.useRealTimers()
  })

  test('show popover when swiping', () => {
    render(<Slider popover />)

    const thumb = screen.getByRole('slider')
    fireEvent.mouseDown(thumb, {
      buttons: 1,
    })
    fireEvent.mouseMove(thumb, {
      buttons: 1,
      clientX: 60,
    })

    const popover = $$('.adm-popover')[0]
    expect(popover).toBeInTheDocument()
    expect(popover).toHaveTextContent('60')
  })

  test('custom popover', () => {
    const { getByText } = render(
      <Slider popover={value => <div>popover {value}</div>} />
    )

    const thumb = screen.getByRole('slider')
    fireEvent.mouseDown(thumb, {
      buttons: 1,
    })
    fireEvent.mouseMove(thumb, {
      buttons: 1,
      clientX: 60,
    })

    expect(getByText('popover 60')).toBeInTheDocument()
  })

  test('track click will be useless when swiping', () => {
    render(<Slider />)
    const thumb = screen.getByRole('slider')
    const track = $$(`.${classPrefix}-track`)[0]
    drag(thumb, 10)
    fireEvent.click(track, { clientX: 60 })
    expect($$(`.${classPrefix}-fill`)[0]).toHaveStyle('width: 10%')
  })

  test('empty marks', () => {
    render(<Slider marks={{}} />)
    const track = $$(`.${classPrefix}-track`)[0]
    fireEvent.click(track, { clientX: 60 })
    expect($$(`.${classPrefix}-fill`)[0]).toHaveStyle('width: 60%')
  })

  test('slide to max should be work', () => {
    const onAfterChange = jest.fn()
    render(<Slider onAfterChange={onAfterChange} />)
    drag(screen.getByRole('slider'), 100)
    expect(onAfterChange).toBeCalledWith(100)
  })

  describe('step is a decimal', () => {
    beforeAll(() => {
      Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
        value: 90,
      })
    })

    test('value should be formatted', () => {
      const fn = jest.fn()
      render(<Slider step={0.2} onChange={fn} />)
      const thumb = screen.getByRole('slider')
      drag(thumb, 10)
      expect(fn).toBeCalledWith(11.2)
    })

    test('value should be formatted when it is a double sliders', () => {
      const fn = jest.fn()
      render(<Slider step={0.2} onAfterChange={fn} range />)
      const thumb1 = screen.getAllByRole('slider')[0]
      const thumb2 = screen.getAllByRole('slider')[1]
      drag(thumb2, 80)
      drag(thumb1, 20)
      expect(fn).toHaveBeenLastCalledWith([22.2, 88.8])
    })

    test('float accuracy', () => {
      const fn = jest.fn()
      render(<Slider step={1.2} onChange={fn} />)
      const thumb = screen.getByRole('slider')
      drag(thumb, 3)
      // 1.2+2.4 = 3.5999999999999996
      expect(fn).toBeCalledWith(3.6)
    })

    test('value is decimal', () => {
      const fn = jest.fn()
      render(<Slider min={1.5} max={9.5} onChange={fn} />)
      const thumb = screen.getByRole('slider')
      drag(thumb, 30)
      expect(fn).toBeCalledWith(4.5)
    })
  })
})
