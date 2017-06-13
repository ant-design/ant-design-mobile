/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import classNames from 'classnames';
import assign from 'object-assign';
import List from '../list/index.web';
import Flex from '../flex/index.web';
import SubMenu from './SubMenu.web';
import { MenuProps } from './PropsType';

export default class Menu extends React.Component<MenuProps, any> {
  static defaultProps = {
    prefixCls: 'am-menu',
    subMenuPrefixCls: 'am-sub-menu',
    radioPrefixCls: 'am-radio',
    data: [],
    level: 2,
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      firstLevelSelectValue: this.getNewFsv(props),
      value: props.value,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        firstLevelSelectValue: this.getNewFsv(nextProps),
        value: nextProps.value,
      });
    }
  }

  getNewFsv(props) {
    const { value, data } = props;
    let firstValue = '';
    if (value && value.length) {  // if has init path, chose init first value
      firstValue = value[0];
    } else if (!data[0].isLeaf) {  // chose the first menu item if it's not leaf.
      firstValue = data[0].value;
    }

    return firstValue;
  }

  onClickFirstLevelItem = (dataItem) => {
    const { onChange } = this.props;
    this.setState({
      firstLevelSelectValue: dataItem.value,
    });
    if (dataItem.isLeaf && onChange) {
      onChange([dataItem.value]);
    }
  }

  onClickSubMenuItem = (dataItem) => {
    const { level, onChange } = this.props;
    const value = (level === 2) ? [this.state.firstLevelSelectValue, dataItem.value] : [dataItem.value];
    this.setState({ value });
    setTimeout(() => {
      if (onChange) {
        onChange(value);
      }
    }, 300);
  }

  render() {
    const { className, style, height, data = [], prefixCls, level } = this.props;
    const { firstLevelSelectValue, value } = this.state;
    let subMenuData = data; // menu only has one level as init

    if (level === 2) {
      let parent = data;
      if (firstLevelSelectValue && firstLevelSelectValue !== '') {
        parent = data.filter(dataItem => dataItem.value === firstLevelSelectValue);
      }

      if (parent[0] && parent[0].children && parent[0].isLeaf !== true ) {
        subMenuData = parent[0].children;
      } else {
        subMenuData = [];
      }
    }

    const subValue = value && (value.length > 0) && value[value.length - 1];
    const parentValue = (value && (value.length > 1)) ? value[0] : null;
    const subSelInitItem = subMenuData.filter(dataItem => dataItem.value === subValue);

    let showSelect = true;
    if (level === 2 && parentValue !== firstLevelSelectValue) {
      showSelect = false;
    }

    const heightStyle = {
      height: `${Math.round(height || document.documentElement.clientHeight / 2)}px`,
    };

    return (
      <div
        className={classNames({
          [prefixCls as string]: true,
          [className as string]: !!className,
        })}
        style={assign({}, style, heightStyle)}
      >
        <Flex align="top">
          {level === 2 ? (
            <Flex.Item style={heightStyle}>
              <List role="tablist">
                {data.map((dataItem, index) => (
                  <List.Item
                    className={dataItem.value === firstLevelSelectValue ? `${prefixCls}-selected` : ''}
                    onClick={() => this.onClickFirstLevelItem(dataItem)}
                    key={`listitem-1-${index}`}
                    role="tab"
                    aria-selected={dataItem.value === firstLevelSelectValue}
                  >
                    {dataItem.label}
                  </List.Item>
                ))}
              </List>
            </Flex.Item>
          ) : null}
          <Flex.Item style={heightStyle} role="tabpanel" aria-hidden="false">
            <SubMenu
              subMenuPrefixCls={this.props.subMenuPrefixCls}
              radioPrefixCls={this.props.radioPrefixCls}
              subMenuData={subMenuData}
              selItem={subSelInitItem}
              onSel={this.onClickSubMenuItem}
              showSelect={showSelect}
            />
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}
