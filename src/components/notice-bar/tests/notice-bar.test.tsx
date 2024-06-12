import React from 'react'
import { fireEvent, render, screen, sleep, testA11y } from 'testing'
import NoticeBar from '..'
import ConfigProvider from '../../config-provider'

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
    const iconEl = el.querySelectorAll(`.${classPrefix}-close`)[0]
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
    const { container } = render(
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

  test('`wrap` prop', () => {
    render(
      <NoticeBar
        content={
          <>
            <div>1</div>
            <div>2</div>
          </>
        }
        wrap
      />
    )
    expect(document.querySelector(`.${classPrefix}`)).toHaveClass(
      `${classPrefix}-wrap`
    )
  })

  test('can be click', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <NoticeBar content='notice!' onClick={handleClick} />
    )

    const noticeBar = getByText('notice!')
    fireEvent.click(noticeBar)

    expect(handleClick).toHaveBeenCalled()
  })

  describe('closeIcon', () => {
    it('default', () => {
      const { baseElement } = render(<NoticeBar content='foobar' closeable />)
      expect(baseElement.querySelector('.antd-mobile-icon')).toBeTruthy()
    })

    it('props', () => {
      render(<NoticeBar content='foobar' closeable closeIcon='bamboo' />)
      expect(screen.getByText('bamboo')).toBeVisible()
    })

    it('context', () => {
      render(
        <ConfigProvider noticeBar={{ closeIcon: 'little' }}>
          <NoticeBar content='foobar' closeable />
        </ConfigProvider>
      )

      expect(screen.getByText('little')).toBeVisible()
    })

    it('props override context', () => {
      render(
        <ConfigProvider noticeBar={{ closeIcon: 'little' }}>
          <NoticeBar content='foobar' closeable closeIcon='bamboo' />
        </ConfigProvider>
      )

      expect(screen.getByText('bamboo')).toBeVisible()
    })
  })
})
