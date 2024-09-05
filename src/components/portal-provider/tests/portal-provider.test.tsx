import React from 'react'
import { fireEvent, render, screen } from 'testing'
import PortalProvider, { usePortal } from '..'
import Modal from '../../modal'

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
})
