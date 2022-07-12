import React from 'react'
import { render, testA11y, fireEvent, sleep } from 'testing'
import NoticeBar from '..'

const classPrefix = `adm-notice-bar`

describe('NoticeBar', () => {
  test('a11y', async () => {
    await testA11y(<NoticeBar content='notice' />)
  })

  test('the type of the bar', async () => {
    const renderer = render(
      <NoticeBar content='notice' data-testid='default' />
    )
    expect(renderer.getByTestId('default')).toHaveClass(
      `${classPrefix}-default`
    )

    const renderer2 = render(
      <NoticeBar content='notice' color='alert' data-testid='alert' />
    )
    expect(renderer2.getByTestId('alert')).toHaveClass(`${classPrefix}-alert`)
  })

  test('can be close', async () => {
    const fn = jest.fn()
    const { getByTestId } = render(
      <NoticeBar content='notice' closeable data-testid='notice' onClose={fn} />
    )

    const el = getByTestId('notice')
    const iconEl = el.querySelectorAll(`.${classPrefix}-close-icon`)[0]
    expect(iconEl).toBeVisible()

    fireEvent.click(iconEl)
    expect(el).not.toBeInTheDocument()
    expect(fn).toBeCalled()
  })

  test('`icon` prop', async () => {
    const { getByText } = render(
      <NoticeBar content='notice' icon={<div>custom icon</div>} />
    )
    expect(getByText('custom icon')).toBeVisible()
  })

  test('`extra` prop', async () => {
    const { getByText } = render(
      <NoticeBar content='notice' extra={<div>custom extra</div>} />
    )
    expect(getByText('custom extra')).toBeVisible()
  })

  test('long content', async () => {
    const { container, debug } = render(
      <NoticeBar
        delay={100}
        speed={500}
        content='cupidatat nostrud est nisi excepteur cupidatat deserunt irure consectetur veniam eiusmod labore reprehenderit elit pariatur aute reprehenderit amet ex officia'
      />
    )

    // mock offset width
    const contentEl = document.querySelectorAll(`.${classPrefix}-content`)[0]
    const innerEl = document.querySelectorAll(
      `.${classPrefix}-content-inner`
    )[0]
    Object.defineProperty(contentEl, 'offsetWidth', {
      configurable: true,
      value: 300,
    })
    Object.defineProperty(innerEl, 'offsetWidth', {
      configurable: true,
      value: 600,
    })

    await sleep(200)
    expect(container).toMatchSnapshot()
  })
})
