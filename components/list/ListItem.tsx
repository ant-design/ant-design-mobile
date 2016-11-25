import React from 'react';
import { Image, View, Platform, TouchableHighlight, Text } from 'react-native';
import { ListItemProps, BriefProps } from './PropsType';
import listItemStyles from './style/index';
import variables from '../style/themes/default';

function noop() {
}

class Brief extends React.Component<BriefProps, any> {
  render() {
    const { children, style, styles = listItemStyles } = this.props;
    return (
      <View style={[styles.Brief]}>
        <Text style={[styles.BriefText, style]} numberOfLines={1}>{children}</Text>
      </View>
    );
  }
}

export default class Item extends React.Component<ListItemProps, any> {
  static defaultProps = {
    error: false,
    multipleLine: false,
    wrap: false,
  };
  static Brief: any;
  render() {
    const {
      styles = listItemStyles,
      children, multipleLine, thumb, extra, arrow = '', style,
      onClick = noop, onPressIn = noop, onPressOut = noop,
    } = this.props;

    let line = 1;
    let contentDom;
    if (Array.isArray(children)) {
      const tempContentDom: any[] = [];
      children.forEach((el, index) => {
        if (React.isValidElement(el)) {
          tempContentDom.push(el);
        } else {
          tempContentDom.push(<Text style={[styles.Content]} numberOfLines={1} key={`${index}-children`}>{el}</Text>);
        }
      });
      line = children.length;
      contentDom = <View style={[styles.column]}>{tempContentDom}</View>;
    } else {
      if (React.isValidElement(children)) {
        contentDom = <View style={[styles.column]}>{children}</View>;
      } else {
        contentDom = (
          <View style={[styles.column]}>
            <Text style={[styles.Content]} numberOfLines={1}>{children}</Text>
          </View>
        );
      }
    }

    let extraDom;
    if (extra) {
      extraDom = (
        <View style={[styles.column]}>
          <Text style={[styles.Extra]} numberOfLines={1}>{extra}</Text>
        </View>
      );
      if (React.isValidElement(extra)) {
        const extraChildren = (extra.props as any).children;
        if (Array.isArray(extraChildren)) {
          const tempExtraDom: any[] = [];
          extraChildren.forEach((el, index) => {
            if (typeof el === 'string') {
              tempExtraDom.push(
                <Text
                  numberOfLines={1}
                  style={[styles.Extra]}
                  key={`${index}-children`}
                >
                  {el}
                </Text>
              );
            } else {
              tempExtraDom.push(el);
            }
          });
          line = extraChildren.length > line ? extraChildren.length : line;
          extraDom = (
            <View style={[styles.column]}>
              {tempExtraDom}
            </View>
          );
        } else {
          extraDom = extra;
        }
      }
    }

    let itemHeight;
    if (line === 2) {
      if (Platform.OS === 'android') {
        itemHeight = 60 + 2 * variables.v_spacing_sm;
      } else {
        itemHeight = 60 + variables.v_spacing_sm;
      }
    } else if (line > 2) {
      if (Platform.OS === 'android') {
        itemHeight = variables.list_item_height
          + (variables.font_size_subhead + variables.v_spacing_sm) * (line - 1)
          + 2 * variables.v_spacing_sm
          - 3;
      } else {
        itemHeight = variables.list_item_height
          + (variables.font_size_subhead + variables.v_spacing_sm) * (line - 1)
          + variables.v_spacing_sm
          - 3;
      }
    }

    const arrEnum = {
      horizontal: <Image source={require('../style/images/arrow.png')} style={styles.Arrow} />,
      down: <Image source={require('../style/images/arrow-down.png')} style={styles.ArrowV} />,
      up: <Image source={require('../style/images/arrow-up.png')} style={styles.ArrowV} />,
    };

    const itemView = (
      <View {...this.props} style={[styles.Item, line > 1 && { height: itemHeight }, style]}>
        {typeof thumb === 'string' ? (
          <Image
            source={{ uri: thumb }}
            style={[styles.Thumb, multipleLine && styles.multipleLine.Thumb]}
          />
        ) : thumb}
        <View style={[styles.Line, multipleLine && styles.multipleLine.Line]}>
          {contentDom}
          {extraDom}
          {arrEnum[arrow] || <View style={styles.Arrow} />}
        </View>
      </View>
    );

    return (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor={styles.underlayColor}
        onPress={onClick}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        {itemView}
      </TouchableHighlight>
    );
  }
}

Item.Brief = Brief;
