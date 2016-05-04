---
order: 0
title: 基本
---

Radio

---

````jsx
import { List, Radio } from 'antm';

let Test = React.createClass({
  getInitialState() {
    return {
      disabled: false,
      checked: null,
      r: 'a',
      s: 'e'
    };
  },
  handleChange(e) {
    this.setState({
      r: e.target.value
    });
  },
  handleChange2(e) {
    this.setState({
      s: e.target.value
    });
  },
  render() {
    return (
      <div>
        <List>
          <List.Header>表单多选项，普通列表中多选项</List.Header>
          <List.Body>
            <List.Item
              extra={<Radio
                value = "a"
                checked = {this.state.r === 'a'}
                onChange={this.handleChange}
                disabled={this.state.disabled}
              />}
            >
              使用 Ant Desgin Component
            </List.Item>
            <List.Item
              extra={<Radio
                value = "b"
                checked = {this.state.r === 'b'}
                onChange={this.handleChange}
                disabled={this.state.disabled}
              />}
            >
              使用 Ant Desgin Component
            </List.Item>
            <List.Item
              extra={<Radio
                value = "c"
                checked
                onChange={this.handleChange}
                disabled
              />}
            >
              个性化调整disabled
            </List.Item>
            <List.Item
              extra={<Radio
                value = "d"
                checked = {false}
                onChange={this.handleChange}
                disabled
              />}
            >
              个性化调整disabled
            </List.Item>
          </List.Body>
        </List>
      </div>
    );
  }
});

ReactDOM.render(<Test />, mountNode);
````
