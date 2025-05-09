import { Dialog, unstableSetRender } from 'antd-mobile'
import * as ReactDOM from 'react-dom'
import { screen, waitFakeTimer19 } from 'testing'

// TODO: Remove this. Mock for React 19
jest.mock('react-dom', () => {
  const realReactDOM = jest.requireActual('react-dom')

  if (realReactDOM.version.startsWith('19')) {
    const realReactDOMClient = jest.requireActual('react-dom/client')
    realReactDOM.createRoot = realReactDOMClient.createRoot
  }

  return realReactDOM
})

describe('unstable', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('unstableSetRender', async () => {
    if (ReactDOM.version.startsWith('19')) {
      const mock = jest.fn()
      unstableSetRender((node, container) => {
        const root = (ReactDOM as any).createRoot(container)
        mock()
        root.render(node)
        return async () => {
          root.unmount()
        }
      })

      Dialog.show({ content: 'unstableSetRender' })

      await waitFakeTimer19()

      expect(mock).toBeCalledTimes(1)
      expect(screen.getByRole('dialog')).toBeTruthy()
    }
  })

  it('unstableSetRender without param', async () => {
    const currentRender = unstableSetRender()
    expect(currentRender).toBeInstanceOf(Function)
  })
})
