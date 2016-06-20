---
order: 2
chinese: 更新日志
---

## 0.6.0

`2016-06-20`

### 0.6 版本的新特性和变化

* 对 h5 的离线包方案支持更贴心
    - **组件按需加载**（包括js和样式文件），未 import 进来的组件不会打包进来，所以离线包的大小由业务规模大小决定。
    - 欢迎离线H5app业务来尝鲜！
* 新增6+个常用组件，至此各类业务中能抽象的基本组件、几乎能完全覆盖到。
* 优化 [网站](http://antm.alipay.net/) ，更好用有木有。

### Web部分/新增组件

- `ListView`(高性能列表组件),目前处于beta版，适用场景为列表页面；
- `ListAction`（滑动或长按操作）；
- `Grid`（九宫格）；
- `Menu`（筛选），替代SelectList组件；
- `Uploader`（图片上传）；
- `RefreshControl`（下拉刷新）。


### Web部分/功能优化

- `ListPicker` / `ListDatePicker` 组件更名为 Picker / DatePicker；
- 删除 `SelectList` 组件（可使用 `Radio` 组件代替），或者使用更强大的`Menu`组件；
- 更新`Flex`，全部支持flex属性。（ps：UC内核对flex布局支持不完善）；
- 更新`List.Item`、`InputItem`、`TextareaItem`的报错样式；
- `InputItem`支持数字输入(`format="number"`)；
- `Tabs` 组件新增 tabbar 形式；
- `TopNotice` 当mode 为 `closable`时, 则自动销毁;
- `Steps`组件支持size为`pointer`的点状样式;

### RN部分
- 提供`List`、`Button`、`Flex`、`WhiteSpace`、`WingBlank`五个UI组件。API和Web版组件基本保持一致，欢迎扫码尝鲜

    ![demo app](https://zos.alipayobjects.com/rmsportal/pqSGjgXJCojReWW.png)

### 工具部分

- antm-init 支持初始化H5/RN项目
- antm-init 支持离线包项目（H5/RN）
- antm-init使用遇到问题，请[提issues](http://gitlab.alibaba-inc.com/react-ui/antm-init/issues)，近期会频繁更新。
- 请通过antm-init工具来初始化antm项目，antm的组件按需依赖需要额外的[webpack配置](http://gitlab.alibaba-inc.com/react-ui/antm-init/blob/master/boilerplate/web/webpack.config.js#L2)，或者参考antm-init里模板的webpack配置和依赖。

## 0.5.0

`2016-05-16`

发布全新的基于 Ant Design 设计规范的版本。
