import React from 'react';
import { ListWebProps, ListNativeProps, ListItemWebProps, ListItemNativeProps } from './PropsType';

export default class List extends React.Component<ListWebProps | ListNativeProps, any> {
  static Item: React.Component<ListItemWebProps | ListItemNativeProps, any>;
}
