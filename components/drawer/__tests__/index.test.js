import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

import { Text } from 'react-native';
import Drawer from '../index';

describe('Drawer', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(
      <Drawer
        sidebar={<Text>Text</Text>}
        position="left"
      >
        <Text>Main</Text>
      </Drawer>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
