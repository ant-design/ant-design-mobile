import React, { PropTypes } from 'react';
import List from '../list/index';
import Search from '../search/index';

function noop() {}

let ListSelector = React.createClass({
  propTypes: {
    value: PropTypes.array,
    data: PropTypes.array,
    source: PropTypes.string,
    onClick: PropTypes.func,
    needSearch: PropTypes.bool,
  },
  getDefaultProps(){
    return {
      value: [],
      data: [],
      onClick: noop,
      needSearch: true
    };
  },
  getInitialState() {
    return {
      value: this.props.value,
      data: this.props.data,
      source: this.props.source,
    };
  },
  _handleClick(el) {
    this.setState({
      value: [el]
    });
    this.props.onClick(el);
  },
  _onSubmit(value) {
    this._handleSearch(value);
  },
  _onChange(value) {
    this._handleSearch(value);
  },
  _handleSearch(value) {
    let filterData = [];
    let data = this.props.data;
    let selectedvalue = this.state.value;

    data.map(el => {
      if(el.id === selectedvalue[0]) {
        filterData.push(el);
      } else {
        if(el.name.indexOf(value) > -1 || el.pinyin.indexOf(value) > -1 || el.py.indexOf(value) > -1 || el.id.indexOf(value) > -1) {
          filterData.push(el);
        }
      }
    });

    this.setState({
      data: filterData
    });
  },
  _onClear(value) {
    this.setState({
      data: this.props.data
    });
  },
  _onCancel(value) {
    this.setState({
      data: this.props.data
    });
  },
  render(){
    const { value, data } = this.state;
    const itemsDom = [];
    data.forEach((el, idx) => {
      if(value.length > 0 && value[0].id === el.id) {
        itemsDom.push(<div key={idx + 'div'} className="am-list-selected"><List.Item
          key={idx}
          extra={<span></span>}
          onClick={this._handleClick.bind(this, el)}
        >{el.name}</List.Item></div>);
      } else {
        itemsDom.push(<List.Item
          key={idx}
          onClick={this._handleClick.bind(this, el)}
        >{el.name}</List.Item>);
      }
    });

    let searchDom = null;
    if(this.props.needSearch) {
      searchDom = (<Search
        placeholder="请输入关键字"
        onSubmit={this._onSubmit}
        onChange={this._onChange}
        onClear={this._onClear}
        onCancel={this._onCancel}
      />);
    }
    return (
      <div>
        {searchDom}
        <List style={{paddingTop:'0'}}>
          <List.Body>
            {itemsDom}
          </List.Body>
        </List>
      </div>
    );
  }
});

export default ListSelector;
