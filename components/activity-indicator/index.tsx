import * as React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import styles from './style';

export default class RNActivityIndicator extends React.Component<any, any> {
  static defaultProps = {
    animating: true,
    color: 'gray',
    size: 'small',
    panelColor: 'rgba(34,34,34,0.6)',
    toast: false,
  };

  _renderToast() {
    return (
      <View
        style={[{
          alignItems: 'center',
          justifyContent: 'center',
          width: 89,
          height: 89,
          borderRadius: 6,
          backgroundColor: 'rgba(34,34,34,0.6)',
        }]}
      >
        <ActivityIndicator
          color="white"
          size="large"
        />
        { this.props.text && (<Text style={[styles.toast]}>{this.props.text}</Text>) }
      </View>
    );
  }

  _renderSpinner() {
    return (
      <View
        style={[{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }]}
      >
        <ActivityIndicator
          color={this.props.color}
          size={this.props.size}
        />
        { this.props.text && (<Text style={[styles.tip]}>{this.props.text}</Text>) }
      </View>
    );
  }

  render() {
    if (this.props.animating) {
      return (
        <View>
        { !!this.props.toast ? this._renderToast() : this._renderSpinner() }
        </View>
      );
    }
  }
}
