import React from 'react';
import { TouchableWithoutFeedback, Image, Text, View } from 'react-native';
import { RadioProps } from './PropsType';
import RadioStyle, { IRadioStyle } from './style/index';

export interface IRadioNativeProps extends RadioProps {
  styles?: IRadioStyle;
}
export default class Radio extends React.Component<IRadioNativeProps, any> {
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
      this.props.onChange({ target: { checked: true } });
    }
  }

  render(): JSX.Element {
    const { style, disabled, children } = this.props;
    const styles = this.props.styles!;

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
          {typeof children === 'string' ? <Text>{this.props.children}</Text> : children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
