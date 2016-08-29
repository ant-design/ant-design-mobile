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
        <List >
          <List.Header>表单单选框，普通列表中单选</List.Header>
          <List.Body>
            <RadioItem
              checked={this.state.value === 1}
              onChange={this.handleChange}
              disabled={this.state.disabled}
            >
              使用 Ant Desgin Component
            </RadioItem>
            <RadioItem
              checked={this.state.value === 2}
              onChange={this.handleChange2}
              disabled={this.state.disabled}
            >
              使用 Ant Desgin Component
            </RadioItem>
            <RadioItem
              checked
              onChange={this.handleChange}
              disabled
            >
              个性化调整disabled
            </RadioItem>
            <RadioItem
              checked={false}
              onChange={this.handleChange}
              disabled
            >
              个性化调整disabled
            </RadioItem>
          </List.Body>
        </List>
      </div>
    );
  },
});

ReactDOM.render(<Test />, mountNode);
````
