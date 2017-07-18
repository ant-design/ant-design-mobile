import React from 'react';
import { View, Text } from 'react-native';
import Radio from './Radio';
import List from '../list';
import { RadioItemProps } from './PropsType';
import RadioItemStyle, { IRadioStyle } from './style/index';

const ListItem = List.Item;
const refRadio = 'radio';

export interface IRadioItemNativeProps extends RadioItemProps {
  styles?: IRadioStyle;
}

export default class RadioItem extends React.Component<IRadioItemNativeProps, any> {
  static defaultProps = {
    styles: RadioItemStyle,
  };

  handleClick = () => {
    let radio: Radio = this.refs[refRadio] as Radio;
    radio.handleClick();
  }

  render() {
    const { style, radioStyle, defaultChecked, checked, disabled, children, onChange } = this.props;
    const styles = this.props.styles!;

    let contentDom: React.ReactElement<any> | null = null;
    if (children && React.isValidElement(children)) {
      contentDom = <View style={{ flex: 1 }}>{children}</View>;
    } else {
      let contentStyle = [styles.radioItemContent, disabled ? styles.radioItemContentDisable : {}];
      contentDom = (<Text style={contentStyle} numberOfLines={1}>
        {this.props.children}
      </Text>);
    }

    const radioEl = (
      <Radio
        ref={refRadio}
        style={radioStyle}
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
    );

    return (
      <ListItem
        style={style}
        onClick={disabled ? undefined : this.handleClick}
        extra={radioEl}
      >
        {contentDom}
      </ListItem>
    );
  }
}
