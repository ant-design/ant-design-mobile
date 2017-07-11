import React from 'react';
import ReactNative from 'react-native';

// https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-311923766
type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
// typescript 2.4+
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

export interface ListProps {
  renderHeader?: Function | JSX.Element;
  renderFooter?: Function | JSX.Element;
}

export interface ListWebProps extends ListProps, React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
}

export interface ListNativeProps extends ListProps,
  Omit<ReactNative.ViewProperties, 'ref'> {
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
  wrap?: boolean; // overwrite React.HTMLAttributes.wrap: string
}

export interface ListItemWebProps extends ListItemProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'wrap'> {
  prefixCls?: string;
  activeStyle?: React.CSSProperties;
  error?: boolean;
  platform?: 'android' | 'ios' | 'cross';
}

export interface ListItemNativeProps extends ListItemProps,
  // legacy version @types/react-native ref is buggy
  Omit<ReactNative.ViewProperties, 'ref'>,
  Pick<ReactNative.TouchableHighlightProperties, 'onPressIn' | 'onPressOut'> {
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
  Pick<React.HTMLAttributes<HTMLDivElement>, 'style' | 'children'> {

}

export interface BriefNativeProps extends BriefProps,
  Pick<ReactNative.TextProperties, 'style' | 'children'> {
  wrap?: boolean;
  styles?: {
    Brief: ReactNative.ViewStyle,
    BriefText: ReactNative.TextStyle,
  };
}
