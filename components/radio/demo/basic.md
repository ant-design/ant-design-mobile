---
order: 0
title: 基本
---

Radio

````jsx
import { Radio } from 'antd-mobile';

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
        <div style={{ position: 'relative', paddingTop: '5px' }}>
          <span style={{ borderWidth: '1px', borderColor: 'red', borderStyle: 'solid', margin: '10px 4px' }}>
            <Radio
              checked={this.state.value === 1}
              onChange={this.handleChange}
            />
          </span>
          <span style={{ borderWidth: '1px', borderColor: 'rgba(45, 183, 245, 0.7)', borderStyle: 'solid', margin: '10px 4px' }}>
            <Radio
              checked={this.state.value === 2}
              onChange={this.handleChange2}
            />
          </span>
        </div>
      </div>
    );
  },
});

ReactDOM.render(<Test />, mountNode);
````
