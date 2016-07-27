import React from 'react';
// import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import classNames from 'classnames';
import { getChildren } from 'jsonml.js/lib/utils';
import Demo from './Demo';
import { Button, Icon, Popover } from 'antd';
import QRCode from 'qrcode.react';

function getOffsetTop(dom) {
  let top = 0;
  top += dom.offsetTop;

  while (dom.parentElement) {
    if (getComputedStyle(dom.parentElement).position === 'relative') {
      top += dom.parentElement.offsetTop;
    }
    dom = dom.parentElement;
  }
  return top;
}

export default class ComponentDoc extends React.Component {
  static contextTypes = {
    intl: React.PropTypes.object,
  }

  constructor(props) {
    super(props);

    this.state = {
      expandAll: false,
      currentIndex: this.getIndex(props),
      // 收起展开代码的存储数组
      codeExpandList: [],
      toggle: false,
    };
  }

  getIndex(props) {
    const linkTo = props.location.hash.replace('#', '');

    // const { meta } = props.doc;
    const demos = Object.keys(props.demos).map((key) => props.demos[key])
            .filter((demoData) => !demoData.meta.hidden);
    const demoSort = demos.sort((a, b) => parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10));

    demos.map((item, index) => {
      item.index = index;
    });

    const linkIndex = linkTo ? demoSort.filter((item) => (item.meta.id === linkTo))[0].index : 0;

    return linkIndex;
  }

  componentWillReceiveProps = () => {
    this.setState({
      currentIndex: 0,
      codeExpandList: [],
      toggle: false,
    });
  }

  togglePreview = (e) => {
    this.setState({
      currentIndex: e.index,
      toggle: true,
    });
  }

  // 用于控制内部代码的展开和收起
  handleCodeExpandList = (index, type) => {
    const codeExpandList = { ...this.state.codeExpandList };
    codeExpandList[index] = type;

    this.setState({ codeExpandList });
  }

  handleExpandToggle = () => {
    const codeExpandList = {};
    // const { meta } = this.props.doc;
    const props = this.props;
    const demos = Object.keys(props.demos).map((key) => props.demos[key])
            .filter((demoData) => !demoData.meta.hidden);

    this.setState({
      expandAll: !this.state.expandAll,
      codeExpandList: demos.map((item, index) => codeExpandList[index] = !this.state.expandAll),
    });
  }

  onScrollEvent() {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    const asideDemo = document.getElementById('aside-demo');

    const demoDom = document.getElementById('demo-code');
    if (!demoDom) return;
    const demoTop = getOffsetTop(demoDom);

    const apiDom = document.getElementById('api');
    if (!apiDom) return;
    const apiTop = getOffsetTop(apiDom);

    if (scrollTop + 568 >= apiTop || scrollTop - 40 < demoTop) {
      if (asideDemo.className.indexOf('fixed') >= 0) {
        asideDemo.className = asideDemo.className.replace(/fixed/ig, '');
      }
    } else if (asideDemo.className.indexOf('fixed') < 0) {
      asideDemo.className += ' fixed';
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollEvent);
  }

  render() {
    const props = this.props;
    const { doc, location } = props;
    const { content, meta } = doc;
    // const locale = this.context.intl.locale;

    const demos = Object.keys(props.demos).map((key) => props.demos[key])
            .filter((demoData) => !demoData.meta.hidden);
    const expand = this.state.expandAll;

    const leftChildren = [];
    let linkButtons = [];

    const currentIndex = this.state.currentIndex;

    const demoSort = demos.sort((a, b) => parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10));

    const fileFstArr = demoSort[0].meta.filename.split('/');
    const filenameFirst = fileFstArr[fileFstArr.length - 1].split('.')[0];
    const fileArr = demoSort[currentIndex].meta.filename.split('/');
    const filename = fileArr[fileArr.length - 1].split('.')[0];

    demos.sort((a, b) => a.meta.order - b.meta.order)
      .forEach((demoData, index) => {
        linkButtons.push(
          <a href={`#${demoData.meta.id}`} key={index}>
            <Button>{demoData.meta.title}</Button>
          </a>
        );

        leftChildren.push(
          <Demo
            togglePreview={this.togglePreview}
            {...demoData}
            handleCodeExpandList={this.handleCodeExpandList}
            codeExpand={this.state.codeExpandList[index]}
            className={currentIndex === index ? 'code-box-target' : ''}
            key={index}
            index={index}
            utils={props.utils}
            expand={expand} pathname={location.pathname}
          />
        );
      });
    const expandTriggerClass = classNames({
      'code-box-expand-trigger': true,
      'code-box-expand-trigger-active': expand,
    });


    const path = doc.meta.filename.split('/')[1];
    const demoUrl = `${window.location.protocol}//${window.location.host}/kitchen-sink/${path}/${filenameFirst}`;

    const PopoverContent = (<div>
      <h4 style={{ margin: '8px 0 12px' }}>扫二维码查看演示效果</h4>
      <QRCode size={144} value={demoUrl} />
    </div>);

    const { title, subtitle, chinese, english } = meta;

    const iframeUrl = `${window.location.protocol}////${window.location.host}/kitchen-sink/${path}/${filename}`;
    return (
      <DocumentTitle title={`${subtitle || chinese || ''} ${title || english} - Ant Design`}>
        <article>
          <section className="markdown">
            <h1 className="section-title">
              {meta.title || meta.english} {meta.subtitle || meta.chinese}
              <Popover content={PopoverContent} placement="bottom">
                <Icon type="qrcode" />
              </Popover>
            </h1>
            {
              props.utils.toReactComponent(
                ['section', { className: 'markdown' }]
                  .concat(getChildren(content))
              )
            }

            <section id="demoTitle" className="demo-title-wrapper">
              <h2 id="demoTitle" className="demo-title">
                代码演示
                <Icon type="appstore" className={expandTriggerClass}
                  title="展开全部代码" onClick={this.handleExpandToggle}
                />
              </h2>
              {
              demos.length > 1 &&
                <div id="linkButtons" className="link-buttons" style={{ marginBottom: 12 }}>
                {linkButtons}
                </div>
              }
            </section>
          </section>

          <div id="demo-code" className="clearfix" style={{ paddingRight: 380 }}>
            <div style={{ width: '100%', float: 'left' }}>
            {leftChildren}
            </div>
            <div style={{ width: 380, padding: '0 30px', positon: 'relative', float: 'right', minHeight: 300, marginRight: '-380px' }}>
              <div id="aside-demo" className="aside-demo">
                <div style={{ width: '320px', height: '568px' }}>
                  <div className="demo-preview-wrapper">
                    <div className="demo-preview-header">
                      <div className="demo-preview-statbar">
                        <img width="290px" role="presentation" style={{ margin: '0 2px' }} src="https://os.alipayobjects.com/rmsportal/VfVHYcSUxreetec.png" />
                      </div>
                    </div>
                    <div className="demo-preview-scroller">
                      <section className="code-box code-box-preview">
                        <section className="code-box-demo code-box-demo-preview">
                          <iframe id="demoFrame" name="demoFrame" style={{ width: '320px', height: '548px' }} src={iframeUrl} />
                        </section>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {
            props.utils.toReactComponent(
              ['section', {
                id: 'api',
                className: 'markdown api-container',
              }].concat(getChildren(doc.api || ['placeholder']))
            )
          }
        </article>
      </DocumentTitle>
    );
  }
}
