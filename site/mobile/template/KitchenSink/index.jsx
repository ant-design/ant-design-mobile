import React from 'react';
import Promise from 'bluebird';
import { Link } from 'react-router';
import { Icon, Drawer, List, Flex } from 'antd-mobile';
import * as utils from '../../../theme/template/utils';
import Page from './Page';
import Item from './Item';

const hashImgObj = {
  'action-sheet': 'sTvsgvivVKnqQtS',
  alert: 'XdSYKalBelFOMqd',
  badge: 'nSDcLEWgUrOkCJq',
  button: 'lOXYjfSRPpkwudh',
  carousel: 'ifHkrPIiJFcMNzT',
  checkbox: 'IznQRcXpGsRfHXX',
  collapse: 'yIQQHiTULgYehij',
  'date-picker': 'XjBSEKVWMeIulGv',
  drawer: 'IptWdCkrtkAUfjE',
  popup: 'PMIYKpJIhmqwyXI',
  flex: 'KZtGFWmnMUFpiSE',
  'float-menu': 'HhilRXHawmUwlML',
  grid: 'QbGTlZewFSvHlSS',
  icon: 'zRqLyIrksLZyGPo',
  'image-picker': 'CVHyVxhFqkhZfYs',
  'input-item': 'nZNeLMIrNJiuSyr',
  list: 'wlNeoTpEKIpTcOW',
  'list-action': 'OJgqKyrKGdIEfwp',
  'list-view': 'wlNeoTpEKIpTcOW',
  menu: 'NRpaVQhCssmCMvT',
  modal: 'AMszKQQdMvMmYng',
  'nav-bar': 'VrOSRjcBgRlvffN',
  result: 'nQbMEPIMUYIxyfW',
  picker: 'WYAMQVIuqdtAGqK',
  progress: 'aIomfcRsRHmPyNo',
  radio: 'MHMIvHaTJRwnFeV',
  'refresh-control': 'kmDibjGUbFrdeeY',
  'search-bar': 'UAJROWKghHcBeoL',
  slider: 'ViixEhXOewlupTr',
  stepper: 'aDugjLTLBeQffgX',
  steps: 'aDugjLTLBeQffgX',
  switch: 'NmMXnPngqRrKHrq',
  tabs: 'oeOvbvMpweuBOvO',
  tag: 'AkXOzPmaytaVYLD',
  'textarea-item': 'aDugjLTLBeQffgX',
  timeline: 'aIomfcRsRHmPyNo',
  toast: 'IptWdCkrtkAUfjE',
  'notice-bar': 'AraRKTSdXQbKkGv',
  'white-space': 'mioJMWDMAmiurTR',
  'wing-blank': 'WzZoGzTRKzQgMWi',
  card: 'kkQBRgZgcqSyMPS',
  tooltip: 'WFdIwNKWiAkOQYd',
  pagination: 'xavLtHVkhbayZau',
  loading: 'PfDTjHZZKwYguUV',
  table: 'yZwezpbmJzARTxK',
  form: 'gvFzrNIoBJneFUY',
};

export function collect(nextProps, callback) {
  const componentsList = utils.collectDocs(nextProps.data.components);

  const moduleDocs = [
    ...utils.collectDocs(nextProps.data.docs.react),
    ...componentsList,
    /* eslint-disable new-cap */
    nextProps.data.CHANGELOG(),
    /* eslint-enable new-cap */
  ];

  const promises = [Promise.all(componentsList), Promise.all(moduleDocs)];

  Promise.all(promises)
    .then((list) => callback(null, {
      ...nextProps,
      components: list[0],
    }));
}

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
    const customWidth = (document.documentElement.clientWidth / 3);
    const itemStyle = {
      width: '33.33%',
      height: `${customWidth >= 138 * window.devicePixelRatio ? 138 * window.devicePixelRatio : customWidth}px`,
    };

    const props = this.props;

    const lists = {};
    props.components.forEach(i => {
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
                  <Link to={`/${fileName}/`}>{item.chinese}</Link>
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
                    let flexItems = [];
                    for (let i = 0; i < lists[cate].length; i++) {
                      const ii = lists[cate][i];
                      const fileName = ii.filename.split('/')[1];
                      const img = hashImgObj[fileName] || 'IptWdCkrtkAUfjE';
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
