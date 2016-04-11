---
order: 0
title: 基本
---



````jsx
import { WingBlank, WhiteSpace, Button } from 'antm';


let WhiteSpaceExample = React.createClass({
  render() {
    return (
    <div className="button-container">
      <WhiteSpace/>
      <WingBlank>
        <Button>上下留白10px</Button>
      </WingBlank>
      <WhiteSpace mode={20}/>
      <WingBlank>
        <Button>上下留白20px</Button>
      </WingBlank>
      <WhiteSpace mode={40}/>
      <WingBlank>
        <Button>上下留白40px</Button>
      </WingBlank>
    </div>
    );
  }
});

ReactDOM.render(<WhiteSpaceExample />, document.getElementById('components-white-space-demo-basic'));
````
