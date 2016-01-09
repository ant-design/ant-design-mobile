# 基本

- order: 0

---

````jsx
import { Flex, Button } from 'antm';


let TopNoticeExample = React.createClass({
  render() {
    return (
      <div className="am-wingblank am-wingblank-10 button-container">
        <div className="am-whitespace am-whitespace-10"></div>
        <Flex>
          <Flex.Item>
            <Button>主按钮</Button>
          </Flex.Item>
          <Flex.Item>
            <Button mode="white">次按钮</Button>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
});

ReactDOM.render(<TopNoticeExample />, document.getElementById('components-flex-demo-basic'));
````
