import React from 'react';
import { ListWebProps, ListNativeProps, ListItemWebProps, ListItemNativeProps } from './PropsType';

export class ListItem extends React.Component<ListItemWebProps | ListItemNativeProps, any> {}

export default class List extends React.Component<ListWebProps | ListNativeProps, any> {
  static Item: ListItem;
}
