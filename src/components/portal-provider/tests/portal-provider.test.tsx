/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useRef } from 'react'
import { fireEvent, render, screen, waitFor } from 'testing'
import PortalProvider, { usePortal } from '..'
import Modal from '../../modal'
import Popup from '../../popup'

function $$(className: string) {
  return document.querySelectorAll(className)
}

describe('PortalProvider', () => {
  const UsePortalApp: React.FC<{ element: React.ReactNode }> = ({
    element,
  }) => {
    return <PortalProvider>{element}</PortalProvider>
  }

  test('usePortal should only has `renderModalInPortal`', () => {
    let portal: ReturnType<typeof usePortal>

    const Demo = () => {
      portal = usePortal()
      return null
    }
    render(
      <PortalProvider>
        <Demo />
      </PortalProvider>
    )

    expect(Object.keys(portal!)).toEqual(['renderModalInPortal'])
  })

  test('`renderModalInPortal` should auto add `visible` prop', () => {
    const Demo = () => {
      const { renderModalInPortal } = usePortal()
      return (
        <button
          onClick={() => {
            renderModalInPortal(<Modal />)
          }}
        >
          btn
        </button>
      )
    }
    render(<UsePortalApp element={<Demo />} />)
    fireEvent.click(screen.getByRole('button', { name: 'btn' }))
    expect($$(`.adm-modal`)).toHaveLength(1)
  })

  test('element render by `renderModalInPortal` can be replaced', () => {
    const Demo = () => {
      const { renderModalInPortal } = usePortal()
      const ref = useRef<ReturnType<typeof renderModalInPortal>>()

      const actions = [
        {
          key: 'replace',
          text: 'replace',
          onClick: () => {
            ref.current?.replace?.(<Popup>Popup content</Popup>)
          },
        },
      ]

      return (
        <button
          onClick={() => {
            ref.current = renderModalInPortal(
              <Modal content='Modal content' actions={actions} />
            )
          }}
        >
          btn
        </button>
      )
    }
    render(<UsePortalApp element={<Demo />} />)
    fireEvent.click(screen.getByRole('button', { name: 'btn' }))
    expect($$(`.adm-modal`)).toHaveLength(1)
    fireEvent.click(screen.getByRole('button', { name: 'replace' }))
    expect($$(`.adm-modal`)).toHaveLength(0)
    expect($$(`.adm-popup`)).toHaveLength(1)
  })

  test('status isRendered `renderModalInPortal` should be `true` when element rendered', async () => {
    const afterShow = jest.fn()
    let isRendered = false
    const Demo = () => {
      const { renderModalInPortal } = usePortal()
      const ref = useRef<ReturnType<typeof renderModalInPortal>>()

      return (
        <button
          onClick={() => {
            ref.current = renderModalInPortal(
              <Modal
                afterShow={() => {
                  isRendered = Boolean(ref?.current?.isRendered?.())
                  afterShow()
                }}
              />
            )
          }}
        >
          btn
        </button>
      )
    }
    render(<UsePortalApp element={<Demo />} />)
    fireEvent.click(screen.getByRole('button', { name: 'btn' }))
    await waitFor(() => expect(afterShow).toBeCalled())
    expect(isRendered).toEqual(true)
  })

  test('call `usePortal` does not wrapped by `PortalProvider` should throw error', async () => {
    const Demo = () => {
      usePortal()
      return null
    }

    expect(() => render(<Demo />)).toThrow(
      'usePortal must be used within a PortalProvider'
    )
  })
})
