import React from 'react';
import renderer from 'react-test-renderer';
import SegmentedControl from '../index';

describe('SegmentedControl', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SegmentedControl values={['切换一', '切换二']} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
