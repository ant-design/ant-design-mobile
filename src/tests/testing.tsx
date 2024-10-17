import '@testing-library/jest-dom/extend-expect'
import {
  act,
  fireEvent,
  render,
  RenderOptions,
  RenderResult,
} from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import * as React from 'react'

expect.extend(toHaveNoViolations)

type UI = Parameters<typeof render>[0]

const AllTheProviders = ({ children }: { children: React.ReactElement }) => {
  /**
   * TODO: 在这里添加 Provider 如
   * import { ThemeProvider } from 'my-ui-lib'
   * import { TranslationProvider } from 'my-i18n-lib'
   * import defaultStrings from 'i18n/en-x-default'
   *
   *  return (
   *     <ThemeProvider theme="light">
   *       <TranslationProvider messages={defaultStrings}>
   *         {children}
   *       </TranslationProvider>
   *     </ThemeProvider>
   *   )
   */
  return children
}

export interface TestOptions extends Omit<RenderOptions, 'wrapper'> {
  /**
   * optional additional wrapper, e.g. Context
   *
   * @example
   * ```ts
   * // single wrapper
   * render(<MyConponent />, {
   *  wrapper: MyContext
   * });
   *
   * // multiple wrapper
   * render(<MyConponent />, {
   *  wrapper: ({ children }) => (
   *    <ContextA>
   *      <ContextB>
   *        {children}
   *      <ContextB />
   *    <ContextA />
   *  )
   * });
   *
   * ```
   */
  wrapper?: typeof AllTheProviders
}

/**
 * Custom render for @testing-library/react
 *
 * @see https://testing-library.com/docs/react-testing-library/setup#custom-render
 * @param component the component under test
 * @param options customized test options
 */
export const customRender = (
  ui: UI,
  { wrapper: Wrapper = AllTheProviders, ...options }: TestOptions = {}
): RenderResult => {
  const renderResult = render(<Wrapper>{ui}</Wrapper>, options)
  return {
    ...renderResult,
    rerender: ui => renderResult.rerender(<Wrapper>{ui}</Wrapper>),
  }
}

// re-export everything
export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
// override render method
export { customRender as render }

/**
 * Validates against common a11y mistakes.
 *
 * Wrapper for jest-axe
 *
 * @example
 * ```jsx
 * it('passes a11y test', async () => {
 *  await testA11Y(<MyComponent />, options);
 * });
 *
 * // sometimes we need to perform interactions first to render conditional UI
 * it('passes a11y test when open', async () => {
 *  const { container } = render(<MyComponent />, options);
 *
 *  fireEvent.click(screen.getByRole('button'));
 *
 *  await testA11Y(container, options);
 * });
 * ```
 *
 * @see https://github.com/nickcolley/jest-axe#testing-react-with-react-testing-library
 */
export const testA11y = async (ui: UI | Element) => {
  const container = React.isValidElement(ui) ? customRender(ui).container : ui

  const results = await axe(container as Element)

  expect(results).toHaveNoViolations()
}

export const sleep = (time: number) =>
  new Promise<void>(resolve => setTimeout(resolve, time))

export const actSleep = (time: number) => {
  return act(() => sleep(time))
}

export const waitFakeTimers = async () => {
  for (let i = 0; i < 10; i += 1) {
    await act(async () => {
      jest.advanceTimersByTime(1000)
      await Promise.resolve()
    })
  }
}

export const mockDrag = async (el: Element, options: any[], time?: number) => {
  const [downOptions, ...moveOptions] = options
  fireEvent.mouseDown(el, {
    buttons: 1,
    ...downOptions,
  })
  for (const item of moveOptions) {
    fireEvent.mouseMove(el, {
      buttons: 1,
      ...item,
    })

    if (time) {
      await sleep(time)
    }
  }
  fireEvent.mouseUp(el)
}
