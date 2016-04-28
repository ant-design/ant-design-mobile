---
order: 0
title: 普通
---

````jsx
import { Toast, WhiteSpace, WingBlank, Button } from 'antm';

const ToastExample = React.createClass({
  getInitialState() {
    return {
      show: false,
      mode: ''
    };
  },
  render() {
    const contentMap = {
      success: '成功提示',
      network: '网络失败',
      loading: '加载中...',
      fail: '失败提示',
    };
    const mode = this.state.mode;

    return (
      <div className="toast-container">
        <WingBlank>选择一种类型:
          <select onChange={(e) => {
            this.setState({
              mode: e.target.value,
            });
          }} style={{ border: '1px solid #ccc' }}>
            <option value="">纯文字 toast</option>
            <option value="success">成功提示</option>
            <option value="network">网络失败</option>
            <option value="loading">加载中...</option>
            <option value="fail">失败提示</option>
          </select>
        </WingBlank>
        <WhiteSpace mode={20} />
        <WingBlank>
          <Button type="primary" onClick={() => {
            this.setState({
              show: true,
            });
          }}>显示 toast</Button>

          {this.state.show ? <Toast afterHide={() => {
            this.setState({
              show: false,
            });
          }} mode={mode}>{contentMap[mode] || '纯文字 toast'}</Toast> : null}
        </WingBlank>
      </div>
    );
  },
});

ReactDOM.render(<ToastExample />, mountNode);
````
