import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';
import NoticeStyle, { INoticeBarStyle } from './style/index.native';
import Marquee from './Marquee.native';
import NoticeBarProps from './PropsType';

export interface INoticeNativeProps extends NoticeBarProps {
  styles?: INoticeBarStyle;
}

const NoticeStyles = StyleSheet.create<any>(NoticeStyle);

export default class NoticeBar extends React.Component<INoticeNativeProps, any> {
  static defaultProps = {
    mode: '',
    onClick() {},
    icon: (
      <Image
        source={{ uri: 'https://zos.alipayobjects.com/rmsportal/UgviADRsIpznkjSEXWEaPTlKtPCMSlth.png' }}
        style={{ width: 14, height: 12 }}
      />
    ),
    styles: NoticeStyles,
  };

  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  onClick = () => {
    const { mode, onClick } = this.props;
    if (onClick) {
      onClick();
    }
    if (mode === 'closable') {
      this.setState({
        show: false,
      });
    }
  }

  render() {
    const { children, mode, icon, style, marqueeProps } = this.props;
    const styles = this.props.styles!;

    let operationDom: any = null;
    if (mode === 'closable') {
      operationDom = (
        <TouchableWithoutFeedback onPress={this.onClick}>
          <View><Text style={[styles.close]}>×</Text></View>
        </TouchableWithoutFeedback>
      );
    } else if (mode === 'link') {
      operationDom = (
        <Text style={[styles.link]}>∟</Text>
      );
    }

    const iconDom = icon && React.isValidElement(icon) ? <View style={styles.left15}>{icon}</View> : null;

    let marquee: any = {
      loop: false,
      leading: 500,
      trailing: 800,
      fps: 40,
      style: styles.content,
      ...marqueeProps,
    };

    const main = (
      <View style={[styles.notice, style]}>
        {iconDom}
        <View style={[styles.container, icon ? styles.left6 : styles.left15]}>
          <Marquee text={children} {...marquee} />
        </View>
        {operationDom}
      </View>
    );
    return this.state.show ? mode === 'closable' ? main : (
      <TouchableWithoutFeedback onPress={this.onClick}>
        {main}
      </TouchableWithoutFeedback>
    ) : null;
  }
}
