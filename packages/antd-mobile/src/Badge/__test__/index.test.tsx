import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Badge } from '..'

describe('Badge', () => {
  it('snapshot', () => {
    const component = shallow(
      <div className="demo-container">
        <h3>基础红点</h3>
        <div className="badge-container">
          <Badge dot />
          <Badge text={100}></Badge>
          <Badge text="99"></Badge>
          <Badge bubble placement="left" text="新气泡" />
        </div>
        <h3>数字红点</h3>
        <div className="badge-container">
          <Badge dot>
            <div className="number-cover" />
          </Badge>
          <Badge text={99}>
            <div className="number-cover" />
          </Badge>
          <Badge text={111}>
            <div className="number-cover" />
          </Badge>
        </div>
        <h3>文字红点</h3>
        <div className="badge-container">
          <Badge text="新">
            <div className="text-cover" />
          </Badge>

          <Badge text="NEW">
            <div className="text-cover" />
          </Badge>
          <Badge text="!">
            <div className="text-cover" />
          </Badge>
        </div>
        <h3>文字气泡</h3>
        <div className="badge-container">
          <Badge bubble placement="left" text="新气泡">
            <div className="bubble-cover" />
          </Badge>

          <Badge bubble placement="right" text="新气泡">
            <div className="bubble-cover" />
          </Badge>
          <Badge bubble placement="middle" text="新气泡">
            <div className="bubble-cover" />
          </Badge>
        </div>
      </div>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
