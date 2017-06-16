import React from 'react';
import { FlexWebProps, FlexNativeProps, FlexItemWebProps, FlexItemNativeProps } from './PropsType';

export class FlexItem extends React.Component<FlexItemWebProps | FlexItemNativeProps, any> {}

export default class Flex extends React.Component<FlexWebProps | FlexNativeProps, any> {
  static Item: FlexItem;
}
