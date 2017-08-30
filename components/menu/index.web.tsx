/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import classNames from 'classnames';
import List from '../list/index.web';
import Flex from '../flex/index.web';
import SubMenu from './SubMenu.web';
import Button from '../button/index.web';
import { MenuProps } from './PropsType';

export default class Menu extends React.Component<MenuProps, any> {
  static defaultProps = {
    prefixCls: 'am-menu',
    subMenuPrefixCls: 'am-sub-menu',
    radioPrefixCls: 'am-radio',
    data: [],
    level: 2,
    onChange: () => {},
    onOk: () => {},
    onCancel: () => {},
    multSelect: false,
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

  onMenuOk = () => {
    const { onOk } = this.props;
    if (onOk) {
      onOk(this.state.value);
    }
  }

  onMenuCancel = () => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
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
    const { level, onChange, multSelect } = this.props;
    let rtn;
    if (multSelect) {
      const { value, firstLevelSelectValue } = this.state;
      if (value && value.length > 0) {
        if (level === 2 && value[0] !== firstLevelSelectValue) {  // 在二级菜单情况下，首级菜单重新选择，则重置数组
          rtn = [firstLevelSelectValue, dataItem.value];
        } else {  // 菜单为一级，或者二级菜单首级选项没有变化的情况，做增减操作
          const existIndex = value.indexOf(dataItem.value);
          if (existIndex === -1) {  // 添加选项
            value.push(dataItem.value);
          } else { // 删除选项
            value.splice(existIndex, 1);
          }
          rtn = value;
        }
      } else { // 之前不存在value,初始化value
        rtn = (level === 2) ? [firstLevelSelectValue, dataItem.value] : rtn = [dataItem.value];
      }
    } else {  // 单选菜单
      rtn = (level === 2) ? [this.state.firstLevelSelectValue, dataItem.value] : [dataItem.value];
    }
    this.setState({ value: rtn });
    setTimeout(() => {
      if (onChange) {
        onChange(rtn);
      }
    }, 300);
  }

  render() {
    const { className, style, height, data = [], prefixCls, level, multSelect } = this.props;
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

    let subValue = value && (value.length > 0) && [...value] || [];
    if (level === 2) { // 二级菜单，需要删除一级的value
      subValue.shift();
    }

    const parentValue = (value && (value.length > 1) && level === 2) ? value[0] : null;
    const subSelInitItem = subMenuData.filter(dataItem => subValue.indexOf(dataItem.value) !== -1).map((item) => {
      return item.value;
    });

    let showSelect = true;
    if (level === 2 && parentValue !== firstLevelSelectValue) {
      showSelect = false;
    }

    const menuHeight = Math.round(height || document.documentElement.clientHeight / 2);
    const ListHeight = menuHeight -
      (multSelect ?
      parseInt(document.getElementsByTagName('html')[0].style.fontSize as string, 10)
      : 0);

    return (
      <div
        className={classNames({
          [prefixCls as string]: true,
          [className as string]: !!className,
        })}
        style={{
          height: `${menuHeight}px`,
        }}
      >
      <div
        style={{
          ...style,
          height: `${ListHeight}px`,
        }}
      >
        <Flex align="top">
          {level === 2 &&
            <Flex.Item style={{ height: `${ListHeight}px` }}>
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
          }
          <Flex.Item role="tabpanel" aria-hidden="false" style={{ height: `${ListHeight}px` }}>
            <SubMenu
              subMenuPrefixCls={this.props.subMenuPrefixCls}
              radioPrefixCls={this.props.radioPrefixCls}
              subMenuData={subMenuData}
              selItem={subSelInitItem}
              onSel={this.onClickSubMenuItem}
              showSelect={showSelect}
              multSelect={multSelect}
            />
          </Flex.Item>
        </Flex>
      </div>
      {multSelect &&
        (<div className="am-mult-select-btns">
          <Button
            inline
            className="am-mult-select-btns-btn"
            onClick={this.onMenuCancel}
          >
            取消
          </Button>
          <Button
            inline
            type="primary"
            className="am-mult-select-btns-btn"
            onClick={this.onMenuOk}
          >
            确定
          </Button>
        </div>)}
      </div>
    );
  }
}
