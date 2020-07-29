import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { SearchBar } from '..'

describe('SearchBar', () => {
  it('SearchBar snapshot', () => {
    const component = shallow(<SearchBar placeholder="Search" maxLength={8} />)

    expect(toJSON(component)).toMatchSnapshot()
  })

  it('SearchBar showCancelButton snapshot', () => {
    const component = shallow(
      <SearchBar
        placeholder="Show Cancel Button"
        showCancelButton
        maxLength={24}
        data-y="111"
      />,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
