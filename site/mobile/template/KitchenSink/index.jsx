import React from 'react';
import { Link } from 'react-router';
import { Icon, Drawer, List, Flex } from 'antd-mobile';
import 'antd-mobile/components/style';
import Page from './Page';
import Item from './Item';

const hashImgObj = {
  'action-sheet': 'cYmaBafYBnAxCqQ',
  alert: 'XdSYKalBelFOMqd',
  badge: 'UwUpBYPYnlwVicM',
  button: 'ZRDUYEzfOzKWdzE',
  carousel: 'FbIGJuDaiQoKNvj',
  checkbox: 'dWPGltvdjaanrRd',
  collapse: 'yIQQHiTULgYehij',
  'date-picker': 'IQtMSWmYwLEuqln',
  drawer: 'nREwETegxvDndJZ',
  popup: 'gfWmRfZNzMyVUss',
  flex: 'zFqYaBWIPpYYORq',
  'float-menu': 'dSOLngHNazulnFR',
  grid: 'UBGcnLKfVQIXgUb',
  icon: 'yhnfleZZoezOjtU',
  'image-picker': 'NDsSvklLUeodsHK',
  'input-item': 'SdSqpihcSBoBrFO',
  list: 'tiapjpdKPQGHhnC',
  'list-action': 'nIYrkZcGvKXjQhX',
  'list-view': 'tiapjpdKPQGHhnC',
  menu: 'UCVKKkEbquPdzNt',
  modal: 'HzRRcuwtqUCCOBg',
  'nav-bar': 'qzZlligUfwgFjwD',
  result: 'jFrmGCOsQeEUrnR',
  picker: 'STBLvEutBwPySbL',
  progress: 'ihijukOXDlqXvPS',
  radio: 'obPcHPkrNguaThi',
  'refresh-control': 'nUAtybajGulmcSM',
  'search-bar': 'QnAmpSwlfPzjpSL',
  slider: 'mCyccAjoVLFVhSH',
  stepper: 'PfzuWlDVfndrQUK',
  steps: 'PfzuWlDVfndrQUK',
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
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  onOpenChange = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { picked } = this.props;
    const components = picked.components;

    const customWidth = (document.documentElement.clientWidth / 3);
    const itemStyle = {
      width: `${customWidth}px`,
      height: `${customWidth >= 138 * window.devicePixelRatio ? 138 * window.devicePixelRatio : customWidth}px`,
      display: 'inline-block',
    };

    const lists = {};
    components.forEach(i => {
      const meta = i.meta;
      if (!lists[meta.category]) {
        lists[meta.category] = [];
      }
      lists[meta.category].push(meta);
    });

    const sidebar = (<div>
      <div className="demo-drawer-home">
        <Link to="/">Ant Design Mobile</Link>
      </div>
      {Object.keys(lists).map((cate, index) => (
        <List key={index} title={cate}>
          <List.Body>
            {
              lists[cate].map((item, ii) => {
                const fileName = item.filename.split('/')[1];
                return (<List.Item key={ii}>
                  <Link to={`/${fileName}/`}>{item.english} <span style={{ fontSize: 24, color: '#888' }}>{item.chinese}</span></Link>
                </List.Item>);
              })
            }
          </List.Body>
        </List>
      ))}
    </div>);

    const drawerProps = {
      open: this.state.open,
      position: 'left',
      onOpenChange: this.onOpenChange,
    };

    return (<div>
      <div className="demo-drawer-trigger">
        <span onClick={this.onOpenChange}><Icon type="bars" /></span>
      </div>
      <div className="demo-drawer-container">
        <Drawer sidebar={sidebar} dragHandleStyle={{ display: 'none' }} {...drawerProps}>
          <Page logo="https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png" title="Ant Design Mobile" subtitle="服务于蚂蚁大中台无线业务的react组件" isIndex>
            {Object.keys(lists).map((cate, index) => (
              <List key={index}>
                <List.Header>{cate}</List.Header>
                <List.Body>
                  {(() => {
                    const flexs = [];
                    const flexItems = [];
                    for (let i = 0; i < lists[cate].length; i++) {
                      const ii = lists[cate][i];
                      const fileName = ii.filename.split('/')[1];
                      const img = hashImgObj[fileName] || 'nREwETegxvDndJZ';
                      flexItems.push(<Item
                        logo={`https://os.alipayobjects.com/rmsportal/${img}.png`}
                        title={ii.chinese}
                        subtitle={ii.english}
                        style={itemStyle}
                        key={`flexitem-${i}`}
                        linkTo={`/${fileName}/`}
                      />);
                    }
                    flexs.push(<Flex wrap="wrap" className="antm-demo-flex" key={`flex-${index}`}>
                      {flexItems}
                    </Flex>);
                    return flexs;
                  })()}
                </List.Body>
              </List>
            ))}
          </Page>
        </Drawer>
      </div>
    </div>);
  }
}
