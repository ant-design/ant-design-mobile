import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

import { View } from 'react-native';
import Badge from '../index';

describe('Badge', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(
      <Badge dot>
        <View style={{ width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' }} />
      </Badge>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
