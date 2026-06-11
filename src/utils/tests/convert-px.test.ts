jest.unmock('../../utils/convert-px')
jest.mock('../../utils/dev-log', () => ({
  devError: jest.fn(),
  devWarning: jest.fn(),
  devPrint: jest.fn(),
}))

import { convertPx } from '../../utils/convert-px'

function mockRect(el: Element, height: number) {
  ;(el as HTMLElement).getBoundingClientRect = jest.fn(
    () => ({ height }) as DOMRect
  )
}

describe('convertPx', () => {
  afterAll(() => {
    document.querySelectorAll('.adm-px-tester').forEach(el => el.remove())
  })

  afterEach(() => {
    document.querySelectorAll('.adm-px-tester').forEach(el => {
      ;(el as HTMLElement).getBoundingClientRect =
        HTMLElement.prototype.getBoundingClientRect
    })
  })

  // Tests share module-level closure vars (tenPxTester, tester) initialized by the first test
  it('should lazily init tester elements and prevent duplicate initialization', () => {
    expect(document.querySelectorAll('.adm-px-tester')).toHaveLength(0)

    convertPx(10)
    expect(document.querySelectorAll('.adm-px-tester')).toHaveLength(2)

    convertPx(20)
    expect(document.querySelectorAll('.adm-px-tester')).toHaveLength(2)
  })

  it('should fire devError when tester is not position:fixed in dev mode', () => {
    jest.isolateModules(() => {
      jest.doMock('../../utils/can-use-dom', () => ({ canUseDom: true }))
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { convertPx } = require('../../utils/convert-px')
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { devError } = require('../../utils/dev-log')
      ;(<jest.Mock>devError).mockClear()
      convertPx(10)
      expect(devError).toHaveBeenCalledTimes(1)
      expect(devError).toHaveBeenCalledWith(
        'Global',
        'The px tester is not rendering properly. Please make sure you have imported `antd-mobile/es/global`.'
      )
    })
  })

  it('should set --size CSS variable on the tester and return converted height', () => {
    const testers = document.querySelectorAll('.adm-px-tester')
    mockRect(testers[0], 5)
    mockRect(testers[1], 5)

    const result = convertPx(25)
    expect((testers[1] as HTMLElement).style.getPropertyValue('--size')).toBe(
      '25'
    )
    expect(result).toBe(5)
  })

  it('should return original px without writing --size when 10px tester renders at height 10', () => {
    const testers = document.querySelectorAll('.adm-px-tester')
    mockRect(testers[0], 10)

    const prevSize = (testers[1] as HTMLElement).style.getPropertyValue(
      '--size'
    )
    expect(convertPx(30)).toBe(30)
    expect((testers[1] as HTMLElement).style.getPropertyValue('--size')).toBe(
      prevSize
    )
  })

  it('should handle edge values: 0 and negative px', () => {
    const testers = document.querySelectorAll('.adm-px-tester')

    // px = 0, early return
    mockRect(testers[0], 10)
    mockRect(testers[1], 0)
    expect(convertPx(0)).toBe(0)

    // px = 0, conversion path
    mockRect(testers[0], 5)
    mockRect(testers[1], 0)
    expect(convertPx(0)).toBe(0)
    expect((testers[1] as HTMLElement).style.getPropertyValue('--size')).toBe(
      '0'
    )

    // negative px
    mockRect(testers[0], 5)
    mockRect(testers[1], 3)
    expect(convertPx(-10)).toBe(3)
    expect((testers[1] as HTMLElement).style.getPropertyValue('--size')).toBe(
      '-10'
    )
  })

  describe('SSR / no-DOM guard', () => {
    it('should return original px when DOM is unavailable', () => {
      jest.isolateModules(() => {
        jest.doMock('../../utils/can-use-dom', () => ({
          canUseDom: false,
        }))
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { convertPx } = require('../../utils/convert-px')
        expect(convertPx(100)).toBe(100)
      })

      const originalBody = document.body
      try {
        Object.defineProperty(document, 'body', {
          value: null,
          writable: true,
          configurable: true,
        })
        jest.isolateModules(() => {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const { convertPx } = require('../../utils/convert-px')
          expect(convertPx(50)).toBe(50)
        })
      } finally {
        Object.defineProperty(document, 'body', {
          value: originalBody,
          writable: true,
          configurable: true,
        })
      }
    })
  })
})
