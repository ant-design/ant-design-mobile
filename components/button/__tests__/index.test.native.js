import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from '../index';

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button>foo</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('pressIn', () => {
    let handlePressIn;
    let wrapper;

    beforeEach(() => {
      handlePressIn = jest.fn();
      wrapper = shallow(<Button onPressIn={handlePressIn}>foo</Button>);
      wrapper.find('TouchableHighlight').simulate('pressIn');
    });

    it('fires pressIn event', () => {
      expect(handlePressIn).toBeCalledWith();
    });

    it('change pressIn state', () => {
      expect(wrapper.state('pressIn')).toBe(true);
    });
  });

  describe('pressOut', () => {
    let handlePressOut;
    let wrapper;

    beforeEach(() => {
      handlePressOut = jest.fn();
      wrapper = shallow(<Button onPressOut={handlePressOut}>foo</Button>);
      wrapper.setState({ pressIn: true });
      wrapper.find('TouchableHighlight').simulate('pressOut');
    });

    it('fires pressOut event', () => {
      expect(handlePressOut).toBeCalledWith();
    });

    it('set pressIn state', () => {
      expect(wrapper.state('pressIn')).toBe(false);
    });
  });

  describe('showUnderlay', () => {
    let handleShowUnderlay;
    let wrapper;

    beforeEach(() => {
      handleShowUnderlay = jest.fn();
      wrapper = shallow(<Button onShowUnderlay={handleShowUnderlay}>foo</Button>);
      wrapper.find('TouchableHighlight').simulate('showUnderlay');
    });

    it('fires showUnderlay event', () => {
      expect(handleShowUnderlay).toBeCalledWith();
    });

    it('set touchIt state', () => {
      expect(wrapper.state('touchIt')).toBe(true);
    });
  });

  describe('hideUnderlay', () => {
    let handleHideUnderlay;
    let wrapper;

    beforeEach(() => {
      handleHideUnderlay = jest.fn();
      wrapper = shallow(<Button onHideUnderlay={handleHideUnderlay}>foo</Button>);
      wrapper.setState({ touchIt: true });
      wrapper.find('TouchableHighlight').simulate('hideUnderlay');
    });

    it('fires hideUnderlay event', () => {
      expect(handleHideUnderlay).toBeCalledWith();
    });

    it('change touchIt state', () => {
      expect(wrapper.state('touchIt')).toBe(false);
    });
  });

  // https://github.com/airbnb/enzyme/issues/386
  // describe('disabled', () => {
    // let wrapper;

    // beforeEach(() => {
      // wrapper = shallow(<Button disabled onPressIn={onPressIn}>foo</Button>);
    // });

    // it.only('pressIn not change pressIn state', () => {
      // wrapper.find('TouchableHighlight').simulate('pressIn');
      // expect(wrapper.state('pressIn')).toBe(false);
    // });

    // it('pressOut not change pressIn state', () => {
    //   wrapper.setState({ pressIn: true });
    //   wrapper.find('TouchableHighlight').simulate('pressOut');
    //   expect(wrapper.state('pressIn')).toBe(true);
    // });
    //
    // it('showUnderlay not change touchIt state', () => {
    //   wrapper.find('TouchableHighlight').simulate('showUnderlay');
    //   expect(wrapper.state('touchIt')).toBe(false);
    // });
    //
    // it('hideUnderlay not change touchIt state', () => {
    //   wrapper.setState({ touchIt: true });
    //   wrapper.find('TouchableHighlight').simulate('hideUnderlay');
    //   expect(wrapper.state('touchIt')).toBe(true);
    // });
  // });
});
