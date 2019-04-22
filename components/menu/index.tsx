/* tslint:disable:jsx-no-multiline-js */
import classnames from 'classnames';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import Button from '../button';
import Flex from '../flex';
import List from '../list';
import { getComponentLocale } from '../_util/getLocale';
import { DataItem, MenuProps, ValueType } from './PropsType';
import SubMenu from './SubMenu';

export interface StateType {
  value?: ValueType;
  firstLevelSelectValue: string;
  height?: number;
}

export default class Menu extends React.Component<MenuProps, StateType> {
  static defaultProps = {
    prefixCls: 'am-menu',
    subMenuPrefixCls: 'am-sub-menu',
    radioPrefixCls: 'am-radio',
    multiSelectMenuBtnsCls: 'am-multi-select-btns',
    MenuSelectContanerPrefixCls: 'am-menu-select-container',
    data: [],
    level: 2,
    onChange: () => {},
    onOk: () => {},
    onCancel: () => {},
    multiSelect: false,
  };

  static contextTypes = {
    antLocale: PropTypes.object,
  };

  constructor(props: MenuProps) {
    super(props);
    this.state = {
      firstLevelSelectValue: this.getNewFsv(props),
      value: props.value,
      height: props.height,
    };
  }

  componentWillReceiveProps(nextProps: MenuProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        firstLevelSelectValue: this.getNewFsv(nextProps),
        value: nextProps.value,
      });
    }
    if (this.props.height !== nextProps.height) {
      this.setState({
        height: nextProps.height,
      });
    }
  }

  componentDidMount() {
    if (!('height' in this.props)) {
      this.setState({
        height: Math.round(document.documentElement.clientHeight / 2),
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

  getNewFsv(props: MenuProps) {
    const { value, data } = props;
    let firstValue = '';
    if (value && value.length) {
      // if has init path, chose init first value
      firstValue = value[0] as string; // this is a contract
    } else if (data && data.length && !data[0].isLeaf) {
      // chose the first menu item if it's not leaf.
      firstValue = data[0].value;
    }

    return firstValue;
  }

  onClickFirstLevelItem = (dataItem: DataItem) => {
    const { onChange } = this.props;
    this.setState({
      firstLevelSelectValue: dataItem.value,
    });
    if (dataItem.isLeaf && onChange) {
      onChange([dataItem.value]);
    }
  }

  getSelectValue = (dataItem: DataItem) => {
    const { level, multiSelect } = this.props;
    if (multiSelect) {
      const { value, firstLevelSelectValue } = this.state;
      if (value && value.length > 0) {
        if (level === 2 && value[0] !== firstLevelSelectValue) {
          /* if level is 2, when first level is reselect, reset submenu array */
          return [firstLevelSelectValue, [dataItem.value]];
        } else {
          /* if level is 1, or first level isn't changed when level is 2, just do add or delete for submenu array  */
          const chosenValues = level === 2 ? (value[1] as string[]) : value; // FIXME: hack type
          const existIndex = chosenValues.indexOf(dataItem.value);
          if (existIndex === -1) {
            chosenValues.push(dataItem.value);
          } else {
            chosenValues.splice(existIndex, 1);
          }
          return value;
        }
      } else {
        /* if value is not exist before, init value */
        return level === 2
          ? [firstLevelSelectValue, [dataItem.value]]
          : [dataItem.value];
      }
    }

    return level === 2
      ? [this.state.firstLevelSelectValue, dataItem.value]
      : [dataItem.value];
  }

  onClickSubMenuItem = (dataItem: DataItem) => {
    const { onChange } = this.props;
    const value = this.getSelectValue(dataItem);
    this.setState({ value });
    setTimeout(() => {
      // if onChange will close the menu, set a little time to show its selection state.
      if (onChange) {
        onChange(value);
      }
    }, 300);
  }

  render() {
    const {
      className,
      style,
      data = [],
      prefixCls,
      level,
      multiSelect,
      multiSelectMenuBtnsCls,
      MenuSelectContanerPrefixCls,
    } = this.props;
    const { firstLevelSelectValue, value, height } = this.state;
    let subMenuData = data; // menu only has one level as init

    if (level === 2) {
      let parent = data;
      if (firstLevelSelectValue && firstLevelSelectValue !== '') {
        parent = data.filter(
          dataItem => dataItem.value === firstLevelSelectValue,
        );
      }

      // tslint:disable-next-line:prefer-conditional-expression
      if (parent[0] && parent[0].children && parent[0].isLeaf !== true) {
        subMenuData = parent[0].children;
      } else {
        subMenuData = [];
      }
    }

    let subValue = (value && value.length > 0 && [...value]) || [];
    if (level === 2 && subValue.length > 1) {
      subValue.shift();
      if (multiSelect) {
        /* example: [[1,2,3]] -> [1,2,3] */
        subValue = subValue[0] as string[]; // FIXME: hack type
      }
    }

    const parentValue =
      value && value.length > 1 && level === 2 ? value[0] : null;
    const subSelInitItem = subMenuData
      .filter(dataItem => subValue.indexOf(dataItem.value) !== -1)
      .map(item => {
        return item.value;
      });

    let showSelect = true;
    if (level === 2 && parentValue !== firstLevelSelectValue) {
      showSelect = false;
    }

    // tslint:disable-next-line:variable-name
    const _locale = getComponentLocale(
      this.props,
      this.context,
      'Menu',
      () => require('./locale/zh_CN'),
    );

    const heightStyle =
      height !== undefined
        ? {
            height: `${height}px`,
          }
        : {};

    return (
      <Flex
        className={classnames(prefixCls, {
          [className as string]: !!className,
        })}
        style={{
          ...style,
          ...heightStyle,
        }}
        direction="column"
        align="stretch"
      >
        <Flex
          align="start"
          className={classnames({
            [MenuSelectContanerPrefixCls as string]: true,
          })}
        >
          {level === 2 && (
            <Flex.Item>
              <List role="tablist">
                {data.map((dataItem, index) => (
                  <List.Item
                    className={
                      dataItem.value === firstLevelSelectValue
                        ? `${prefixCls}-selected`
                        : ''
                    }
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
          )}
          <Flex.Item
            role="tabpanel"
            aria-hidden="false"
            className={`${MenuSelectContanerPrefixCls}-submenu`}
          >
            <SubMenu
              subMenuPrefixCls={this.props.subMenuPrefixCls}
              radioPrefixCls={this.props.radioPrefixCls}
              subMenuData={subMenuData}
              selItem={subSelInitItem}
              onSel={this.onClickSubMenuItem}
              showSelect={showSelect}
              multiSelect={multiSelect}
            />
          </Flex.Item>
        </Flex>
        {multiSelect && (
          <div className={multiSelectMenuBtnsCls}>
            <Button
              inline
              className={`${multiSelectMenuBtnsCls}-btn`}
              onClick={this.onMenuCancel}
            >
              {_locale.cancelText}
            </Button>
            <Button
              inline
              type="primary"
              className={`${multiSelectMenuBtnsCls}-btn`}
              onClick={this.onMenuOk}
            >
              {_locale.okText}
            </Button>
          </div>
        )}
      </Flex>
    );
  }
}
