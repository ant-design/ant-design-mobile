---
order: 0
title: 基本
---



````jsx
import { WingBlank, WhiteSpace, Button } from 'antm';


let WingBlankExample = React.createClass({
  render() {
    return (
    <div className="button-container">
      <WhiteSpace />
      <WingBlank>
        <Button>两翼留白10px</Button>
      </WingBlank>
      <WhiteSpace />
      <WingBlank mode={20}>
        <Button>两翼留白20px</Button>
      </WingBlank>
      <WhiteSpace />
      <WingBlank mode={32}>
        <Button>两翼留白32px</Button>
      </WingBlank>
    </div>
    );
  }
});

ReactDOM.render(<WingBlankExample />, mountNode);
````
