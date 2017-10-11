import React from 'react';
import { render, shallow } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import SegmentedControl from '../index';

describe('SegmentedControl', () => {
  it('renders correctly', () => {
    const wrapper = render(<SegmentedControl values={['切换一', '切换二']} />);
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  it('check api', () => {
    const onValueChange = jest.fn();
    const onChange = jest.fn();
    const wrapper = shallow(
      <SegmentedControl values={['切换一', '切换二']} onValueChange={onValueChange} onChange={onChange} />,
    );
    expect(wrapper.find('.am-segment-item')).toHaveLength(2);
    expect(wrapper.find('.am-segment-item').at(0).hasClass('am-segment-item-selected')).toBeTruthy();
    wrapper.find('.am-segment-item').at(1).simulate('click', {});
    expect(onValueChange).toHaveBeenCalledWith('切换二');
    expect(onChange).toHaveBeenCalledWith(
      {
        nativeEvent: {
          selectedSegmentIndex: 1,
          value: '切换二',
        },
      },
    );
    expect(wrapper.find('.am-segment-item').at(0).hasClass('am-segment-item-selected')).toBeFalsy();
    expect(wrapper.find('.am-segment-item').at(1).hasClass('am-segment-item-selected')).toBeTruthy();
  });
});
