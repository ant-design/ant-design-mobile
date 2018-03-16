import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import Item from './ListItem.native';
import { ListPropsType } from './PropsType';
import listStyle from './style/index.native';

export interface ListProps extends ListPropsType {
  styles?: typeof listStyle;
  style?: StyleProp<ViewStyle>;
}

const listStyles = StyleSheet.create<any>(listStyle);

export default class List extends React.Component<ListProps, any> {
  static Item = Item;

  static defaultProps = {
    styles: listStyles,
  };

  render() {
    const {
      children,
      style,
      renderHeader,
      // tslint:disable-next-line:variable-name
      renderFooter,
      styles,
      ...restProps,
    } = this.props;

    // tslint:disable-next-line:variable-name
    const _styles = styles!;

    let headerDom: React.ReactElement<any> | null = null;
    let footerDom: React.ReactElement<any> | null = null;

    if (renderHeader) {
      let content =
        typeof renderHeader === 'function' ? renderHeader() : renderHeader;
      if (typeof content === 'string') {
        content = <Text style={_styles.Header}>{content}</Text>;
      }
      headerDom = <View>{content}</View>;
    }
    if (renderFooter) {
      let content =
        typeof renderFooter === 'function' ? renderFooter() : renderFooter;
      if (typeof content === 'string') {
        content = <Text style={_styles.Footer}>{content}</Text>;
      }
      footerDom = <View>{content}</View>;
    }

    return (
      <View {...restProps as any} style={style}>
        {headerDom}
        <View style={_styles.Body}>
          {children ? children : null}
          <View style={[_styles.BodyBottomLine as ViewStyle]} />
        </View>
        {footerDom}
      </View>
    );
  }
}
