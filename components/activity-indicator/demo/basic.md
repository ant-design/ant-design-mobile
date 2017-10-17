---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

Basic usage

````jsx
import { ActivityIndicator, WingBlank, WhiteSpace, Button } from 'antd-mobile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: false,
    };
  }
  componentWillUnmount() {
    clearTimeout(this.closeTimer);
  }
  showToast = () => {
    this.setState({ animating: !this.state.animating });
    this.closeTimer = setTimeout(() => {
      this.setState({ animating: !this.state.animating });
    }, 1000);
  }
  render() {
    return (
      <div>
        <WingBlank>
          <div className="loading-container">
            <p className="sub-title">Without text</p>
            <div className="loading-example">
              <ActivityIndicator animating />
            </div>
            <p className="sub-title">With text</p>
            <div className="loading-example">
              <ActivityIndicator
                text="Loading..."
              />
            </div>
            <p className="sub-title">With large size and customized text style</p>
            <div className="loading-example">
              <div className="align">
                <ActivityIndicator size="large" />
                <span style={{ marginTop: 8 }}>Loading...</span>
              </div>
            </div>
          </div>
          <div className="toast-container">
            <WhiteSpace size="xl" />
            <Button onClick={this.showToast}>click to show Toast</Button>
            <div className="toast-example">
              <ActivityIndicator
                toast
                text="Loading..."
                animating={this.state.animating}
              />
            </div>
          </div>
        </WingBlank>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````

````css
.loading-example {
  display: flex;
  justify-content: flex-start;
}
.align {
  display: flex;
  flex-direction: column;
}
.sub-title {
  color: #888;
  font-size: 14px;
  padding: 30px 0 18px 0;
}
````
