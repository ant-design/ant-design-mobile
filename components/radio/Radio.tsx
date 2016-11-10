import React from 'react';
import {TouchableWithoutFeedback, Image, Text, View} from 'react-native';
import { RadioProps } from './PropsType';
import styles from './style/index';

export default class Radio extends React.Component<RadioProps, any> {
  static RadioItem: any;

  constructor(props: RadioProps, context: any) {
    super(props, context);

    let checked;
    if (props.checked !== null && props.checked !== undefined) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    this.state = {
      checked: checked,
    };
  }

  componentWillReceiveProps(nextProps: RadioProps): void {
    if (nextProps.checked !== null && nextProps.checked !== undefined) {
      const oldChecked = this.state.checked;
      if (nextProps.checked === oldChecked) {
        return;
      }
      this.setState({
        checked: !!nextProps.checked,
      });
    }
  }

  handleClick = () => {
    if (this.props.disabled) {
      return;
    }
    if (this.props.checked === null || this.props.checked === undefined) {
      this.setState({
        checked: true,
      });
    }
    if (this.props.onChange) {
      this.props.onChange({target: {checked: true}});
    }
  };

  render(): JSX.Element {
    let {style, disabled, children} = this.props;
    let checked = this.state.checked;
    let imgSrc = undefined as any;
    if (checked) {
      if (disabled) {
        imgSrc = require('./image/checked_disable.png');
      } else {
        imgSrc = require('./image/checked.png');
      }
    }
    return (<TouchableWithoutFeedback onPress={this.handleClick}>
        <View style={[styles.wrapper]}>
          <Image source={imgSrc} style={[styles.icon, style]} />
          { typeof children === 'string' ? <Text>{this.props.children}</Text> : children }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
