import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Carousel from '../index';

describe('Carousel.RN', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Carousel><View>abc</View></Carousel>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has no dots', () => {
    const wrapper = shallow(
      <Carousel dots={false}>
        <View>abc</View>
      </Carousel>,
    );
    // only has `ScrollView`
    expect(wrapper.children()).toHaveLength(1);
    // ScrollViewMock
    expect(wrapper.children().name()).toMatch(/ScrollView/);
  });

  it('has dots', () => {
    const wrapper = shallow(<Carousel><View>abc</View></Carousel>);
    expect(wrapper.children()).toHaveLength(2);
  });

  it('check api', () => {
    const itemStyle = {
      height: 150,
      width: 320,
      flexGrow: 1,
    };
    const wrapper = shallow(
      <Carousel selectedIndex={1}>
        <View style={itemStyle}>item1</View>
        <View style={itemStyle}>item2</View>
        <View style={itemStyle}>item3</View>
      </Carousel>,
    );
    // wrapper.children().at(0) => ScrollView(ScrollViewMock)
    expect(wrapper.children().at(0).children()).toHaveLength(3);
    expect(wrapper.state('selectedIndex')).toEqual(1);
    // because of ``ScrollViewMock``, can not test UI and events.
  });
});
