# 基本

- order: 0

---

````jsx
import { Flex, Button, WingBlank, WhiteSpace } from 'antm';


let FlexExample = React.createClass({
  render() {
    return (
      <div className="button-container">
        <WhiteSpace/>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Button>主按钮</Button>
            </Flex.Item>
            <Flex.Item>
              <Button mode="white">次按钮</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
      </div>
    );
  }
});

ReactDOM.render(<FlexExample />, document.getElementById('components-flex-demo-basic'));
````
