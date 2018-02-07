import React from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { RadioPropsType } from './PropsType';
import RadioStyle, { IRadioStyle } from './style/index.native';

export interface RadioNativeProps extends RadioPropsType {
  styles?: IRadioStyle;
  style?: StyleProp<ImageStyle>;
}

const RadioStyles = StyleSheet.create<any>(RadioStyle);

export default class Radio extends React.Component<RadioNativeProps, any> {
  static RadioItem: any;
  static defaultProps = {
    styles: RadioStyles,
  };

  constructor(props: RadioNativeProps, context: any) {
    super(props, context);

    this.state = {
      checked: props.checked || props.defaultChecked || false,
    };
  }

  componentWillReceiveProps(nextProps: RadioNativeProps): void {
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

    const checked = this.state.checked;
    let imgSrc = undefined as any;
    if (checked) {
      imgSrc = disabled
        ? require('./image/checked_disable.png')
        : require('./image/checked.png');
    }
    return (
      <TouchableWithoutFeedback onPress={this.handleClick}>
        <View style={[styles.wrapper]}>
          <Image source={imgSrc} style={[styles.icon, style]} />
          {typeof children === 'string' ? (
          // tslint:disable-next-line:jsx-no-multiline-js
            <Text>{this.props.children}</Text>
          ) : (
            children
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
