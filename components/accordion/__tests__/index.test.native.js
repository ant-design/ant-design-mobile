import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

import Accordion from '../index';

describe('Accordion', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(
      <Accordion>
        <Accordion.Panel header="标题一">
          内容一
        </Accordion.Panel>
        <Accordion.Panel header="标题二">
          内容二
        </Accordion.Panel>
      </Accordion>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
