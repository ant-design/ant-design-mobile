# 各种型号按钮

- order: 1

Button

---

````jsx
import { Button, Flex, List, WingBlank, WhiteSpace } from 'antm';
ReactDOM.render(
  <div className="button-container">
  <WhiteSpace/>
    <WingBlank>
      <Flex>
        <Flex.Item>
          <Button
            size="middle"
            onClick={(e) => {alert('点击了按钮'); console.log(e);}}
          >large主按钮</Button>
        </Flex.Item>
        <Flex.Item>
          <Button
            mode="light"
            onClick={(e) => {alert('点击了按钮'); console.log(e);}}
          >large次按钮</Button>
        </Flex.Item>
      </Flex>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Flex>
        <Flex.Item>
          <Button
            size="middle"
            onClick={(e) => {alert('点击了按钮'); console.log(e);}}
          >middle主按钮</Button>
        </Flex.Item>
        <Flex.Item>
          <Button
            mode="light"
            size="middle"
            onClick={(e) => {alert('点击了按钮'); console.log(e);}}
          >middle次按钮</Button>
        </Flex.Item>
      </Flex>
    </WingBlank>

    <WhiteSpace/>
    <WingBlank>
      <Flex>
        <Flex.Item>
          <Button
            size="small"
            onClick={(e) => {alert('点击了按钮'); console.log(e);}}
          >small主按钮</Button>
        </Flex.Item>
        <Flex.Item>
          <Button
            mode="light"
            size="small"
            onClick={(e) => {alert('点击了按钮'); console.log(e);}}
          >small次按钮</Button>
        </Flex.Item>
      </Flex>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Flex>
        <Flex.Item>
          <Button
            size="little"
            onClick={(e) => {alert('点击了按钮'); console.log(e);}}
          >little主按钮</Button>
        </Flex.Item>
        <Flex.Item>
          <Button
            mode="light"
            size="little"
            onClick={(e) => {alert('点击了按钮'); console.log(e);}}
          >little次按钮</Button>
        </Flex.Item>
      </Flex>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Flex>
        <Flex.Item>
          <Button
            size="tiny"
            onClick={(e) => {alert('点击了按钮'); console.log(e);}}
          >tiny主按钮</Button>
        </Flex.Item>
        <Flex.Item>
          <Button
            mode="light"
            size="tiny"
            onClick={(e) => {alert('点击了按钮'); console.log(e);}}
          >tiny次按钮</Button>
        </Flex.Item>
      </Flex>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Button
        mode="light"
        size="tiny"
        inline={true}
        onClick={(e) => {alert('点击了按钮'); console.log(e);}}
      >行内按钮</Button>
    </WingBlank>
    <List >
      <List.Body>
        <List.Item
          line={2}
          extra={<Button
            mode="light"
            size="tiny"
            inline={true}
            onClick={(e) => {alert('点击了按钮'); console.log(e);}}
          >按钮</Button>}
        ><div><div className="am-list-title">区域经理</div><div className="am-list-brief">可进行收款、退款、折扣管理、查看数据等操作</div></div>
        </List.Item>
      </List.Body>
  </List>
  </div>
, document.getElementById('components-button-demo-size'));
````
