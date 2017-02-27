import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import Item from './ListItem';
import { ListProps, BriefProps } from './PropsType';
import listStyles from './style/index';

class Brief extends React.Component<BriefProps, any> {
  render() {
    const { children, style, styles = listStyles, wrap } = this.props;

    let numberOfLines = {};

    if (wrap === false) {
      numberOfLines = {
        numberOfLines: 1,
      };
    }
    return (
      <View style={[styles.Brief]}>
        <Text style={[styles.BriefText, style]} {...numberOfLines}>{children}</Text>
      </View>
    );
  }
}

export default class List extends React.Component<ListProps, any> {
  static Item = Item;

  render() {
    let {
      children, style, renderHeader, renderFooter, styles = listStyles, ...restProps,
    } = this.props;

    let headerDom: React.ReactElement<any> | null = null;
    let footerDom: React.ReactElement<any> | null = null;

    if (renderHeader) {
      let content = typeof renderHeader === 'function' ? renderHeader() : renderHeader;
      if (typeof content === 'string') {
        content = <Text style={styles.Header}>{content}</Text>;
      }
      headerDom = <View>{content}</View>;
    }
    if (renderFooter) {
      let content = typeof renderHeader === 'function' ? renderFooter() : renderFooter;
      if (typeof content === 'string') {
        content = <Text style={styles.Footer}>{content}</Text>;
      }
      footerDom = <View>{content}</View>;
    }

    return (<View {...restProps} style={style as ViewStyle}>
      {headerDom}
      <View style={styles.Body}>
        { React.Children.map(children, (child) => React.cloneElement(child as any, { styles })) }
        <View style={[styles.BodyBottomLine]}/>
      </View>
      {footerDom}
    </View>);
  }
}

Item.Brief = Brief;
