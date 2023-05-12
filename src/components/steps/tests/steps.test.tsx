import React from 'react'
import { render, screen } from 'testing'
import Steps from '..'

const { Step } = Steps

const classPrefix = `adm-steps`
const stepClassPrefix = `adm-step`

describe('Steps', () => {
  test('renders with horizontal direction', () => {
    render(
      <Steps current={1}>
        <Step title='title1' description='desc' />
        <Step title='title2' description='desc' />
        <Step title='title3' description='desc' />
      </Steps>
    )
    expect(document.querySelector(`.${classPrefix}`)).toHaveClass(
      `${classPrefix}-horizontal`
    )
    expect(document.querySelectorAll(`.${stepClassPrefix}`)[2]).toHaveClass(
      `${stepClassPrefix}-status-wait`
    )
  })

  test('renders with error status', () => {
    render(
      <Steps current={2}>
        <Step title='title1' description='desc' />
        <Step title='title2' description='desc' status='error' />
      </Steps>
    )
    expect(document.querySelectorAll(`.${stepClassPrefix}`)[1]).toHaveClass(
      `${stepClassPrefix}-status-error`
    )
  })

  test('renders with vertical direction', () => {
    render(
      <Steps direction='vertical'>
        <Step title='title1' description='desc' status='finish' />
        <Step title='title2' description='desc' />
        <Step title='title3' description='desc' />
      </Steps>
    )
    expect(document.querySelector(`.${classPrefix}`)).toHaveClass(
      `${classPrefix}-vertical`
    )
    expect(document.querySelectorAll(`.${stepClassPrefix}`)[0]).toHaveClass(
      `${stepClassPrefix}-status-finish`
    )
  })

  test('renders with invalid react element', () => {
    render(<Steps>{1}</Steps>)
    expect(screen.getByText(1)).toBeInTheDocument()
  })
})
