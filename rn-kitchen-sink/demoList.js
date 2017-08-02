/* eslint global-require: 0 */
module.exports = {
  UIBARS: [
    {
      title: 'NoticeBar',
      description: '通告栏',
      icon: 'https://os.alipayobjects.com/rmsportal/EFpWULKNsectBDK.png',
      module: require('../components/notice-bar/demo/basic.native'),
    },
    {
      title: 'SearchBar',
      description: '搜索栏',
      icon: 'https://os.alipayobjects.com/rmsportal/QnAmpSwlfPzjpSL.png',
      module: require('../components/search-bar/demo/basic.native'),
    },
    {
      title: 'TabBar',
      description: '标签栏',
      icon: 'https://zos.alipayobjects.com/rmsportal/OZInMeAaDCHtaJU.png',
      module: require('../components/tab-bar/demo/basic.native'),
    },
  ],
  UIVIEWS: [
    {
      title: 'Accordion',
      description: '手风琴',
      icon: 'https://os.alipayobjects.com/rmsportal/gfWmRfZNzMyVUss.png',
      module: require('../components/accordion/demo/basic.native'),
    },
    {
      title: 'ActionSheet',
      description: '动作面板',
      icon: 'https://zos.alipayobjects.com/rmsportal/cYmaBafYBnAxCqQ.png',
      module: require('../components/action-sheet/demo/basic.native'),
    },
    {
      title: 'Card',
      description: '卡片',
      icon: 'https://os.alipayobjects.com/rmsportal/daARhPjKcxlSuuZ.png',
      module: require('../components/card/demo/basic.native'),
    },
    {
      title: 'Drawer',
      description: '抽屉',
      icon: 'https://os.alipayobjects.com/rmsportal/oSokuHUVgeoTLJl.png',
      module: require('../components/drawer/demo/basic.native'),
    },
    {
      title: 'Icon',
      description: '图标',
      icon: 'https://os.alipayobjects.com/rmsportal/yhnfleZZoezOjtU.png',
      module: require('../components/icon/demo/basic.native'),
    },
    {
      title: 'List',
      description: '列表',
      icon: 'https://os.alipayobjects.com/rmsportal/tiapjpdKPQGHhnC.png',
      module: require('../components/list/demo/basic.native'),
    },
    {
      title: 'ListView',
      description: '长列表',
      icon: 'https://zos.alipayobjects.com/rmsportal/lMztpIPTRAIWGIP.png',
      module: require('../components/list-view/demo/basic.native'),
    },
    {
      title: 'ListView (only row)',
      description: '长列表',
      icon: 'https://zos.alipayobjects.com/rmsportal/lMztpIPTRAIWGIP.png',
      module: require('../components/list-view/demo/basic-row'),
    },
    {
      title: 'Modal',
      description: '对话框',
      icon: 'https://os.alipayobjects.com/rmsportal/HzRRcuwtqUCCOBg.png',
      module: require('../components/modal/demo/basic.native'),
    },
    {
      title: 'Popover',
      description: '气泡',
      icon: 'https://os.alipayobjects.com/rmsportal/iIOLFHTKUCxBgUV.png',
      module: require('../components/popover/demo/basic.native'),
    },
    {
      title: 'Popup', // 必须
      description: '弹出层',
      icon: 'https://zos.alipayobjects.com/rmsportal/gfWmRfZNzMyVUss.png',
      module: require('../components/popup/demo/basic.native'), // 必须
    },
    {
      title: 'Result', // 必须
      description: '结果页',
      icon: 'https://os.alipayobjects.com/rmsportal/nREwETegxvDndJZ.png',
      module: require('../components/result/demo/basic.native'),
    },
    {
      title: 'Toast', // 必须
      description: '轻提示',
      icon: 'https://os.alipayobjects.com/rmsportal/nREwETegxvDndJZ.png',
      module: require('../components/toast/demo/basic.native'),
    },
  ],
  UICONTROLS: [
    {
      title: 'ActivityIndicator',
      description: '活动指示器',
      icon: 'https://zos.alipayobjects.com/rmsportal/yVtRfZGoDxXObTK.png',
      module: require('../components/activity-indicator/demo/basic.native'),
    },
    {
      title: 'Badge',
      description: '徽标数',
      icon: 'https://os.alipayobjects.com/rmsportal/UwUpBYPYnlwVicM.png',
      module: require('../components/badge/demo/basic.native'),
    },
    {
      title: 'Button',
      description: '按钮',
      icon: 'https://os.alipayobjects.com/rmsportal/ZRDUYEzfOzKWdzE.png',
      module: require('../components/button/demo/basic.native'),
    },
    {
      title: 'Carousel', // 必须
      description: '走马灯',
      icon: 'https://os.alipayobjects.com/rmsportal/FbIGJuDaiQoKNvj.png',
      module: require('../components/carousel/demo/basic.native'), // 必须
    },
    {
      title: 'Checkbox', // 必须
      description: '复选框',
      icon: 'https://os.alipayobjects.com/rmsportal/dWPGltvdjaanrRd.png',
      module: require('../components/checkbox/demo/basic.native'), // 必须
    },
    {
      title: 'DatePicker', // 必须
      description: '日期选择',
      icon: 'https://os.alipayobjects.com/rmsportal/IQtMSWmYwLEuqln.png',
      module: require('../components/date-picker/demo/basic.native'),
    },
    {
      title: 'ImagePicker',
      description: '图片选择',
      icon: 'https://os.alipayobjects.com/rmsportal/NDsSvklLUeodsHK.png',
      module: require('../components/image-picker/demo/basic.native'),
    },
    {
      title: 'InputItem',
      description: '文本输入',
      icon: 'https://os.alipayobjects.com/rmsportal/SdSqpihcSBoBrFO.png',
      module: require('../components/input-item/demo/basic.native'),
    },
    {
      title: 'Picker',
      description: '选择器',
      icon: 'https://os.alipayobjects.com/rmsportal/STBLvEutBwPySbL.png',
      module: require('../components/picker/demo/popup'),
    },
    {
      title: 'Progress',
      description: '进度条',
      icon: 'https://os.alipayobjects.com/rmsportal/ihijukOXDlqXvPS.png',
      module: require('../components/progress/demo/basic.native'),
    },
    {
      title: 'Pagination',
      description: '分页器',
      icon: 'https://zos.alipayobjects.com/rmsportal/fOQwMYUYaRRKYtd.png',
      module: require('../components/pagination/demo/basic.native'),
    },
    {
      title: 'Radio',
      description: '单选框',
      icon: 'https://os.alipayobjects.com/rmsportal/MJszdVSBKhtGmIP.png',
      module: require('../components/radio/demo/basic.native'), // 必须
    },
    {
      title: 'RefreshControl',
      description: '下拉刷新',
      icon: 'https://os.alipayobjects.com/rmsportal/nUAtybajGulmcSM.png',
      module: require('../components/refresh-control/demo/basic.native'),
    },
    {
      title: 'Slider',
      description: '滑动输入条',
      icon: 'https://os.alipayobjects.com/rmsportal/mCyccAjoVLFVhSH.png',
      module: require('../components/slider/demo/basic.native'),
    },
    {
      title: 'Stepper',
      description: '步进器',
      icon: 'https://os.alipayobjects.com/rmsportal/eYnIAokGATNUxlD.png',
      module: require('../components/stepper/demo/basic.native'),
    },
    {
      title: 'Steps', // 必须
      description: '步骤条',
      icon: 'https://os.alipayobjects.com/rmsportal/nvQVDIUiTmXcJtO.png',
      module: require('../components/steps/demo/basic.native'), // 必须
    },
    {
      title: 'SegmentedControl',
      description: '分段器',
      icon: 'https://zos.alipayobjects.com/rmsportal/qCqRFuSbewqIWyv.png',
      module: require('../components/segmented-control/demo/basic.native'),
    },
    {
      title: 'Switch',
      description: '滑动开关',
      icon: 'https://os.alipayobjects.com/rmsportal/ITFdMlELFchsTmz.png',
      module: require('../components/switch/demo/basic.native'),
    },
    {
      title: 'SwipeAction', // 必须
      description: '滑动或长按操作',
      icon: 'https://os.alipayobjects.com/rmsportal/nlDYwTsLwJdnaKc.png',
      module: require('../components/swipe-action/demo/basic.native'),
    },
    {
      title: 'Tabs', // 必须
      description: '标签页',
      icon: 'https://os.alipayobjects.com/rmsportal/stWeDgdtEIKoiTU.png',
      module: require('../components/tabs/demo/basic.native'), // 必须
    },
    {
      title: 'Tag', // 必须
      description: '标签',
      icon: 'https://os.alipayobjects.com/rmsportal/gfstSzAhvXqKyEg.png',
      module: require('../components/tag/demo/basic.native'),
    },
    {
      title: 'TextAreaItem',
      description: '多行输入',
      icon: 'https://os.alipayobjects.com/rmsportal/PfzuWlDVfndrQUK.png',
      module: require('../components/textarea-item/demo/basic.native'),
    },
  ],
  OTHERS: [
    {
      title: 'Flex',
      description: '布局',
      icon: 'https://os.alipayobjects.com/rmsportal/zFqYaBWIPpYYORq.png',
      module: require('../components/flex/demo/basic.native'),
    },
    {
      title: 'GridList',
      description: '网格列表',
      icon: 'https://os.alipayobjects.com/rmsportal/UBGcnLKfVQIXgUb.png',
      module: require('../components/grid/demo/basic.native'),
    },
    {
      title: 'LocaleProvider',
      description: '国际化',
      icon: 'https://os.alipayobjects.com/rmsportal/HzRRcuwtqUCCOBg.png',
      module: require('../components/locale-provider/demo/basic.native'),
    },
    {
      title: 'WhiteSpace',
      description: '上下留白',
      icon: 'https://os.alipayobjects.com/rmsportal/NfomhEsOdhFxEws.png',
      module: require('../components/white-space/demo/basic.native'),
    },
    {
      title: 'WingBlank',
      description: '两翼留白',
      icon: 'https://os.alipayobjects.com/rmsportal/DUkfOYZVcLctGot.png',
      module: require('../components/wing-blank/demo/basic.native'),
    },
  ],
};
