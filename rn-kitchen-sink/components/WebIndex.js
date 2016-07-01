import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  WebView,
  Modal,
  ActivityIndicator
} from 'react-native';

export default class WebIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      error: false
    };
    this.onLoadEnd = this.onLoadEnd.bind(this);
  }

  onLoadEnd() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <View style={{marginTop: 64, flex: 1}}>
        <WebView
          style={styles.webView}
          ref="webview"
          onLoadEnd={this.onLoadEnd}
          automaticallyAdjustContentInsets={false}
          source={{uri: 'http://antm.alipay.net/kitchen-sink.html'}}
        />
        <Modal
          animationType={'none'}
          transparent
          visible={this.state.visible}
        >
          <View style={styles.loading}>
            <ActivityIndicator
              animating
              size="large"
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  webView: {
    height: Dimensions.get('window').height - 64
  },
  actions: {
    flex: 1,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  action: {
    alignSelf: 'center'
  },
  loading: {
    marginTop: 64,
    height: Dimensions.get('window').height - 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
