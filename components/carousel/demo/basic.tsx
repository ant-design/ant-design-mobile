import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Carousel } from 'antd-mobile';

export default class BasicCarouselExample extends React.Component<any, any> {
  onselectedIndexChange(index) {
    /* tslint:disable: no-console */
    console.log('change to', index);
  }
  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <View style={{ paddingHorizontal: 15 }}>
          <Carousel
            style={styles.wrapper}
            autoplayTimeout={2}
            selectedIndex={2}
            autoplay
            infinite
            afterChange={this.onselectedIndexChange}
          >
            <View style={[styles.container, { backgroundColor: 'red' }]}>
              <Text>Carousel 1</Text>
            </View>
            <View style={[styles.container, , { backgroundColor: 'blue' }]}>
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
          <Text>Carousel 根据内容自适应高度</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  } as ViewStyle,
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  } as ViewStyle,
  text: {
    color: '#fff',
    fontSize: 36,
  } as ViewStyle,
});
