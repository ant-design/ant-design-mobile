import * as React from 'react';
import { View } from 'react-native';
import Checkbox from './Checkbox';
import AgreeItemPropsType from './AgreeItemPropsType';
import styles from './style/index';

export default class AgreeItem extends React.Component<AgreeItemPropsType, any> {

  render(): JSX.Element {
    let {style, children, disabled, checked, defaultChecked, onChange} = this.props;

    return (
      <View style={[styles.agreeItem, style]}>
        {children}
        <Checkbox style={styles.agreeItemCheckbox}
          disabled={disabled}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
        />
      </View>);
  }
}
