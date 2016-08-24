import * as React from 'react';
import {TouchableWithoutFeedback, Image} from 'react-native';
import RadioProps from './RadioPropsType';
import styles from './style/index';
import PropTypes = React.PropTypes;

export default class Radio extends React.Component<RadioProps, any> {

  static propTypes = {
    style: PropTypes.any,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static RadioItem: any;

  constructor(props: RadioProps, context: any) {
    super(props, context);

    let checked = 'checked' in props ? props.checked : props.defaultChecked;
    this.state = {
      checked: checked,
    };
  }

  componentWillReceiveProps(nextProps: RadioProps, nextContext: any): void {
    if ('checked' in nextProps) {
      const oldChecked = this.state.checked;
      if (nextProps.checked === oldChecked) {
        return;
      }
      this.setState({
        checked: nextProps.checked,
      });
    }
  }

  handleClick = () => {
    if (this.props.disabled || this.state.checked) {
      return;
    }
    this.setState({
      checked: true,
    });

    if (this.props.onChange) {
      this.props.onChange(true);
    }
  };

  render(): JSX.Element {
    let {style, disabled} = this.props;
    let checked = this.state.checked;
    let imgSrc = null;
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
