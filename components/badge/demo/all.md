---
order: 4
title: 综合示例
---

结合列表的案例参考


````jsx
import { List, Badge } from 'antm';

ReactDOM.render(
  <div className="badge-container">
    <form>
      <List>
        <List.Header>列表</List.Header>
        <List.Body>
          <List.Item extra="内容内容">
            文本内容<Badge dot style={{ marginLeft: 8 }} />
          </List.Item>
          <List.Item extra="内容内容" arrow="horizontal">
            文本内容<Badge text={ 'new' } style={{ marginLeft: 8 }} />
          </List.Item>
          <List.Item extra="内容内容" arrow="horizontal">
            文本内容<Badge text={ 4 } style={{ marginLeft: 8 }} />
          </List.Item>
          <List.Item extra="内容内容" arrow="horizontal">
            文本内容<Badge text={ 100 } style={{ marginLeft: 8 }} />
          </List.Item>
        </List.Body>
      </List>
      <List>
        <List.Header>带icon</List.Header>
        <List.Body>
          <List.Item extra="内容内容" arrow="horizontal">
            <div style={{ padding: '4px 0' }}>
              <Badge dot>
                <span style={{ width: 28, height: 28, background: 'rgba(255, 140, 101, 0.15)', display: 'inline-block' }}></span>
              </Badge>小圆点
            </div>
          </List.Item>
          <List.Item thumb="https://os.alipayobjects.com/rmsportal/JteFDJaPwHuwXgs.jpg" extra={ <Badge text={77} /> } arrow="horizontal">
            右侧内容
          </List.Item>
          <List.Item thumb="https://os.alipayobjects.com/rmsportal/JteFDJaPwHuwXgs.jpg">
            内容内容
          </List.Item>
        </List.Body>
      </List>
      <List>
        <List.Body>
          <List.Item extra="内容内容" arrow="horizontal">
            <div style={{ padding: '4px 0' }}>
              <Badge text={'new'} corner>
                <span style={{ width: 52, height: 52, background: 'rgba(255, 140, 101, 0.15)', display: 'inline-block' }}></span>
              </Badge>有角标
            </div>
          </List.Item>
          <List.Item extra="内容内容" arrow="horizontal">
            <div style={{ padding: '10px 0' }}>
              <Badge text={9}>
                <span style={{ width: 52, height: 52, background: 'rgba(255, 140, 101, 0.15)', display: 'inline-block' }}></span>
              </Badge>数字数字
            </div>
          </List.Item>
          <List.Item extra="内容内容" arrow="horizontal">
            <div style={{ padding: '10px 0' }}>
              <Badge text={ 108 }>
                <span style={{ width: 52, height: 52, background: 'rgba(255, 140, 101, 0.15)', display: 'inline-block' }}></span>
              </Badge>超出99显示99+
            </div>
          </List.Item>
        </List.Body>
      </List>
      <List>
        <List.Body>
          <List.Item extra="内容内容" arrow="horizontal">
            <div style={{ padding: '4px 0' }}>
              <Badge text={ '限时优惠' } corner size="large">
                <span style={{ width: 72, height: 72, background: 'rgba(255, 140, 101, 0.15)', display: 'inline-block' }}></span>
              </Badge>大角标
            </div>
          </List.Item>
        </List.Body>
      </List>
    </form>
  </div>
, mountNode);
````

````css
.am-badge {
  margin-right: 8px;
}
````
