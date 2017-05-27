import React from 'react';
import {
  StyleSheet,
  View,
  WebView,
  Modal,
  ActivityIndicator,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
  loading: {
    marginTop: 64,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class WebIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      error: false,
    };
  }

  onLoadEnd = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <WebView
          style={styles.webView}
          ref="webview"
          onLoadEnd={this.onLoadEnd}
          automaticallyAdjustContentInsets={false}
          source={{ uri: 'https://mobile.ant.design/kitchen-sink/' }}
          scalesPageToFit={false}
        />
        <Modal
          animationType={'none'}
          transparent
          onRequestClose={this.onLoadEnd}
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
