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
            onClick={(e) => { console.log(e);}}
          >large主按钮</Button>
        </Flex.Item>
        <Flex.Item>
          <Button
            type="secondary"
            onClick={(e) => { console.log(e);}}
          >large次按钮</Button>
        </Flex.Item>
      </Flex>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Flex>
        <Flex.Item>
          <Button
            size="small"
            onClick={(e) => { console.log(e);}}
          >small主按钮</Button>
        </Flex.Item>
        <Flex.Item>
          <Button
            type="secondary"
            size="small"
            onClick={(e) => {console.log(e);}}
          >small次按钮</Button>
        </Flex.Item>
      </Flex>
    </WingBlank>
    <WhiteSpace/>
    <WingBlank>
      <Flex>
        <Flex.Item>
          <Button
            size="small"
            inline={true}
            onClick={(e) => { console.log(e);}}
          >small</Button>
        </Flex.Item>
        <Flex.Item>
          <Button
            type="secondary"
            size="small"
            inline={true}
            disabled={true}
            onClick={(e) => {console.log(e);}}
          >small</Button>
        </Flex.Item>
      </Flex>
    </WingBlank>
    <List >
      <List.Body>
        <List.Item
          line={2}
          extra={<Button
            type="secondary"
            size="small"
            inline={true}
            onClick={(e) => {console.log(e);}}
          >按钮</Button>}
        ><div><div className="am-list-title">区域经理</div><div className="am-list-brief">可进行收款、退款、折扣管理、查看数据等操作</div></div>
        </List.Item>
        <List.Item
          line={2}
          extra={<Button
            type="secondary"
            size="small"
            inline={true}
            disabled={true}
            onClick={(e) => {console.log(e);}}
          >按钮</Button>}
        ><div><div className="am-list-title">区域经理</div><div className="am-list-brief">可进行收款、退款、折扣管理、查看数据等操作</div></div>
        </List.Item>
      </List.Body>
  </List>
  </div>
, document.getElementById('components-button-demo-size'));
````
