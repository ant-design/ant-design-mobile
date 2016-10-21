import React from 'react';
import { List } from 'antd-mobile';
import Page from './Page';
import config from '../../';

/* const hashImgObj = {
  'action-sheet': 'cYmaBafYBnAxCqQ',
  'activity-indicator': 'yVtRfZGoDxXObTK',
  alert: 'XdSYKalBelFOMqd',
  badge: 'UwUpBYPYnlwVicM',
  button: 'ZRDUYEzfOzKWdzE',
  carousel: 'FbIGJuDaiQoKNvj',
  checkbox: 'dWPGltvdjaanrRd',
  collapse: 'yIQQHiTULgYehij',
  'date-picker': 'IQtMSWmYwLEuqln',
  drawer: 'oSokuHUVgeoTLJl',
  popup: 'gfWmRfZNzMyVUss',
  popover: 'iIOLFHTKUCxBgUV',
  flex: 'zFqYaBWIPpYYORq',
  'float-menu': 'dSOLngHNazulnFR',
  grid: 'UBGcnLKfVQIXgUb',
  icon: 'yhnfleZZoezOjtU',
  'image-picker': 'NDsSvklLUeodsHK',
  'input-item': 'SdSqpihcSBoBrFO',
  list: 'tiapjpdKPQGHhnC',
  'list-action': 'nIYrkZcGvKXjQhX',
  'list-view': 'lMztpIPTRAIWGIP',
  menu: 'QeVVHHEAhSiVtXt',
  modal: 'HzRRcuwtqUCCOBg',
  'nav-bar': 'qzZlligUfwgFjwD',
  result: 'jFrmGCOsQeEUrnR',
  picker: 'STBLvEutBwPySbL',
  progress: 'ihijukOXDlqXvPS',
  radio: 'MJszdVSBKhtGmIP',
  'refresh-control': 'nUAtybajGulmcSM',
  'search-bar': 'QnAmpSwlfPzjpSL',
  slider: 'mCyccAjoVLFVhSH',
  stepper: 'eYnIAokGATNUxlD',
  steps: 'nvQVDIUiTmXcJtO',
  switch: 'ITFdMlELFchsTmz',
  tabs: 'stWeDgdtEIKoiTU',
  tag: 'gfstSzAhvXqKyEg',
  'textarea-item': 'PfzuWlDVfndrQUK',
  timeline: 'aIomfcRsRHmPyNo',
  toast: 'nREwETegxvDndJZ',
  'notice-bar': 'EFpWULKNsectBDK',
  'white-space': 'NfomhEsOdhFxEws',
  'wing-blank': 'DUkfOYZVcLctGot',
  card: 'daARhPjKcxlSuuZ',
  tooltip: 'RvpANXExTEUwQTV',
  pagination: 'fOQwMYUYaRRKYtd',
  loading: 'DyAmULrLMBrgoOy',
  table: 'TbRxKTMOzgrCvMR',
  form: 'hZDnBrVwPmrgrLq',
  'swipe-action': 'nlDYwTsLwJdnaKc',
  accordion: 'jGVfAYlFPECtWvI',
  'tab-bar': 'OZInMeAaDCHtaJU',
  'segmented-control': 'qCqRFuSbewqIWyv',
}; */

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      cateOpend: [false, false, false, false, false],
    };
    this.onOpenChange = this.onOpenChange.bind(this);
  }

  onOpenChange() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { picked } = this.props;
    const components = picked.components;

    const lists = {};
    components.forEach(i => {
      const meta = i.meta;
      if (!lists[meta.category]) {
        lists[meta.category] = [];
      }
      lists[meta.category].push(meta);
    });

    const cateChinese = {
      Navigation: '导航',
      'Basic Components': '基础组件',
      Form: '表单',
      'Operation Feedback': '操作反馈',
      Others: '其他',
    };

    /* thumb={`https://os.alipayobjects.com/rmsportal/${img}.png`} */
    /* const img = hashImgObj[fileName] || 'nREwETegxvDndJZ'; */
    return (<Page
      logo="https://zos.alipayobjects.com/rmsportal/HAYkxaWqFJXyOEq.png"
      title="Ant Design Mobile"
      subtitle="服务于蚂蚁大中台无线业务的react组件"
      isIndex
    >
      {Object.keys(lists)
        .sort((a, b) => config.categoryOrder[a] - config.categoryOrder[b])
        .map((cate, index) => (<List
          key={`${cate}-${index}`}
          renderHeader={() => (<div
            onClick={() => {
              const { cateOpend } = this.state;
              cateOpend[index] = !cateOpend[index];
              this.setState({
                cateOpend,
              });
            }}
          >
            <span style={{ color: '#000' }}>{cateChinese[cate]}</span> {cate}
          </div>)}
          className={this.state.cateOpend[index] ? 'category-open' : 'category-closed'}
        >
          {lists[cate].map((item) => {
            const fileName = item.filename.split('/')[1];
            return (<List.Item
              arrow="horizontal"
              key={`${item.english}-${cate}`}
              onClick={() => { location.href = `/kitchen-sink/${fileName}/`; }}
            >{`${item.english} ${item.chinese}`}</List.Item>);
          })}
        </List>))
      }
    </Page>);
  }
}
