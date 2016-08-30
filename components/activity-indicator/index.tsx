import * as React from 'react';
import {
  View,
  Text,
  Dimensions,
  Platform,
  ActivityIndicator,
} from 'react-native';
import styles from './style';
import PropTypes from './ActivityIndicatorPropTypes';

const { height } = Dimensions.get('window');

export default class RNActivityIndicator extends React.Component<PropTypes, any> {
  static defaultProps = {
    animating: true,
    color: 'gray',
    size: 'small',
    panelColor: 'rgba(34,34,34,0.6)',
    toast: false,
  };

  _renderToast() {
    let containerStyle;
    if (Platform.OS === 'android') {
      containerStyle = [styles.container, { height }];
    } else {
      containerStyle = [styles.container];
    }
    return (
      <View style={containerStyle}>
        <View style={[styles.innerContainer]}>
          <View style={[styles.wrapper]}>
            <ActivityIndicator
              color="white"
              size="large"
            />
            { this.props.text && (<Text style={[styles.toast]}>{this.props.text}</Text>) }
          </View>
        </View>
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
        this.props.toast ? this._renderToast() : this._renderSpinner()
      );
    }
  }
}
