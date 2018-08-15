import React from 'react';
import { shallow } from 'enzyme';
import Printer from '../index';

describe('Printer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Printer disable={false} />,
    );
    expect(wrapper.find('.am-printer-component-cntr')).toHaveLength(2);
  });
});
