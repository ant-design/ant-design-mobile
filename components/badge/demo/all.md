---
order: 4
title: 综合示例
---

结合列表的案例参考


````jsx
import { List, Badge } from 'antd-mobile';

ReactDOM.render(
  <div className="badge-container">
    <form>
      <List>
        <List.Header>列表</List.Header>
        <List.Body>
          <List.Item extra="内容内容">
            文本内容<Badge dot style={{ marginLeft: 12 }} />
          </List.Item>
          <List.Item extra="内容内容" arrow="horizontal">
            文本内容<Badge text={'new'} style={{ marginLeft: 12 }} />
          </List.Item>
          <List.Item extra="内容内容" arrow="horizontal">
            文本内容<Badge text={4} style={{ marginLeft: 12 }} />
          </List.Item>
          <List.Item extra="内容内容" arrow="horizontal">
            文本内容<Badge text={100} style={{ marginLeft: 12 }} />
          </List.Item>
        </List.Body>
      </List>
      <List>
        <List.Header>带icon</List.Header>
        <List.Body>
          <List.Item extra="内容内容" arrow="horizontal">
            <div style={{ padding: '8px 0' }}>
              <Badge dot>
                <span style={{ width: '0.52rem', height: '0.52rem', background: '#ddd', display: 'inline-block' }} />
              </Badge><span style={{ marginLeft: 12 }}>小圆点</span>
            </div>
          </List.Item>
          <List.Item thumb="https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png" extra={<Badge text={77} />} arrow="horizontal">
            右侧内容
          </List.Item>
          <List.Item thumb="https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png">
            内容内容
          </List.Item>
        </List.Body>
      </List>
      <List>
        <List.Body>
          <List.Item extra="内容内容" arrow="horizontal">
            <div style={{ padding: '20px 0' }}>
              <Badge text={9}>
                <span style={{ width: '1.04rem', height: '1.04rem', background: '#ddd', display: 'inline-block' }} />
              </Badge><span style={{ marginLeft: 12 }}>数字</span>
            </div>
          </List.Item>
          <List.Item extra="内容内容" arrow="horizontal">
            <div style={{ padding: '20px 0' }}>
              <Badge text={108}>
                <span style={{ width: '1.04rem', height: '1.04rem', background: '#ddd', display: 'inline-block' }} />
              </Badge><span style={{ marginLeft: 12 }}>超出99</span>
            </div>
          </List.Item>
        </List.Body>
      </List>
    </form>
  </div>
, mountNode);
````

````css
.head-example {
  width: 1.04rem;
  height: 1.04rem;
  background: #ddd;
  display: inline-block;
}
````
