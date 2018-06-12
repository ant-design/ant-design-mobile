import React from 'react';
import { mount } from 'enzyme';
import Accordion from '../index';

describe('Accordion', () => {
  // No need to render Snapshot again, because of `./demo.test.js`

  it('renders correctly', () => {
    const wrapper = mount(
      <Accordion>
        <Accordion.Panel header="标题一">
          内容一
        </Accordion.Panel>
        <Accordion.Panel header="标题二">
          内容二
        </Accordion.Panel>
      </Accordion>,
    );
    expect(wrapper.find('.am-accordion')).toHaveLength(1);
  });

  it('renders accordion prop correctly', () => {
    const wrapper = mount(
      <Accordion accordion>
        <Accordion.Panel header="标题一">
          内容一
        </Accordion.Panel>
        <Accordion.Panel header="标题二">
          内容二
        </Accordion.Panel>
      </Accordion>,
    );
    // accordion props make only one active panel
    wrapper.find('.am-accordion-header').at(0).simulate('click');
    wrapper.find('.am-accordion-header').at(1).simulate('click');
    expect(wrapper.find('.am-accordion-item').at(1).hasClass('am-accordion-item-active')).toBe(true);
  });
});
