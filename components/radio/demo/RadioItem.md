---
order: 1
title: 列表单选框
---

Radio.RadioItem

````jsx
import { List, Radio } from 'antd-mobile';

const RadioItem = Radio.RadioItem;

const Test = React.createClass({
  getInitialState() {
    return {
      disabled: false,
      value: 1,
    };
  },
  handleChange(e) {
    if (e.target.checked) {
      this.setState({
        value: 1,
      });
    }
  },
  handleChange2(e) {
    if (e.target.checked) {
      this.setState({
        value: 2,
      });
    }
  },
  render() {
    return (
      <div>
        <List
          title="请选择学历"
        >
          <List.Body>
            <RadioItem
              checked={this.state.value === 1}
              onChange={this.handleChange}
              disabled={this.state.disabled}
            >
              博士
            </RadioItem>
            <RadioItem
              checked={this.state.value === 2}
              onChange={this.handleChange2}
              disabled={this.state.disabled}
            >
              硕士
            </RadioItem>
            <RadioItem
              checked={this.state.value === 3}
              onChange={(e) => {
                if (e.target.checked) {
                  this.setState({ value: 3 });
                }
              }}
            >
              本科
            </RadioItem>
            <RadioItem
              checked={this.state.value === 4}
              onChange={(e) => {
                if (e.target.checked) {
                  this.setState({ value: 4 });
                }
              }}
            >
              高中
            </RadioItem>
            <RadioItem
              checked={this.state.value === 5}
              onChange={(e) => {
                if (e.target.checked) {
                  this.setState({ value: 5 });
                }
              }}
            >
              初中
            </RadioItem>
            <RadioItem
              checked={this.state.value === 6}
              onChange={(e) => {
                if (e.target.checked) {
                  this.setState({ value: 6 });
                }
              }}
              disabled
            >
              小学
            </RadioItem>
          </List.Body>
        </List>
      </div>
    );
  },
});

ReactDOM.render(<Test />, mountNode);
````
