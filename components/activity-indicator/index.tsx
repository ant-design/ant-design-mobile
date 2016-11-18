import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import styles from './style';
import PropTypes from './PropsType';

export default class RNActivityIndicator extends React.Component<PropTypes, any> {
  static defaultProps = {
    animating: true,
    color: 'gray',
    size: 'small',
    toast: false,
  };

  _renderToast() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.innerContainer, { height: 89}]}>
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
    return null;
  }
}
