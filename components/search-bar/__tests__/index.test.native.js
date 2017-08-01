import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SearchBar from '../index';

describe('SearchBar', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<SearchBar placeholder="搜索" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  describe('test some events', () => {
    let handler;
    let wrapper;

    beforeEach(() => {
      handler = jest.fn();
    });

    it('fires onChange event', () => {
      wrapper = shallow(<SearchBar onChange={handler} />);
      wrapper.find('TextInput').simulate('changeText', 'foo');
      expect(handler).toBeCalledWith('foo');
    });

    it('fires onFocus event', () => {
      wrapper = shallow(<SearchBar onFocus={handler} />);
      wrapper.find('TextInput').simulate('focus');
      expect(handler).toBeCalledWith();
    });

    it('fires onBlur event', () => {
      wrapper = shallow(<SearchBar onBlur={handler} />);
      wrapper.find('TextInput').simulate('blur');
      expect(handler).toBeCalledWith();
    });

    it('fires onCancel event', () => {
      wrapper = shallow(<SearchBar value="test" showCancelButton onCancel={handler} />);
      wrapper.find('Text').simulate('press');
      expect(handler).toBeCalledWith('test');
    });
  });
});
