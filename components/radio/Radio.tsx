import React from 'react';
import {TouchableWithoutFeedback, Image, Text, View} from 'react-native';
import { RadioProps } from './PropsType';
import RadioStyle from './style/index';

export default class Radio extends React.Component<RadioProps, any> {
  static RadioItem: any;
  static defaultProps = {
    styles: RadioStyle,
  };

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
  }

  render(): JSX.Element {
    let {style, disabled, children, styles} = this.props;
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
