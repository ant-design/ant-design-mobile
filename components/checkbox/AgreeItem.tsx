import React from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';
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
    let {style, checkboxStyle, children, disabled, checked, defaultChecked, onChange} = this.props;

    let contentDom;
    if (React.isValidElement(children)) {
      contentDom = children;
    } else {
      contentDom = <Text>{children}</Text>;
    }

    return (<TouchableWithoutFeedback onPress={this.handleClick}>
      <View style={[styles.agreeItem, style]}>
        <Checkbox
          ref={refCheckbox}
          style={[styles.agreeItemCheckbox, checkboxStyle]}
          disabled={disabled}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
        />
        <View style={{flex:1}}>
          {contentDom}
        </View>
      </View>
    </TouchableWithoutFeedback>);
  }
}
