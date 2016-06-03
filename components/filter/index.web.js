import React, { PropTypes } from 'react';
import classNames from 'classnames';
import objectAssign from 'object-assign';
import SelectList from '../select-list';
import List from '../list';
import Flex from '../flex';

function noop() {}

export default class Filter extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    data: PropTypes.array,
    value: PropTypes.array,
    onChange: PropTypes.func,
    height: PropTypes.number,
  };

  static defaultProps = {
    prefixCls: 'am-filter',
    value: [],
    data: [],
    onChange: noop,
  };

  constructor(props) {
    super(props);

    const { data, value } = this.props;
    let selectListData = (data.filter((el) => { return el.value === (value.length > 0 && value[0] || null); }))[0].children || [];
    selectListData.map((el) => {
      el.id = el.value;
      el.name = el.label;
      return el;
    });
    this.state = {
      selectListData,
      firstValue: value[0] || '',
    };
  }

  onClickListItem = (el) => {
    if (el.isAll) {
      this.setState({
        firstValue: el.value,
        selectListData: []
      }, () => {
        this.props.onChange([el.value]);
      });
    } else {
      this.setState({
        firstValue: el.value,
        selectListData: el.children.map((el2) => {
          el2.id = el2.value;
          el2.name = el2.label;
          return el2;
        })
      });
    }
  };

  onClickSelectListItem = (el) => {
    setTimeout(() => {
      this.props.onChange([this.state.firstValue, el.value]);
    }, 300);
  };

  render() {
    let { className, data, prefixCls, height, value, style } = this.props;
    if (!height) {
      height = document.documentElement.clientHeight / 2;
    }

    let heightStyle = {
      height: `${height}px`,
      overflowY: 'scroll'
    };

    style = objectAssign(style || {}, heightStyle);

    let { selectListData, firstValue } = this.state;

    const wrapCls = classNames({
      [prefixCls]: true,
      [className]: className
    });

    let listContent = [];
    data.forEach((el, index) => {
      listContent.push(<List.Item
        className={el.value === firstValue ? `${prefixCls}-selected` : ''}
        onClick={this.onClickListItem.bind(this, el)}
        key={`listitem-1-${index}`}
      >{el.label}</List.Item>);
    });

    return (
      <div
        className={wrapCls}
        style={style}
      >
        <Flex align="top">
          <Flex.Item style={heightStyle}>
            <List>
              <List.Body>
                {listContent}
              </List.Body>
            </List>
          </Flex.Item>
          <Flex.Item style={heightStyle}>
            <SelectList
              value={selectListData.filter((el) => {
                return el.value === (value.length && value[1]);
              })}
              data={selectListData}
              onChange={this.onClickSelectListItem}
            />
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}
