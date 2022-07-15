import React from 'react'
import { render } from 'testing'
import Grid from '..'

const classPrefix = `adm-grid`

describe('Grid', () => {
  test('basic usage', () => {
    render(
      <Grid columns={3} gap={8}>
        <Grid.Item>A</Grid.Item>
        <Grid.Item>B</Grid.Item>
        <Grid.Item>C</Grid.Item>
      </Grid>
    )
    expect(document.querySelector(`.${classPrefix}`)).toHaveStyle(
      '--columns:3; --gap:8px;'
    )
  })

  test('renders with function gap', () => {
    render(
      <Grid columns={3} gap={[5, 10]}>
        <Grid.Item>A</Grid.Item>
        <Grid.Item>B</Grid.Item>
        <Grid.Item>C</Grid.Item>
      </Grid>
    )
    expect(document.querySelector(`.${classPrefix}`)).toHaveStyle(
      '--gap-horizontal:5px; --gap-vertical: 10px;'
    )
  })
})
