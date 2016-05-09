import React, { PropTypes } from 'react';
import List from '../list/index';
import Radio from '../radio/index';
import SearchBar from '../search-bar/index';

function noop() {}

export default class SelectList extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.array,
    data: PropTypes.array,
    onClick: PropTypes.func,
    needSearch: PropTypes.bool,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'am-select-list',
    radioPrefixCls: 'am-radio',
    value: [],
    data: [],
    onClick: noop,
    needSearch: false,
    placeholder: '请输入关键字',
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      data: this.props.data,
      searchKey: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.searchKey !== '') {
      this._handleSearch(this.state.searchKey);
    } else {
      this.setState({
        data: nextProps.data
      });
    }
  }

  handleClick = (el) => {
    this.setState({
      value: [el]
    });
    this.props.onClick(el);
  };

  onSubmit = (value) => {
    this.handleSearch(value);
  };

  onChange = (value) => {
    this.handleSearch(value);
  };

  handleSearch = (value) => {
    this.setState({
      searchKey: value
    });
    let filterData = [];
    let data = this.props.data;
    let selectedvalue = this.state.value;

    data.map(el => {
      if (el.id === selectedvalue[0]) {
        filterData.push(el);
      } else {
        if (el.name.indexOf(value) > -1 || el.pinyin.indexOf(value) > -1 || el.py.indexOf(value) > -1 || el.id.indexOf(value) > -1) {
          filterData.push(el);
        }
      }
    });
    this.setState({
      data: filterData
    });
  };
  onClear = () => {
    this.setState({
      data: this.props.data
    });
  };

  onCancel = () => {
    this.setState({
      data: this.props.data
    });
  };

  render() {
    const { value, data } = this.state;
    const { prefixCls, radioPrefixCls, needSearch, placeholder } = this.props;
    const itemsDom = [];
    data.forEach((el, idx) => {
      itemsDom.push(<List.Item
        className={ value.length > 0 && value[0].id === el.id ? `${prefixCls}-selected ${radioPrefixCls}-item` : `${radioPrefixCls}-item`}
        key={idx}
        extra={<Radio
          value={el.id}
          checked={value.length > 0 && value[0].id === el.id}
          onChange={this.handleClick.bind(this, el)}
        />}
      >{el.name}</List.Item>);
    });

    let searchDom = null;
    if (needSearch) {
      searchDom = (<SearchBar
        placeholder={placeholder}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        onClear={this.onClear}
        onCancel={this.onCancel}
      />);
    }
    return (
      <div>
        {searchDom}
        <List style={{ paddingTop: 0 }}>
          <List.Body>
            {itemsDom}
          </List.Body>
        </List>
      </div>
    );
  }
}
