import React from 'react';
import ReactNative from 'react-native';

export interface ListProps {
  renderHeader?: Function | JSX.Element;
  renderFooter?: Function | JSX.Element;
}

export interface ListWebProps extends ListProps, React.HTMLProps<HTMLDivElement> {
  prefixCls?: string;
}

export interface ListNativeProps extends ListProps, ReactNative.ViewProperties {
  ref?: any
  styles?: {
    Header?: ReactNative.TextStyle;
    Footer?: ReactNative.TextStyle;
    Body?: ReactNative.ViewStyle;
    BodyBottomLine?: ReactNative.ViewStyle;
  };
}

export interface ListItemProps {
  align?: 'top'|'middle'|'bottom';
  disabled?: boolean;
  multipleLine?: boolean;
  thumb?: React.ReactNode;
  extra?: React.ReactNode;
  arrow?: 'horizontal'|'down'|'up'|'empty'|'';
  wrap?: string; // overwrite React.HTMLAttributes.wrap: string
}

export interface ListItemWebProps extends ListItemProps, React.HTMLProps<HTMLDivElement> {
  prefixCls?: string;
  activeStyle?: React.CSSProperties;
  error?: boolean;
  platform?: 'android' | 'ios' | 'cross';
}

export interface ListItemNativeProps extends ListItemProps,
  ReactNative.ViewProperties,
  Pick<ReactNative.TouchableHighlightProperties, 'onPressIn' | 'onPressOut'> {
  ref?: any
  styles?: {
    underlayColor: string,
    Content: ReactNative.TextStyle,
    column: ReactNative.ViewStyle,
    Extra: ReactNative.TextStyle,
    Arrow: ReactNative.ImageStyle,
    ArrowV: ReactNative.ImageStyle,
    Item: ReactNative.ViewStyle,
    Thumb: ReactNative.ImageStyle,
    multipleThumb: ReactNative.ImageStyle,
    Line: ReactNative.ViewStyle,
    multipleLine: ReactNative.ViewStyle,
  };
  onClick?: ReactNative.TouchableHighlightProperties['onPress'];
}

export interface BriefProps {

}

export interface BriefWebProps extends BriefProps,
  Pick<React.HTMLAttributes<HTMLDivElement>, 'style'> {

}

export interface BriefNativeProps extends BriefProps,
  Pick<ReactNative.TextProperties, 'style'> {
  wrap?: boolean;
  styles?: {
    Brief: ReactNative.ViewStyle,
    BriefText: ReactNative.TextStyle,
  };
}
