import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Carousel } from 'antd-mobile';

export default class BasicCarouselExample extends React.Component<any, any> {
  onselectedIndexChange(index) {
    /* tslint:disable: no-console */
    console.log('change to', index);
  }

  render() {
    return (
      <View>
        <Carousel
          style={styles.wrapper}
          autoplayTimeout={2}
          selectedIndex={2}
          autoplay={true}
          infinite={true}
          height={160}
          loop={true}
          afterChange={this.onselectedIndexChange}
        >
          <View style={styles.container}>
            <Text>Carousel 1</Text>
          </View>
          <View style={styles.container}>
            <Text>Carousel 2</Text>
          </View>
          <View style={styles.container}>
            <Text>Carousel 3</Text>
          </View>
          <View style={styles.container}>
            <Text>Carousel 4</Text>
          </View>
          <View style={styles.container}>
            <Text>Carousel 5</Text>
          </View>
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  } as ViewStyle,
  slide: {
    flex: 1,
  } as ViewStyle,
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  text: {
    color: '#fff',
    fontSize: 34,
  } as ViewStyle,
  image: {
    flex: 1,
  },
});
