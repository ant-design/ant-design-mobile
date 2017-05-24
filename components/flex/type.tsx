import React from 'react';
import { FlexWebProps, FlexNativeProps, FlexItemWebProps, FlexItemNativeProps } from './PropsType';

export default class Flex extends React.Component<FlexWebProps | FlexNativeProps, any> {
  static Item: React.Component<FlexItemWebProps | FlexItemNativeProps, any>;
}
