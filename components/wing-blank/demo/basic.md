# 基本

- order: 0

---

````jsx
import { WingBlank, WhiteSpace, Button } from 'antm';


let WingBlankExample = React.createClass({
  render() {
    return (
    <div className="button-container">
      <WhiteSpace/>
      <WingBlank>
        <Button>两翼留白10px</Button>
      </WingBlank>
      <WhiteSpace/>
      <WingBlank mode={20}>
        <Button>两翼留白20px</Button>
      </WingBlank>
      <WhiteSpace/>
      <WingBlank mode={30}>
        <Button>两翼留白30px</Button>
      </WingBlank>
    </div>
    );
  }
});

ReactDOM.render(<WingBlankExample />, document.getElementById('components-wing-blank-demo-basic'));
````
