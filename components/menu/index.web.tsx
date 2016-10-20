import React from 'react';
import classNames from 'classnames';
import objectAssign from 'object-assign';
import SubMenu from './SubMenu.web';
import List from '../list';
import Flex from '../flex';
import { MenuProps, MenuState } from './propTypes';

export default class Menu extends React.Component<MenuProps, MenuState> {
  static defaultProps = {
    prefixCls: 'am-menu',
    value: [],
    data: [],
    level: 2,
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    const { data, value, level } = props;

    if (level !== 2) {
      this.state = {
        SubMenuData: data,
      };
      return;
    }

    if (value.length > 0) {
      const SubMenuData = data.filter(
        el => el.value === (value.length > 0 && value[0] || null)
      )[0].children || [];
      this.state = {
        SubMenuData,
        firstValue: value[0] || '',
      };
      return;
    }

    const SubMenuData = data[0].children || [];
    if (data[0].isLeaf) {
      this.state = {
        SubMenuData: [],
        firstValue: '',
      };
    } else {
      this.state = {
        SubMenuData,
        firstValue: data[0].value,
      };
    }
  }

  onClickListItem = (el) => {
    if (el.isLeaf === true) {
      this.setState({
        firstValue: el.value,
        SubMenuData: [],
      }, () => {
        if (this.props.onChange) {
          this.props.onChange([el.value]);
        }
      });
    }
    this.setState({
      firstValue: el.value,
      SubMenuData: el.children || [],
    });
  };

  onClickSubMenuItem = (el) => {
    const { level, onChange } = this.props;
    setTimeout(() => {
      if (onChange) {
        onChange(level === 2 ? [this.state.firstValue, el.value] : [el.value]);
      }
    }, 300);
  };

  render() {
    const { className, data = [], prefixCls, value = [], level, style } = this.props;
    let { height } = this.props;

    if (!height) {
      height = document.documentElement.clientHeight / 2;
    }

    const heightStyle = {
      height: `${Math.round(height)}px`,
      overflowY: 'scroll',
    };

    const { SubMenuData, firstValue } = this.state;

    const wrapCls = classNames({
      [prefixCls as string]: true,
      [className as string]: !!className,
    });

    const listContent = data.map((el, index) => (
      <List.Item
        className={el.value === firstValue ? `${prefixCls}-selected` : ''}
        onClick={this.onClickListItem.bind(this, el)}
        key={`listitem-1-${index}`}
      >
        {el.label}
      </List.Item>
    ));

    return (
      <div
        className={wrapCls}
        style={objectAssign({}, style, heightStyle)}
      >
        <Flex align="top">
          {level === 2 ? (
            <Flex.Item style={heightStyle}>
              <List>
                {listContent}
              </List>
            </Flex.Item>
          ) : null}
          <Flex.Item style={heightStyle}>
            <SubMenu
              value={SubMenuData.filter(
                el => el.value === (value.length && value[value.length - 1])
              )}
              data={SubMenuData}
              onChange={this.onClickSubMenuItem}
            />
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}
