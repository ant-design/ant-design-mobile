import { Carousel } from 'antd-mobile';
import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

export default class BasicCarouselExample extends React.Component<any, any> {
  onselectedIndexChange(index: number) {
    /* tslint:disable: no-console */
    console.log('change to', index);
  }
  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <View style={{ paddingHorizontal: 15 }}>
          <Carousel
            style={styles.wrapper}
            autoplayInterval={2}
            selectedIndex={2}
            autoplay
            infinite
            afterChange={this.onselectedIndexChange}
          >
            <View style={[styles.container, { backgroundColor: 'red' }]}>
              <Text>Carousel 1</Text>
            </View>
            <View style={[styles.container, { backgroundColor: 'blue' }]}>
              <Text>Carousel 2</Text>
            </View>
            <View style={[styles.container, { backgroundColor: 'yellow' }]}>
              <Text>Carousel 3</Text>
            </View>
            <View style={[styles.container, { backgroundColor: 'black' }]}>
              <Text>Carousel 4</Text>
            </View>
            <View style={[styles.container, { backgroundColor: '#ccc' }]}>
              <Text>Carousel 5</Text>
            </View>
          </Carousel>
          <Text>Carousel will adjust height based on content</Text>
          <Text>{React.Children.count(this.props.children)}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create<{
  wrapper: ViewStyle;
  container: ViewStyle;
  text: TextStyle;
}>({
  wrapper: {
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
});
