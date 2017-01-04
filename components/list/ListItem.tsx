import React from 'react';
import { Image, View, TouchableHighlight, Text } from 'react-native';
import { ListItemProps, BriefProps } from './PropsType';
import listItemStyles from './style/index';

function noop() {
}

class Brief extends React.Component<BriefProps, any> {
  render() {
    const { children, style, styles = listItemStyles, wrap } = this.props;

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
      onClick = noop, onPressIn = noop, onPressOut = noop, wrap, disabled,
    } = this.props;

    let numberOfLines = {};
    if (wrap === false) {
      numberOfLines = {
        numberOfLines: 1,
      };
    }

    let underlayColor = {};

    if (!disabled && onClick !== noop) {
      underlayColor = {
        underlayColor: styles.underlayColor,
      };
    }

    let line = 1;
    let contentDom;
    if (Array.isArray(children)) {
      const tempContentDom: any[] = [];
      children.forEach((el, index) => {
        if (React.isValidElement(el)) {
          tempContentDom.push(el);
        } else {
          tempContentDom.push(<Text style={[styles.Content]} {...numberOfLines} key={`${index}-children`}>{el}</Text>);
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
            <Text style={[styles.Content]} {...numberOfLines}>{children}</Text>
          </View>
        );
      }
    }

    let extraDom;
    if (extra) {
      extraDom = (
        <View style={[styles.column]}>
          <Text style={[styles.Extra]} {...numberOfLines}>{extra}</Text>
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
                  {...numberOfLines}
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

    const arrEnum = {
      horizontal: <Image source={require('../style/images/arrow.png')} style={styles.Arrow} />,
      down: <Image source={require('../style/images/arrow-down.png')} style={styles.ArrowV} />,
      up: <Image source={require('../style/images/arrow-up.png')} style={styles.ArrowV} />,
    };

    const itemView = (
      <View {...this.props} style={[styles.Item, style]}>
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
        activeOpacity={0.95}
        {...underlayColor}
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
