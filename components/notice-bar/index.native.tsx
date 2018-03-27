import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import Marquee, { MarqueeProps } from './Marquee.native';
import { NoticeBarPropsType } from './PropsType';
import NoticeStyle, { INoticeBarStyle } from './style/index.native';

export interface NoticeNativeProps extends NoticeBarPropsType {
  styles?: INoticeBarStyle;
  marqueeProps?: MarqueeProps;
  style?: StyleProp<ViewStyle>;
}

const NoticeStyles = StyleSheet.create<any>(NoticeStyle);

export default class NoticeBar extends React.Component<NoticeNativeProps, any> {
  static defaultProps = {
    mode: '',
    onClick() {},
    icon: (
      <Image
        // tslint:disable-next-line:jsx-no-multiline-js
        source={{
          uri:
            'https://zos.alipayobjects.com/rmsportal/UgviADRsIpznkjSEXWEaPTlKtPCMSlth.png',
        }}
        style={{ width: 14, height: 12 }}
      />
    ),
    styles: NoticeStyles,
  };

  constructor(props: NoticeNativeProps) {
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
    const { children, mode, icon, style, action, marqueeProps } = this.props;
    const styles = this.props.styles!;

    let operationDom: any = null;
    if (mode === 'closable') {
      operationDom = (
        <TouchableWithoutFeedback onPress={this.onClick}>
          <View style={styles.actionWrap}>
            {action ? action : <Text style={[styles.close]}>×</Text>}
          </View>
        </TouchableWithoutFeedback>
      );
    } else if (mode === 'link') {
      operationDom = (
        <View style={styles.actionWrap}>
          {action ? action : <Text style={[styles.link]}>∟</Text>}
        </View>
      );
    }

    const main = (
      <View style={[styles.notice, style]}>
        {icon && <View style={styles.left15}>{icon}</View>}
        <View style={[styles.container, icon ? styles.left6 : styles.left15]}>
          <Marquee style={styles.content} text={children} {...marqueeProps} />
        </View>
        {operationDom}
      </View>
    );
    return this.state.show ? (
      mode === 'closable' ? (
        main
      ) : (
        <TouchableWithoutFeedback onPress={this.onClick}>
          {main}
        </TouchableWithoutFeedback>
      )
    ) : null;
  }
}
