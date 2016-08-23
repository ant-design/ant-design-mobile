import * as React from 'react';
import {TouchableWithoutFeedback, Image, View} from 'react-native';
import CheckboxProps from './CheckboxPropsType';
import styles from './style/index';
import PropTypes = React.PropTypes;

export default class Checkbox extends React.Component<CheckboxProps, any> {

  static propTypes = {
    style: PropTypes.object,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static CheckboxItem: any;
  static AgreeItem: any;

  constructor(props: CheckboxProps, context: any) {
    super(props, context);

    let checked = 'checked' in props ? props.checked : props.defaultChecked;
    this.state = {
      checked: checked,
    };
  }

  componentWillReceiveProps(nextProps: CheckboxProps, nextContext: any): void {
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

  performClick = () => {
    if (this.props.disabled) {
      return;
    }
    let checked = !this.state.checked;
    this.setState({
      checked: checked,
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(checked);
      }
    });
  };

  render(): JSX.Element {
    let {style, disabled} = this.props;
    let checked = this.state.checked;
    let imgSrc;
    if (checked) {
      if (disabled) {
        imgSrc = require('./image/checked_disable.png');
      } else {
        imgSrc = require('./image/checked.png');
      }
    } else {
      if (disabled) {
        imgSrc = require('./image/normal_disable.png');
      } else {
        imgSrc = require('./image/normal.png');
      }
    }

    return (<View style={style}>
      <Image
        source={imgSrc}
        style={styles.icon}
      />
      <TouchableWithoutFeedback onPress={this.performClick}>
        <View style={styles.touchArea} />
      </TouchableWithoutFeedback>
    </View>);
  }
}
