---
order: 0
title: 展示
---

Alert

````jsx
import { Alert } from 'antm';
ReactDOM.render(
  <div className="alert-container">
    <Alert message="成功提示的文案"
      description="成功提示的辅助性文字介绍成功提示的辅助性文字介绍"
      type="success" />
    <Alert message="消息提示的文案"
      description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
      type="info" />
    <Alert
      message="警告提示的文案"
      description="警告提示的辅助性文字介绍警告提示的辅助性文字介绍"
      type="warn" />
    <Alert
      message="错误提示的文案"
      description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
      type="error" />
    <Alert
      message="问题提示的文案"
      description="问题提示的辅助性文字介绍问题提示的辅助性文字介绍问题提示的辅助性文字介绍"
      type="question" />
    <Alert
      message="等待提示的文案"
      description="等待提示的辅助性文字介绍等待提示的辅助性文字介绍"
      type="wait" />
    <Alert
      message="提示的文案"
      description="50.00元"
      brief="当前可用额度6,000.00元"
      type="info"
      result />
    <Alert
      message="已提交申请"
      description="50.00元"
      brief="当前可用额度6,000.00元"
      type="wait"
      result />
  </div>
, mountNode);
````
