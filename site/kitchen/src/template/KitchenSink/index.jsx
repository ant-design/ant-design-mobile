/* eslint arrow-body-style: 0 */
/* eslint no-console:0 */

import React from 'react';

import List from 'antd-mobile/lib/list';
import 'antd-mobile/lib/list/style';
import Icon from 'antd-mobile/lib/icon';
import 'antd-mobile/lib/icon/style';

import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl';
import '../../static/style';
import enLocale from '../../en-US';
import cnLocale from '../../zh-CN';
import { getQuery, injectPreactDevtool } from '../../../../utils';

injectPreactDevtool();

const sort = (a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const lang = getQuery('lang') || window.navigator.language;
    const appLocale = lang.toLowerCase() === 'zh-cn' ? cnLocale : enLocale;
    addLocaleData(appLocale.data);
    this.state = {
      appLocale,
      cateOpend: [false, false, false, false, false, false, false],
      ...this.getStateCache(),
    };
  }

  componentDidMount() {
    if (window.parent && window.parent.postMessage) {
      window.parent.postMessage('kitchen_loaded', '/');
    }
    if (this.state.scrollTop) {
      setTimeout(() => {
        document.documentElement.scrollTop = this.state.scrollTop;
        document.body.scrollTop = this.state.scrollTop;
      }, 500);
    }
  }

  getStateCache = () => {
    try {
      const data = JSON.parse(localStorage.getItem('_mobile-index-state'));
      if (data && +new Date() - data.lastDate < 30 * 60000) {
        return data;
      }
    } catch (error) {
      console.warn('state cache get error:', error);
    }
    return {};
  }

  setStateCache = (newData = {}) => {
    try {
      const { appLocale, ...data } = this.state;
      localStorage.setItem('_mobile-index-state', JSON.stringify({
        ...data,
        lastDate: +new Date(),
        ...newData,
      }));
    } catch (error) {
      console.warn('state cache set error:', error);
    }
  }

  onOpenChange = (index) => {
    const { cateOpend } = this.state;
    cateOpend[index] = !cateOpend[index];
    this.setState({ cateOpend }, () => {
      this.setStateCache({
        scrollTop: 0,
      });
    });
  }

  addSearch = () => {
    return window.location.search || '';
  }

  scrollTop = () => {
    return document.documentElement.scrollTop || document.body.scrollTop;
  }

  render() {
    const { picked, themeConfig: config } = this.props;
    const { appLocale } = this.state;
    const lists = {};
    picked.components
      .filter(item => item.meta.filename.includes(appLocale.locale))
      .forEach((i) => {
        const { meta } = i;
        if (!lists[meta.type]) {
          lists[meta.type] = [];
        }
        const fileName = meta.filename.split('/')[1];
        if (fileName && config.indexDemos.indexOf(fileName) > -1) {
          // add demos
          const demos = [];
          picked.indexDemos.forEach((j) => {
            if (j.component === fileName) {
              demos.push(j.meta);
            }
          });
          meta.demos = demos;
        }
        const source = getQuery('source');
        if (source && source === 'design') {
          if (meta.source && meta.source === 'design') {
            lists[meta.type].push(meta);
          }
        } else {
          lists[meta.type].push(meta);
        }
      });

    let rootPath = '/kitchen-sink/components';
    if (window.location.port === '8002') {
      rootPath = '/components';
    }
    return (
      <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
        <div className="am-demo-page">
          <div className="am-demo-hd">
            <h1 className="am-demo-title"><FormattedMessage id="app.site.title" /></h1>
            <h2 className="am-demo-subtitle"><FormattedMessage id="app.site.subTitle" /></h2>
          </div>
          <div className="am-demo-bd">
            {
              Object.keys(lists)
                .sort((a, b) => config.categoryOrder.indexOf(a) - config.categoryOrder.indexOf(b))
                .map((cate, index) => (lists[cate].length ? (
                  <List
                    key={`${cate}-${index}`}
                    renderHeader={() => (
                      <div
                        onClick={() => this.onOpenChange(index)}
                        className="am-demo-category"
                      >
                        <div className="am-demo-category-name">{appLocale.locale === 'en-US' ? cate : `${config.cateChinese[cate]} ${cate}`}</div>
                        <div className="am-demo-category-arrow"><span><Icon type="down" /></span></div>
                      </div>
                    )}
                    className={this.state.cateOpend[index] ? 'category-open' : 'category-closed'}
                  >
                    {
                      lists[cate].sort((a, b) => sort(a.title.toLowerCase(), b.title.toLowerCase())).map((item) => {
                        const paths = item.filename.split('/');
                        if (config.indexDemos.indexOf(paths[1]) > -1) {
                          return item.demos.sort((a, b) => a.order > b.order).map(j => (
                            <List.Item
                              arrow="horizontal"
                              key={`${j.filename}-${cate}`}
                              onClick={() => {
                                this.setStateCache({
                                  scrollTop: this.scrollTop(),
                                });
                                window.location.href = `${rootPath}/${paths[1]}${this.addSearch()}#${
                                  paths[1] + config.hashSpliter + j.order}`;
                              }}
                            >
                              {`${item.title} ${appLocale.locale === 'zh-CN' ? item.subtitle : ''}-${j.title[appLocale.locale]}`}
                            </List.Item>
                          ));
                        }
                        return (
                          <List.Item
                            arrow="horizontal"
                            key={`${item.filename}-${cate}`}
                            onClick={() => {
                              this.setStateCache({
                                scrollTop: this.scrollTop(),
                              });
                              window.location.href = `${rootPath}/${paths[1]}${this.addSearch()}`;
                            }}
                          >
                            {`${item.title} `}
                            {!item.subtitle || appLocale.locale === 'en-US' ? null : item.subtitle}
                          </List.Item>
                        );
                      })
                    }
                  </List>
                ) : null))
            }
          </div>
        </div>
      </IntlProvider>
    );
  }
}
