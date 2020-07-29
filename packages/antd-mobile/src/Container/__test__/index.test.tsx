import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { Container } from '..'

describe('Avatar', () => {
  it('snapshot', () => {
    const component = shallow(
      <div>
        <h3>Basic</h3>
        <Container
          title="花见花开"
          icon={{
            type: 'arrow',
          }}
        >
          消费信贷体验技术部
        </Container>
        <h3>Icon</h3>
        <Container
          title="人见人爱"
          icon={{
            type: 'close',
          }}
        >
          消费信贷体验技术部
        </Container>
        <h3>Thumb</h3>
        <Container
          thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
          title="人见人爱"
          icon={{
            type: 'more',
          }}
        >
          消费信贷体验技术部
        </Container>
      </div>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
