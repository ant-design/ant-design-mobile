import * as React from 'react';
import { StyleSheet, Image, View, ViewStyle } from 'react-native';
import { Carousel } from 'antd-mobile';

export default class BasicCarouselExample extends React.Component<any, any> {
  render() {
    return (
      <View>
        <Carousel
          style={styles.wrapper}
          autoplayTimeout={2}
          selectedIndex={1}
          autoplay={true}
          infinite={true}
          height={240}
          loop={true}
        >
          <View style={styles.slide}>
            <Image style={styles.image} source={{uri: 'https://zos.alipayobjects.com/rmsportal/JKLbnnQSjYXnfUq.jpg'}} />
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={{uri: 'https://zos.alipayobjects.com/rmsportal/IHnTTMjYUgthhoW.jpg'}} />
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={{uri: 'https://zos.alipayobjects.com/rmsportal/ccvTCqmTFessEyC.jpg'}} />
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={{uri: 'https://zos.alipayobjects.com/rmsportal/SndhMCpKtliuiDR.jpg'}} />
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={{uri: 'https://zos.alipayobjects.com/rmsportal/IDTtiHCFYvnGJjl.jpg'}} />
          </View>
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  } as ViewStyle,
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  } as ViewStyle,
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  } as ViewStyle,
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  } as ViewStyle,
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  } as ViewStyle,
  image: {
    flex: 1,
  },
});
