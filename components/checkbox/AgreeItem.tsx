import * as React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import Checkbox from './Checkbox';
import AgreeItemPropsType from './AgreeItemPropsType';
import styles from './style/index';

const refCheckbox = 'checkbox';
export default class AgreeItem extends React.Component<AgreeItemPropsType, any> {

  handleClick = () => {
    let checkBox: Checkbox = this.refs[refCheckbox] as Checkbox;
    checkBox.handleClick();
  };

  render(): JSX.Element {
    let {style, children, disabled, checked, defaultChecked, onChange} = this.props;

    return (<TouchableWithoutFeedback onPress={this.handleClick}>
      <View style={[styles.agreeItem, style]}>
        <Checkbox
          ref={refCheckbox}
          style={[styles.agreeItemCheckbox]}
          disabled={disabled}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
        />
        <View style={{flex:1}}>
          {children}
        </View>
      </View>
    </TouchableWithoutFeedback>);
  }
}
