import React, { useState } from 'react'
import { act, fireEvent, render, testA11y, waitFor } from 'testing'
import Mask from '..'

const classPrefix = `adm-mask`

const opacityRecord = {
  default: 0.55,
  thin: 0.35,
  thick: 0.75,
}

function setVisibilityState(state: 'visible' | 'hidden') {
  Object.defineProperty(document, 'visibilityState', {
    value: state,
    writable: true,
    configurable: true,
  })
}

describe('Mask', () => {
  const originalVisibilityState = Object.getOwnPropertyDescriptor(
    document,
    'visibilityState'
  )

  afterEach(() => {
    if (originalVisibilityState) {
      Object.defineProperty(
        document,
        'visibilityState',
        originalVisibilityState
      )
    } else {
      delete (document as any).visibilityState
    }
  })

  test('a11y', async () => {
    await testA11y(<Mask visible />)
  })

  test('basic usage', async () => {
    const afterShow = jest.fn()

    const App = () => {
      const [visible, setVisible] = useState(false)
      return (
        <>
          <button onClick={() => setVisible(true)}>show</button>
          <Mask
            visible={visible}
            onMaskClick={() => {
              setVisible(false)
            }}
            afterShow={afterShow}
            data-testid='mask'
          />
        </>
      )
    }

    const { getByText, getByTestId } = render(<App />)

    fireEvent.click(getByText('show'))
    await waitFor(() => {
      expect(getByTestId('mask')).toBeVisible()
      expect(afterShow).toBeCalled()
    })

    fireEvent.click(
      getByTestId('mask').querySelectorAll(`.${classPrefix}-aria-button`)[0]
    )
    await waitFor(() => expect(getByTestId('mask')).not.toBeVisible())
  })

  test('renders with opacity', async () => {
    const { getByTestId } = render(
      <>
        <Mask visible opacity='thick' data-testid='thick' />
        <Mask visible opacity={0.8} data-testid='1' />
      </>
    )

    expect(getByTestId('thick').style.background).toEqual(
      `rgba(0, 0, 0, ${opacityRecord['thick']})`
    )
    expect(getByTestId('1').style.background).toEqual(`rgba(0, 0, 0, 0.8)`)
  })

  test('renders with white color', async () => {
    const { getByTestId } = render(
      <Mask visible color='white' data-testid='mask' />
    )

    expect(getByTestId('mask').style.background).toEqual(
      `rgba(255, 255, 255, ${opacityRecord['default']})`
    )
  })

  test('renders with custom color', () => {
    const { getByTestId } = render(
      <Mask visible color='rgba(125, 125, 125, 0.5)' data-testid='mask' />
    )

    expect(getByTestId('mask').style.background).toEqual(
      `rgba(125, 125, 125, 0.5)`
    )
  })

  test('afterClose should be called when close', async () => {
    const afterClose = jest.fn()

    const App = () => {
      const [visible, setVisible] = useState(true)
      return (
        <Mask
          visible={visible}
          onMaskClick={() => {
            setVisible(false)
          }}
          afterClose={afterClose}
          data-testid='mask'
        />
      )
    }

    const { getByTestId } = render(<App />)

    fireEvent.click(
      getByTestId('mask').querySelectorAll(`.${classPrefix}-aria-button`)[0]
    )

    await waitFor(() => expect(afterClose).toBeCalled())
  })

  test('should finish closing after the hidden page becomes visible', () => {
    const afterClose = jest.fn()
    const { getByTestId, queryByTestId, rerender } = render(
      <Mask visible destroyOnClose afterClose={afterClose} data-testid='mask' />
    )

    setVisibilityState('hidden')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    rerender(
      <Mask
        visible={false}
        destroyOnClose
        afterClose={afterClose}
        data-testid='mask'
      />
    )

    expect(afterClose).not.toHaveBeenCalled()
    expect(getByTestId('mask')).toBeInTheDocument()

    setVisibilityState('visible')
    act(() => {
      document.dispatchEvent(new Event('visibilitychange'))
    })

    expect(afterClose).toHaveBeenCalledTimes(1)
    expect(queryByTestId('mask')).not.toBeInTheDocument()
  })
})
