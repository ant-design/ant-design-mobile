---
order: 0
title: 展示
---

Progress

---

````jsx
import { Progress, WhiteSpace ,Button} from 'antm';
ReactDOM.render(
  <div className="progress-container">
    <Progress percent={40}/>
    <WhiteSpace />
    <Button type="primary"> + </Button>
    <WhiteSpace />
    <Button type="primary"> -- </Button>
  </div>
, mountNode);
````
