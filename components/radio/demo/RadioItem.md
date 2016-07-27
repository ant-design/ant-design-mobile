---
order: 1
title: 列表单选框
---

Radio.RadioItem

````jsx
import { List, Radio } from 'antd-mobile';

const RadioItem = Radio.RadioItem;

let Test = React.createClass({
  getInitialState() {
    return {
      disabled: false,
      checked: null,
      r: 'a',
      s: 'e',
    };
  },
  handleChange(e) {
    this.setState({
      r: e.target.value,
    });
  },
  handleChange2(e) {
    this.setState({
      s: e.target.value,
    });
  },
  render() {
    return (
      <div>
        <List >
          <List.Header>表单单选框，普通列表中单选</List.Header>
          <List.Body>
            <RadioItem
              value="a"
              checked={this.state.r === 'a'}
              onChange={this.handleChange}
              disabled={this.state.disabled}
            >
              使用 Ant Desgin Component
            </RadioItem>
            <RadioItem
              value="b"
              checked={this.state.r === 'b'}
              onChange={this.handleChange}
              disabled={this.state.disabled}
            >
              使用 Ant Desgin Component
            </RadioItem>
            <RadioItem
              value="c"
              checked
              onChange={this.handleChange}
              disabled
            >
              个性化调整disabled
            </RadioItem>
            <RadioItem
              value="d"
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
