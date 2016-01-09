# 各种型号按钮

- order: 1

Button

---

````jsx
import { Button, Flex, List } from 'antm';
ReactDOM.render(
  <div className="button-container">
  <div className="am-whitespace am-whitespace-10"></div>
    <div className="am-wingblank am-wingblank-10">
      <Flex>
        <Flex.Item>
          <Button
            size="middle"
            onClick={function(e){console.log('onChange'); console.log(e);}}
          >large主按钮</Button>
        </Flex.Item>
        <Flex.Item>
          <Button
            mode="light"
            onClick={function(e){console.log('onChange'); console.log(e);}}
          >large次按钮</Button>
        </Flex.Item>
      </Flex>
    </div>
    <div className="am-whitespace am-whitespace-10"></div>
    <div className="am-wingblank am-wingblank-10">
      <Flex>
        <Flex.Item>
          <Button
            size="middle"
            onClick={function(e){console.log('onChange'); console.log(e);}}
          >middle主按钮</Button>
        </Flex.Item>
        <Flex.Item>
          <Button
            mode="light"
            size="middle"
            onClick={function(e){console.log('onChange'); console.log(e);}}
          >middle次按钮</Button>
        </Flex.Item>
      </Flex>
    </div>

    <div className="am-whitespace am-whitespace-10"></div>
    <div className="am-wingblank am-wingblank-10">
      <Flex>
        <Flex.Item>
          <Button
            size="small"
            onClick={function(e){console.log('onChange'); console.log(e);}}
          >small主按钮</Button>
        </Flex.Item>
        <Flex.Item>
          <Button
            mode="light"
            size="small"
            onClick={function(e){console.log('onChange'); console.log(e);}}
          >small次按钮</Button>
        </Flex.Item>
      </Flex>
    </div>
    <div className="am-whitespace am-whitespace-10"></div>
    <div className="am-wingblank am-wingblank-10">
      <Flex>
        <Flex.Item>
          <Button
            size="little"
            onClick={function(e){console.log('onChange'); console.log(e);}}
          >little主按钮</Button>
        </Flex.Item>
        <Flex.Item>
          <Button
            mode="light"
            size="little"
            onClick={function(e){console.log('onChange'); console.log(e);}}
          >little次按钮</Button>
        </Flex.Item>
      </Flex>
    </div>
    <div className="am-whitespace am-whitespace-10"></div>
    <div className="am-wingblank am-wingblank-10">
      <Flex>
        <Flex.Item>
          <Button
            size="tiny"
            onClick={function(e){console.log('onChange'); console.log(e);}}
          >tiny主按钮</Button>
        </Flex.Item>
        <Flex.Item>
          <Button
            mode="light"
            size="tiny"
            onClick={function(e){console.log('onChange'); console.log(e);}}
          >tiny次按钮</Button>
        </Flex.Item>
      </Flex>
    </div>
    <div className="am-whitespace am-whitespace-10"></div>
    <div className="am-wingblank am-wingblank-10">
      <Button
        mode="light"
        size="tiny"
        inline={true}
        onClick={function(e){console.log('onChange'); console.log(e);}}
      >行内按钮</Button>
    </div>
    <List >
      <List.Body>
        <List.Item
          line={2}
          extra={<Button
            mode="light"
            size="tiny"
            inline={true}
            onClick={function(e){console.log('onChange'); console.log(e);}}
          >按钮</Button>}
        ><div><div className="am-list-title">区域经理</div><div className="am-list-brief">可进行收款、退款、折扣管理、查看数据等操作</div></div>
        </List.Item>
      </List.Body>
  </List>
  </div>
, document.getElementById('components-button-demo-size'));
````
