import React from 'react';
import { Row, Col, Affix, Radio, Button, Icon, Popover } from 'antd';
import Demo from '../Demo';
import DemoPreview from '../DemoPreview';
import * as utils from '../utils';
import demosList from '../../../_data/demos-list';

import QRCode from 'qrcode.react';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default class ComponentDoc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expandAll: false,
      currentIndex: 0,
      role: 'engineer',
    };
  }

  componentDidMount() {
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    const { chinese, english } = this.props.doc.meta;
    utils.setTitle(`${chinese} ${english} - Ant Design`);
  }

  handleExpandToggle = () => {
    this.setState({
      expandAll: !this.state.expandAll,
    });
  }

  handleRoleToggle = (e) => {
    this.setState({
      role: e.target.value,
    });
  }

  togglePreview = (e) => {
    this.setState({
      currentIndex: e.index,
    });
  }

  nextPreview = () => {
    this.setState({
      currentIndex: this.state.currentIndex + 1,
    });
  }

  prePreview = () => {
    this.setState({
      currentIndex: this.state.currentIndex - 1,
    });
  }

  render() {
    const { doc, location } = this.props;
    const { description, meta } = doc;

    const demoUrl = `http://beta.antm.alipay.net/kitchen-sink.html#/${meta.english.toLowerCase().replace(/\s+/g, '')}`;

    const PopoverContent = (<div>
      <h4 style={{ margin: '8px 0 12px' }}>扫二维码查看演示效果</h4>
      <QRCode size={ 144 } value={ demoUrl } />
    </div>);

    const demos = (demosList[meta.fileName] || [])
            .filter((demoData) => !demoData.meta.hidden);
    const expand = this.state.expandAll;
    const currentIndex = this.state.currentIndex;
    const role = this.state.role;

    const leftChildren = [];
    const rightChildren = [];

    const demoSort = demos.sort((a, b) => {
      return parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10);
    });

    const demoTitle = demoSort[currentIndex].meta.title;

    demoSort.forEach((demoData, index) => {
      demoData.role = role;
      demoData.index = index;

      leftChildren.push(
        <Demo togglePreview={ this.togglePreview } {...demoData} className={index === currentIndex ? 'code-box-target' : ''}
          key={index}
          expand={expand} pathname={location.pathname} />
      );

      rightChildren.push(
        <DemoPreview {...demoData} className={index === currentIndex ? 'show' : 'hide'}
          key={ `preview-${index}` } />
      );
    });

    return (
      <article>
        <Affix className="toc-affix">
          <RadioGroup defaultValue="engineer" size="small" onChange= { this.handleRoleToggle }>
            <RadioButton value="designer">设计者</RadioButton>
            <RadioButton value="engineer">前端</RadioButton>
          </RadioGroup>
        </Affix>
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
          <h2>
            代码演示
          </h2>
        </section>

        <Row>
          <Col span="13" style={{ width: '54%', paddingRight: '16px' }}>
            { leftChildren }
            <Row>
              <Col span="12" style={{ paddingRight: '8px' }}>
                <Button style={{ width: '100%' }}
                  type="ghost"
                  disabled = { currentIndex === 0 }
                  onClick = { this.prePreview } >
                  <Icon type="up" />
                </Button>
              </Col>
              <Col span="12" style={{ paddingLeft: '8px' }}>
                <Button style={{ width: '100%' }}
                  type="ghost"
                  disabled = { currentIndex >= demos.length - 1 }
                  onClick = { this.nextPreview } >
                  <Icon type="down" />
                </Button>
              </Col>
            </Row>
          </Col>
          <Col span="11">
            <div className="demo-preview-wrapper">
              <div className="demo-preview-header">
                <div className = "demo-preview-statbar">
                  <img style={{ margin: '0 2px' }} src="https://os.alipayobjects.com/rmsportal/KorHKxDiNFtvpsp.png" />
                </div>
                <div className = "demo-preview-navbar">
                  <span style={{ color: '#fff', fontSize: '18px', lineHeight: '44px' }}>{ demoTitle }</span>
                </div>
              </div>
              <div className="demo-preview-scroller">
              { rightChildren }
              </div>
            </div>
          </Col>

        </Row>

        {
          role === 'engineer' &&
          utils.jsonmlToComponent(
            location.pathname,
            ['section', {
              className: 'markdown api-container',
            }].concat(doc.api || [])
          )
        }
      </article>
    );
  }
}
