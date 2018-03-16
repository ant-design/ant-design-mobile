/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ViewStyle,
} from 'react-native';
import {
  BriefProps as BriefBasePropsType,
  ListItemPropsType,
} from './PropsType';
import listItemStyle from './style/index.native';

export interface ListItemProps extends ListItemPropsType {
  styles?: {
    underlayColor: {};
    Content: {};
    column: {};
    Extra: {};
    Arrow: {};
    ArrowV: {};
    Item: {};
    Thumb: {};
    multipleThumb: {};
    Line: {};
    multipleLine: {};
  };
  onClick?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  style?: StyleProp<ViewStyle>;
}

export interface BriefProps extends BriefBasePropsType {
  styles?: {
    Brief: {};
    BriefText: {};
  };
}

const listStyles = StyleSheet.create<any>(listItemStyle);
const listItemStyles: any = StyleSheet.create<any>(listItemStyle);

export class Brief extends React.Component<BriefProps, any> {
  static defaultProps = {
    styles: listStyles,
  };

  render() {
    const { children, style, styles, wrap } = this.props;

    let numberOfLines = {};

    if (wrap === false) {
      numberOfLines = {
        numberOfLines: 1,
      };
    }
    return (
      <View style={[styles!.Brief]}>
        <Text style={[styles!.BriefText, style]} {...numberOfLines}>
          {children}
        </Text>
      </View>
    );
  }
}

export default class Item extends React.Component<ListItemProps, any> {
  static defaultProps: Partial<ListItemProps> = {
    multipleLine: false,
    wrap: false,
    styles: listItemStyles,
  };
  static Brief = Brief;
  render() {
    const {
      styles,
      children,
      multipleLine,
      thumb,
      extra,
      arrow,
      style,
      onClick,
      onPressIn,
      onPressOut,
      wrap,
      disabled,
      align,
      ...restProps,
    } = this.props;
    const itemStyles = styles!; // assert none-null none-undefined

    let numberOfLines = {};
    if (wrap === false) {
      numberOfLines = {
        numberOfLines: 1,
      };
    }

    let underlayColor = {};

    if (!disabled && onClick) {
      underlayColor = {
        underlayColor: StyleSheet.flatten(itemStyles.underlayColor)
          .backgroundColor,
        activeOpacity: 0.5,
      };
    } else {
      underlayColor = {
        activeOpacity: 1,
      };
    }

    let alignStyle = {};

    if (align === 'top') {
      alignStyle = {
        alignItems: 'flex-start',
      };
    } else if (align === 'bottom') {
      alignStyle = {
        alignItems: 'flex-end',
      };
    }

    let contentDom;
    if (Array.isArray(children)) {
      const tempContentDom: any[] = [];
      children.forEach((el, index) => {
        if (React.isValidElement(el)) {
          tempContentDom.push(el);
        } else {
          tempContentDom.push(
            <Text
              style={[itemStyles.Content]}
              {...numberOfLines}
              key={`${index}-children`}
            >
              {el}
            </Text>,
          );
        }
      });
      contentDom = <View style={[itemStyles.column]}>{tempContentDom}</View>;
    } else {
      if (children && React.isValidElement(children)) {
        contentDom = <View style={[itemStyles.column]}>{children}</View>;
      } else {
        contentDom = (
          <View style={[itemStyles.column]}>
            <Text style={[itemStyles.Content]} {...numberOfLines}>
              {children}
            </Text>
          </View>
        );
      }
    }

    let extraDom;
    if (extra) {
      extraDom = (
        <View style={[itemStyles.column]}>
          <Text style={[itemStyles.Extra]} {...numberOfLines}>
            {extra}
          </Text>
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
                  style={[itemStyles.Extra]}
                  key={`${index}-children`}
                >
                  {el}
                </Text>,
              );
            } else {
              tempExtraDom.push(el);
            }
          });
          extraDom = <View style={[itemStyles.column]}>{tempExtraDom}</View>;
        } else {
          extraDom = extra;
        }
      }
    }

    const arrEnum = {
      horizontal: (
        <Image
          source={require('../style/images/arrow.png')}
          style={itemStyles.Arrow}
        />
      ),
      down: (
        <Image
          source={require('../style/images/arrow-down.png')}
          style={itemStyles.ArrowV}
        />
      ),
      up: (
        <Image
          source={require('../style/images/arrow-up.png')}
          style={itemStyles.ArrowV}
        />
      ),
    };

    const itemView = (
      <View {...restProps} style={[itemStyles.Item, style]}>
        {typeof thumb === 'string' ? (
          <Image
            source={{ uri: thumb }}
            style={[itemStyles.Thumb, multipleLine && itemStyles.multipleThumb]}
          />
        ) : (
          thumb
        )}
        <View
          style={[
            itemStyles.Line,
            multipleLine && itemStyles.multipleLine,
            multipleLine && alignStyle,
          ]}
        >
          {contentDom}
          {extraDom}
          {arrow
            ? (arrEnum as any)[arrow] || <View style={itemStyles.Arrow} />
            : null}
        </View>
      </View>
    );

    return (
      <TouchableHighlight
        {...underlayColor}
        onPress={onClick ? onClick : undefined}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        {itemView}
      </TouchableHighlight>
    );
  }
}
