import React from 'react';
import {TouchableWithoutFeedback, Image} from 'react-native';
import { RadioProps } from './PropsType';
import styles from './style/index';

export default class Radio extends React.Component<RadioProps, any> {
  static RadioItem: any;

  constructor(props: RadioProps, context: any) {
    super(props, context);

    this.state = {
      checked: props.checked || props.defaultChecked || false,
    };
  }

  componentWillReceiveProps(nextProps: RadioProps): void {
    if ('checked' in nextProps) {
      this.setState({
        checked: !!nextProps.checked,
      });
    }
  }

  handleClick = () => {
    if (this.props.disabled) {
      return;
    }
    if (!('checked' in this.props)) {
      this.setState({
        checked: true,
      });
    }
    if (this.props.onChange) {
      this.props.onChange({target: {checked: true}});
    }
  };

  render(): JSX.Element {
    let {style, disabled} = this.props;
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
      <Image source={imgSrc} style={[styles.icon, style]} />
    </TouchableWithoutFeedback>);
  }
}
