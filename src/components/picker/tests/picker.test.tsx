import React from 'react'
import { render, waitFor, createEvent } from 'testing'
import { basicColumns } from '../demos/columns-data'
import { patchCreateEvent } from '../../../tests/gesture/utils'
import Picker from '..'

patchCreateEvent(createEvent)

describe('Picker', () => {
  test('renderLabel works', async () => {
    const { baseElement } = render(
      <Picker
        columns={basicColumns}
        visible={true}
        renderLabel={item => {
          return item.value
        }}
      />
    )

    expect(
      baseElement.textContent
        /**
         * aria contain -
         */
        ?.replace(/-/g, '')
    ).toContain('MonTuesWedThurFriampm')
  })
})
