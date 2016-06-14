import React from 'react';
import { Link } from 'react-router';
import { Button, Icon, Popover } from 'antd';
import Demo from '../Demo';
import * as utils from '../utils';
import demosList from '../../../_data/demos-list';
import scrollIntoView from 'dom-scroll-into-view';

import QRCode from 'qrcode.react';

export default class ComponentDoc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expandAll: false,
      currentIndex: 0,
      // 收起展开代码的存储数组
      codeExpandList: [],
      toggle: false,
    };
  }

  linkToAnchor(props) {
    this.setState({
      toggle: false,
    });
    const linkTo = props.location.query.linkTo;
    if (linkTo !== undefined) {
      const target = document.getElementById(linkTo);
      const demoTitle = document.getElementById('demoTitle');
      const _offSetTop = target.offsetTop - demoTitle.offsetTop;
      if (target !== null) {
        scrollIntoView(
          target,
          document,
          { offsetTop: _offSetTop, alignWithTop: true, onlyScrollIfNeeded: false }
        );
      }
    } else {
      scrollIntoView(document.body, document, { alignWithTop: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.linkToAnchor(nextProps);
    this.setState({
      currentIndex: 0,
      toggle: false,
    });
  }

  componentDidMount() {
    this.linkToAnchor(this.props);
    window.addEventListener('scroll', this.onScrollEvent);
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    const { chinese, english } = this.props.doc.meta;
    utils.setTitle(`${chinese} ${english} - Ant Design`);
  }

  togglePreview = (e) => {
    this.setState({
      currentIndex: e.index,
      toggle: true,
    });
  }

  // 用于控制内部代码的展开和收起
  handleCodeExpandList = (index, type) => {
    let codeExpandList = { ...this.state.codeExpandList };
    codeExpandList[index] = type;

    this.setState({
      codeExpandList
    });
  }

  handleExpandToggle = () => {
    this.setState({
      expandAll: !this.state.expandAll,
    });
  }

  onScrollEvent() {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    const asideDemo = document.getElementById('aside-demo');

    const demoDom = document.getElementById('demo-code');
    if (!demoDom) return;
    const demoTop = demoDom.offsetTop;

    const apiDom = document.getElementById('api');
    if (!apiDom) return;
    const apiTop = apiDom.offsetTop;

    if (scrollTop >= apiTop - 500 || scrollTop < demoTop) {
      if (asideDemo.className.indexOf('fixed') >= 0) {
        asideDemo.className = asideDemo.className.replace(/fixed/ig, '');
      }
    } else if (asideDemo.className.indexOf('fixed') < 0) {
      asideDemo.className += ' fixed';
    }
  }
  render() {
    const { doc, location } = this.props;
    const { description, meta } = doc;

    const linkTo = location.query.linkTo;

    const path = doc.meta.fileName.split('/')[1];
    const demoUrl = `${window.location.protocol}//${window.location.host}/kitchen-sink.html#/${path}`;

    const PopoverContent = (<div>
      <h4 style={{ margin: '8px 0 12px' }}>扫二维码查看演示效果</h4>
      <QRCode size={ 144 } value={ demoUrl } />
    </div>);

    const demos = (demosList[meta.fileName] || [])
            .filter((demoData) => !demoData.meta.hidden);
    const expand = this.state.expandAll;
    const currentIndex = this.state.currentIndex;

    const leftChildren = [];
    let rightChildren = null;
    let linkButtons = [];

    const demoSort = demos.sort((a, b) => {
      return parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10);
    });

    let scrollIndex;

    demoSort.forEach((demoData, index) => {
      demoData.index = index;

      if (!!linkTo && linkTo === demoData.id) {
        scrollIndex = index;
      }

      linkButtons.push(
        <Link className={ demoData.id === linkTo ? 'link-current' : ''}
          to={ `${location.pathname}?linkTo=${demoData.id}` } key={ index }>
          <Button>{ demoData.meta.title }</Button>
        </Link>
      );

      leftChildren.push(
        <Demo togglePreview={ this.togglePreview } {...demoData} handleCodeExpandList={this.handleCodeExpandList}
          codeExpand={this.state.codeExpandList[index]}
          className={demoData.id === linkTo ? 'code-box-target' : ''}
          key={index}
          expand={expand} pathname={location.pathname} />
      );
    });

    let iframeIndex = (!this.state.toggle && scrollIndex) ? scrollIndex : currentIndex;

    let iframeUrl = `/kitchen-sink.html#/${path}/${iframeIndex}`;

    rightChildren = (
      <section className="code-box code-box-preview">
        <section className="code-box-demo code-box-demo-preview">
          <iframe id="demoFrame" name="demoFrame" style={{ width: '320px', height: '548px' }} src={ iframeUrl } />
        </section>
      </section>
    );

    return (
      <article>
        <section className="markdown">
          <h1 className="section-title">
            {meta.chinese || meta.english}
            <Popover content={ PopoverContent } placement="bottom">
              <Icon style={{ position: 'relative', left: '8px', top: '-1px', fontSize: '24px' }} type="qrcode" />
            </Popover>
          </h1>
          {
            utils.jsonmlToComponent(
              location.pathname,
              ['section', { className: 'markdown' }]
              .concat(description)
            )
          }
          <h2 id="demoTitle">
          代码演示
          </h2>
        </section>

        {
        demoSort.length > 1 &&
        <div className="link-buttons" style={{ marginBottom: 12 }}>
          { linkButtons }
        </div>
        }
        <div id="demo-code" className="clearfix" style={{ paddingRight: 380 }}>
          <div style={{ width: '100%', float: 'left' }}>
            { leftChildren }
          </div>
          <div style={{ width: 380, padding: '0 30px', positon: 'relative', float: 'right', minHeight: 300, marginRight: '-380px' }}>
            <div id="aside-demo" className="aside-demo">
              <div style = {{ width: '320px', height: '568px' }}>
                <div className="demo-preview-wrapper">
                  <div className="demo-preview-header">
                    <div className = "demo-preview-statbar">
                      <img width="290px" style={{ margin: '0 2px' }} src="https://os.alipayobjects.com/rmsportal/VfVHYcSUxreetec.png" />
                    </div>
                  </div>
                  <div className="demo-preview-scroller">
                  { rightChildren }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {
          utils.jsonmlToComponent(
          location.pathname,
          ['section', {
            id: 'api',
            className: 'markdown api-container',
          }].concat(doc.api || [])
          )
        }

      </article>
    );
  }
}
