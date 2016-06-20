---
order: 2
chinese: 更新日志
---

## 0.6.0

`2016-06-20`

### web部分
- 组件按需加载，组件按需加载，组件按需加载，重要的事情说三遍，包括js文件和样式文件，尽量降低离线包业务使用react方案带来的包大小困扰。当然，react文件本身较大的问题需要通过离线包本地缓存来解决。欢迎离线H5app业务来尝鲜。
-  新增若干组件，ListView(高性能列表)，Grid（九宫格），Menu（筛选），Uploader（图片上传）、ListAction（滑动或长按操作）、RefreshControl（下拉刷新）。
- ListPicker / ListDatePicker 组件更名为 Picker / DatePicker。
- 删除 selectList 组件（可使用 radio 组件代替），或者使用更强大的Menu组件。
- Flex、List.Item、InputItem、textAreaItem等组件。inputItem支持数字输入，Flex属性更加全面。
- tabs 组件新增 tabbar 形式;
- topNotice mode 为 closable, 则自动销毁;
- steps组件支持size为pointer的点状样式;

### RN部分

- 初步提供了List、Button、Flex、WhiteSpace、WingBlank五个UI组件。API和Web版的组件基本保持一致。欢迎扫码尝鲜

    ![demo app](https://zos.alipayobjects.com/rmsportal/pqSGjgXJCojReWW.png)


### 工具部分(antm-init)

- 支持初始化H5/RN项目 (--type 参数)
- 支持离线包项目（H5/RN）(引入hpm)


## 0.5.0

`2016-05-16`

发布全新的基于 Ant Design 设计规范的版本。
