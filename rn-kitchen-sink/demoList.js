module.exports = {
  APIS: [
    {
      title: 'ActionSheet',
      description: '动作面板',
      icon: 'https://zos.alipayobjects.com/rmsportal/sTvsgvivVKnqQtS.png',
      module: require('../components/action-sheet/demo/basic'),
    },
    {
      title: 'Popup', // 必须
      description: '弹出层',
      icon: 'https://zos.alipayobjects.com/rmsportal/sTvsgvivVKnqQtS.png',
      module: require('../components/popup/demo/basic'), // 必须
    },
    {
      title: 'Toast', // 必须
      description: '轻提示',
      icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
      module: require('../components/toast/demo/basic'),
    },
  ],
  COMPONENTS: [
    {
      title: 'ActivityIndicator',
      description: '活动指示器',
      icon: 'https://zos.alipayobjects.com/rmsportal/ZLKbJvxVNSmsOwW.png',
      module: require('../components/activity-indicator/demo/basic'),
    },
    {
      title: 'Badge',
      description: '徽标数',
      icon: 'https://os.alipayobjects.com/rmsportal/nSDcLEWgUrOkCJq.png',
      module: require('../components/badge/demo/basic'),
    },
    {
      title: 'Button',
      description: '按钮',
      icon: 'https://os.alipayobjects.com/rmsportal/lOXYjfSRPpkwudh.png',
      module: require('../components/button/demo/basic'),
    },
    {
      title: 'Card',
      description: '卡片',
      icon: 'https://os.alipayobjects.com/rmsportal/kkQBRgZgcqSyMPS.png',
      module: require('../components/card/demo/basic'),
    },
    {
      title: 'Carousel', // 必须
      description: '跑马灯',
      icon: 'https://os.alipayobjects.com/rmsportal/ifHkrPIiJFcMNzT.png',
      module: require('../components/carousel/demo/basic'), // 必须
    },
    {
      title: 'Checkbox', // 必须
      description: '复选框',
      icon: 'https://os.alipayobjects.com/rmsportal/IznQRcXpGsRfHXX.png',
      module: require('../components/checkbox/demo/basic'), // 必须
    },
    {
      title: 'DatePicker', // 必须
      description: '日期选择',
      icon: 'https://os.alipayobjects.com/rmsportal/XjBSEKVWMeIulGv.png',
      module: require('../components/date-picker/demo/popup'),
    },
    {
      title: 'Drawer',
      description: '抽屉',
      icon: 'https://os.alipayobjects.com/rmsportal/kpbezGjgdRhGfMa.png',
      module: require('../components/drawer/demo/basic'),
    },
    {
      title: 'Flex',
      description: 'Flex 布局',
      icon: 'https://os.alipayobjects.com/rmsportal/KZtGFWmnMUFpiSE.png',
      module: require('../components/flex/demo/basic'),
    },
    {
      title: 'Grid',
      description: '九宫格',
      icon: 'https://os.alipayobjects.com/rmsportal/QbGTlZewFSvHlSS.png',
      module: require('../components/grid/demo/basic'),
    },
    {
      title: 'Popover',
      description: '浮动菜单',
      icon: 'https://os.alipayobjects.com/rmsportal/HhilRXHawmUwlML.png',
      module: require('../components/popover/demo/basic'),
    },
    {
      title: 'ImagePicker',
      description: '图片选择',
      icon: 'https://os.alipayobjects.com/rmsportal/CVHyVxhFqkhZfYs.png',
      module: require('../components/image-picker/demo/basic'),
    },
    {
      title: 'InputItem',
      description: '文本输入',
      icon: 'https://os.alipayobjects.com/rmsportal/aDugjLTLBeQffgX.png',
      module: require('../components/input-item/demo/basic'),
    },
    {
      title: 'List',
      description: '列表',
      icon: 'https://os.alipayobjects.com/rmsportal/wlNeoTpEKIpTcOW.png',
      module: require('../components/list/demo/basic'),
    },
    {
      title: 'ListView',
      description: '长列表',
      icon: 'https://os.alipayobjects.com/rmsportal/wlNeoTpEKIpTcOW.png',
      module: require('../components/list-view/demo/basic'),
    },
    // {
    //   title: 'Menu',
    //   description: '菜单',
    //   icon: 'https://os.alipayobjects.com/rmsportal/AMszKQQdMvMmYng.png',
    //   module: require('../components/menu/demo/basic'),
    // },
    {
      title: 'Modal',
      description: '对话框',
      icon: 'https://os.alipayobjects.com/rmsportal/AMszKQQdMvMmYng.png',
      module: require('../components/modal/demo/basic'),
    },
    {
      title: 'NoticeBar',
      description: '顶部提示',
      icon: 'https://os.alipayobjects.com/rmsportal/AraRKTSdXQbKkGv.png',
      module: require('../components/notice-bar/demo/basic'),
    },
    {
      title: 'Pagination',
      description: '分页器',
      icon: 'https://zos.alipayobjects.com/rmsportal/VmTKwvaRaIWOXrh.png',
      module: require('../components/pagination/demo/basic'),
    },
    {
      title: 'Picker',
      description: '选择器',
      icon: 'https://os.alipayobjects.com/rmsportal/mioJMWDMAmiurTR.png',
      module: require('../components/picker/demo/popup'),
    },
    {
      title: 'Progress',
      description: '进度条',
      icon: 'https://os.alipayobjects.com/rmsportal/aIomfcRsRHmPyNo.png',
      module: require('../components/progress/demo/basic'),
    },
    {
      title: 'RefreshControl',
      description: '下拉刷新',
      icon: 'https://os.alipayobjects.com/rmsportal/kmDibjGUbFrdeeY.png',
      module: require('../components/refresh-control/demo/basic'),
    },
    {
      title: 'Radio',
      description: '单选框',
      icon: 'https://os.alipayobjects.com/rmsportal/kmDibjGUbFrdeeY.png',
      module: require('../components/radio/demo/basic'), // 必须
    },
    {
      title: 'SegmentedControl',
      description: '分段控制',
      icon: 'https://os.alipayobjects.com/rmsportal/oeOvbvMpweuBOvO.png',
      module: require('../components/segmented-control/demo/basic'),
    },
    {
      title: 'SearchBar',
      description: '搜索条',
      icon: 'https://os.alipayobjects.com/rmsportal/WzZoGzTRKzQgMWi.png',
      module: require('../components/search-bar/demo/basic'),
    },
    {
      title: 'Slider',
      description: '滑动输入条',
      icon: 'https://os.alipayobjects.com/rmsportal/ViixEhXOewlupTr.png',
      module: require('../components/slider/demo/basic'),
    },
    {
      title: 'Stepper',
      description: '步进器',
      icon: 'https://os.alipayobjects.com/rmsportal/aDugjLTLBeQffgX.png',
      module: require('../components/stepper/demo/basic'),
    },
    {
      title: 'Steps', // 必须
      description: '步骤条',
      icon: 'https://os.alipayobjects.com/rmsportal/aDugjLTLBeQffgX.png',
      module: require('../components/steps/demo/basic'), // 必须
    },
    {
      title: 'SwipeAction', // 必须
      description: '滑动或长按操作',
      icon: 'https://os.alipayobjects.com/rmsportal/OJgqKyrKGdIEfwp.png',
      module: require('../components/swipe-action/demo/basic'),
    },
    {
      title: 'Switch',
      description: '开关',
      icon: 'https://os.alipayobjects.com/rmsportal/NmMXnPngqRrKHrq.png',
      module: require('../components/switch/demo/basic'),
    },
    {
      title: 'TabBar',
      description: 'APP 选项卡',
      icon: 'https://os.alipayobjects.com/rmsportal/oeOvbvMpweuBOvO.png',
      module: require('../components/tab-bar/demo/basic'),
    },
    {
      title: 'Tabs', // 必须
      description: '标签页',
      icon: 'https://os.alipayobjects.com/rmsportal/oeOvbvMpweuBOvO.png',
      module: require('../components/tabs/demo/basic'), // 必须
    },
    {
      title: 'Tag', // 必须
      description: '标签',
      icon: 'https://os.alipayobjects.com/rmsportal/AkXOzPmaytaVYLD.png',
      module: require('../components/tag/demo/basic'),
    },
    {
      title: 'TextAreaItem',
      description: '多行输入',
      icon: 'https://os.alipayobjects.com/rmsportal/aDugjLTLBeQffgX.png',
      module: require('../components/textarea-item/demo/basic'),
    },
    {
      title: 'WhiteSpace',
      description: '上下留白',
      icon: 'https://os.alipayobjects.com/rmsportal/mioJMWDMAmiurTR.png',
      module: require('../components/white-space/demo/basic'),
    },
    {
      title: 'WingBlank',
      description: '两翼留白',
      icon: 'https://os.alipayobjects.com/rmsportal/WzZoGzTRKzQgMWi.png',
      module: require('../components/wing-blank/demo/basic'),
    },
  ],
};
