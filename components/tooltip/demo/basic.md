---
order: 0
title: Tooltip
---


````jsx
import { Tooltip } from 'antd-mobile';

const text = <span>提示文字</span>;

ReactDOM.render(
  <div className="tooltip-demo-basic">
    <div>
      <Tooltip placement="topLeft" title={text}>
        <span>上左</span>
      </Tooltip>
      <Tooltip placement="top" title={text}>
        <span>上边</span>
      </Tooltip>
      <Tooltip placement="topRight" title={text}>
        <span>上右</span>
      </Tooltip>
    </div>
    <div style={{ width: 60, marginLeft: 40, float: 'left' }}>
      <Tooltip placement="leftTop" title={text}>
        <span>左上</span>
      </Tooltip>
      <Tooltip placement="left" title={text}>
        <span>左边</span>
      </Tooltip>
      <Tooltip placement="leftBottom" title={text}>
        <span>左下</span>
      </Tooltip>
    </div>
    <div style={{ width: 60, float: 'left' }}>
      <Tooltip placement="rightTop" title={text}>
        <span>右上</span>
      </Tooltip>
      <Tooltip placement="right" title={text}>
        <span>右边</span>
      </Tooltip>
      <Tooltip placement="rightBottom" title={text}>
        <span>右下</span>
      </Tooltip>
    </div>
    <div style={{ clear: 'both' }}>
      <Tooltip placement="bottomLeft" title={text}>
        <span>上右</span>
      </Tooltip>
      <Tooltip placement="bottom" title={text}>
        <span>下边</span>
      </Tooltip>
      <Tooltip placement="bottomRight" title={text}>
        <span>下右</span>
      </Tooltip>
    </div>
  </div>
, mountNode);
````
<style>
.tooltip-demo-basic{
  margin-top: 100px;
  position: absolute;
  left: 50%;
  margin-left: -100px;
}
.tooltip-demo-basic span {
  display: inline-block;
  line-height: 32px;
  height: 32px;
  width: 50px;
  font-size: 14px;
  text-align: center;
  background: #ccc;
  margin-right: 1em;
  margin-bottom: 1em;
  border-radius: 6px;
}
</style>
