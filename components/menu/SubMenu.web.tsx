import React from 'react';
import classNames from 'classnames';
import List from '../list/index';
import Radio from '../radio/Radio.web';
import { SubMenuProps, SubMenuState } from './PropsType';

export default class SubMenu extends React.Component<SubMenuProps, SubMenuState> {
  static defaultProps = {
    prefixCls: 'am-sub-menu',
    radioPrefixCls: 'am-radio',
    value: [],
    data: [],
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      data: this.props.data,
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('data' in nextProps) {
      this.setState({
        data: nextProps.data,
      });
    }
  }

  onClick = (el) => {
    this.setState({
      value: [el],
    });
    if (this.props.onChange) {
      this.props.onChange(el);
    }
  };

  render() {
    const { value = [], data = [] } = this.state;
    const { className, prefixCls, radioPrefixCls } = this.props;

    const subMenuCls = classNames({
      [`${prefixCls}`]: true,
      [className as string]: className,
    });

    const itemsDom: any = [];
    data.forEach((el, idx) => {
      const listItemCls = classNames({
        [`${radioPrefixCls}-item`]: true,
        [`${prefixCls}-item-selected`]: value.length > 0 && value[0].value === el.value,
        [`${prefixCls}-item-disabled`]: el.disabled,
      });
      itemsDom.push(<List.Item
        className={listItemCls}
        key={idx}
        extra={<Radio
          checked={value.length > 0 && value[0].value === el.value}
          disabled={el.disabled}
          onChange={this.onClick.bind(this, el)}
        />}
      >{el.label}</List.Item>);
    });

    return (
      <List style={{ paddingTop: 0 }} className={subMenuCls}>
        {itemsDom}
      </List>
    );
  }
}
