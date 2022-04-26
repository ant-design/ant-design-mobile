import React, { createRef } from 'react'
import { render, testA11y, screen, fireEvent, sleep, act } from 'testing'
import Button from '../'
import type { ButtonRef } from '..'

const classPrefix = `adm-button`

describe('Button', () => {
  test('a11y', async () => {
    await testA11y(<Button>test</Button>)
  })

  test('renders with color', () => {
    const { getByText } = render(
      <>
        <Button color='primary'>Primary</Button>
        <Button color='success'>Success</Button>
        <Button color='danger'>Danger</Button>
        <Button color='warning'>Warning</Button>
      </>
    )
    expect(getByText('Primary')).toHaveClass(`${classPrefix}-primary`)
    expect(getByText('Success')).toHaveClass(`${classPrefix}-success`)
    expect(getByText('Danger')).toHaveClass(`${classPrefix}-danger`)
    expect(getByText('Warning')).toHaveClass(`${classPrefix}-warning`)
  })

  test('renders with fill', () => {
    const { getByText } = render(
      <>
        <Button fill='solid'>solid</Button>
        <Button fill='outline'>outline</Button>
        <Button fill='none'>none</Button>
      </>
    )
    expect(getByText('outline')).toHaveClass(`${classPrefix}-fill-outline`)
    expect(getByText('none')).toHaveClass(`${classPrefix}-fill-none`)
    expect(getByText('solid')).not.toHaveClass(`${classPrefix}-fill-solid`)
  })

  test('renders with size', () => {
    const { getByText } = render(
      <>
        <Button size='mini' color='primary'>
          Mini
        </Button>
        <Button size='small' color='primary'>
          Small
        </Button>
        <Button size='middle' color='primary'>
          Middle
        </Button>
        <Button size='large' color='primary'>
          Large
        </Button>
      </>
    )
    expect(getByText('Mini')).toHaveClass(`${classPrefix}-mini`)
    expect(getByText('Small')).toHaveClass(`${classPrefix}-small`)
    expect(getByText('Middle')).toHaveClass(`${classPrefix}`)
    expect(getByText('Large')).toHaveClass(`${classPrefix}-large`)
  })

  test('renders with block', () => {
    const { getByText } = render(
      <Button block color='primary' size='large'>
        Block
      </Button>
    )
    expect(getByText('Block')).toHaveClass(`${classPrefix}-block`)
  })

  test('renders with disabled', () => {
    const { getByRole } = render(<Button disabled>Disabled</Button>)
    const button = getByRole('button')
    expect(button).toBeDisabled()
  })

  test('loading with custom loadingText and loadingIcon', () => {
    const { getByTestId } = render(
      <Button
        loading
        data-testid='btn'
        loadingText='加载中'
        loadingIcon={<div>loadingIcon</div>}
      >
        Loading
      </Button>
    )
    expect(getByTestId('btn')).toHaveClass(`${classPrefix}-loading`)

    // children no render
    expect(() => {
      screen.getByText('Loading')
    }).toThrow(/Unable to find an element with the text: Loading./)

    screen.getByText('加载中')
    screen.getByText('loadingIcon')
  })

  test('renders with type', () => {
    const { getByRole } = render(<Button type='submit'>submit</Button>)
    const button = getByRole('button')
    expect(button).toHaveAttribute('type', 'submit')
    expect(button).not.toHaveAttribute('type', 'button')
  })

  test('renders with onClick', () => {
    class DefaultButton extends React.Component {
      state = {
        loading: false,
      }

      enterLoading = () => {
        this.setState({ loading: true })
      }

      render() {
        const { loading } = this.state
        return (
          <Button
            loading={loading}
            loadingText='加载中'
            onClick={this.enterLoading}
          >
            Button
          </Button>
        )
      }
    }
    const { getByText } = render(<DefaultButton />)
    fireEvent.click(getByText('Button'))
    screen.getByText('加载中')
  })

  test('renders with async onClick and auto loading', async () => {
    await act(async () => {
      const { getByText } = render(
        <Button
          loading='auto'
          loadingText='加载中'
          onClick={async () => {
            await sleep(300)
          }}
        >
          Button
        </Button>
      )
      fireEvent.click(getByText('Button'))
      await sleep(100)
      screen.getByText('加载中')
      await sleep(300)
      screen.getByText('Button')
    })
  })

  test('ref should work', async () => {
    const ref = createRef<ButtonRef>()
    render(<Button ref={ref}>Button</Button>)
    expect(ref.current).toBeDefined()
    expect(ref.current?.nativeElement).toBeDefined()
  })
})
