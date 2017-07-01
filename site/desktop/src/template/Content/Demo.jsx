/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FormattedMessage } from 'react-intl';
import { Button, Modal, Radio, Tooltip, Icon } from 'antd';

export default class Demo extends React.Component {
  static contextTypes = {
    intl: PropTypes.object,
  }

  state = {
    fullscreen: false,
    lang: 'es6',
    copied: false,
    sourceCode: '',
  };

  saveAnchor = (anchor) => {
    this.anchor = anchor;
  }

  componentDidMount() {
    const { meta } = this.props;
    if (meta.id === location.hash.slice(1)) {
      this.anchor.click();
    }
    this.componentWillReceiveProps(this.props);
  }

  handleCodeExapnd = () => {
    const { handleCodeExpandList, index, codeExpand } = this.props;
    handleCodeExpandList(index, !codeExpand);
  }

  handleClick = (e) => {
    const { togglePreview, index, currentIndex } = this.props;

    if (index !== currentIndex && e.target.className !== 'collapse anticon anticon-circle-o-right' &&
      e.target.className !== 'fullscreen anticon anticon-arrow-salt') {
      togglePreview({
        index,
      });
    }
  }

  viewFullscreen = () => {
    this.setState({
      fullscreen: true,
    });
  }

  handleCancel = () => {
    this.setState({
      fullscreen: false,
    });
  }

  handleCodeCopied = () => {
    this.setState({ copied: true });
  }

  onCopyTooltipVisibleChange = (visible) => {
    if (visible) {
      this.setState({
        copyTooltipVisible: visible,
        copied: false,
      });
      return;
    }
    this.setState({
      copyTooltipVisible: visible,
    });
  }

  handleProgrammingLangChange = (e) => {
    this.setState({ lang: e.target.value });
  }
  /* eslint-disable react/jsx-indent */
  renderDemoCode(highlightedCode, inModal) {
    const props = this.props;
    const lang = this.state.lang;
    return Array.isArray(highlightedCode) ? (
      <div className="highlight">
          <CopyToClipboard
            text={this.state.sourceCode}
            onCopy={this.handleCodeCopied}
          >
            <Tooltip
              title={<FormattedMessage id={`app.demo.${this.state.copied ? 'copied' : 'copy'}`} />}
              visible={this.state.copyTooltipVisible}
              onVisibleChange={this.onCopyTooltipVisibleChange}
            >
              <span
                className="code-box-code-copy"
              >
                <Icon type={(this.state.copied && this.state.copyTooltipVisible) ? 'check' : 'copy'} />
              </span>
            </Tooltip>
          </CopyToClipboard>
        {props.utils.toReactComponent(highlightedCode)}
      </div>
    ) : (
      <div className="highlight">
        {inModal && (
          <Radio.Group
            value={lang}
            onChange={this.handleProgrammingLangChange}
          >
            <Radio.Button value="es6">ES2016</Radio.Button>
            <Radio.Button value="ts">TypeScript</Radio.Button>
          </Radio.Group>
        )}
        <pre className="language-jsx">
          <code dangerouslySetInnerHTML={{ __html: highlightedCode[lang] }} />
        </pre>
      </div>
    );
  }
  componentWillReceiveProps(nextProps) {
    const { highlightedCode } = nextProps;
    const div = document.createElement('div');
    div.innerHTML = highlightedCode[1].highlighted;
    this.setState({ sourceCode: div.textContent });
  }
   /* eslint-enable react/jsx-indent */
  render() {
    const { props, state } = this;
    const {
      meta,
      content,
      highlightedCode,
      highlightedStyle,
      className,
      codeExpand,
      utils,
    } = props;

    const codeBoxClass = classNames({
      'code-box': true,
      [className]: className,
      expand: codeExpand,
    });

    const locale = this.context.intl.locale;
    const localizedTitle = meta.title[locale] || meta.title;
    const localizeIntro = content[locale] || content;
    const introChildren = utils.toReactComponent(['div'].concat(localizeIntro));

    const hsNode = highlightedStyle ? (
      <div key="style" className="highlight">
        <pre>
          <code
            className="css"
            dangerouslySetInnerHTML={{
              __html: highlightedStyle,
            }}
          />
        </pre>
      </div>) : null;

    return (
      <section className={codeBoxClass} id={meta.id} onClick={this.handleClick}>
        <Modal
          ref="modal"
          visible={state.fullscreen}
          title={localizedTitle}
          onCancel={this.handleCancel}
          width={900}
          footer={[
            <Button key="back" type="ghost" size="large" onClick={this.handleCancel}><FormattedMessage id="app.ComponentDoc.Modal.return" /></Button>,
          ]}
        >
          {this.renderDemoCode(highlightedCode, true)}
          {hsNode}
        </Modal>

        <section className="code-box-meta markdown">
          <div className="code-box-title">
            <a href={`#${meta.id}`} ref={this.saveAnchor}>
              {localizedTitle}
            </a>
          </div>
          {introChildren}

          <span
            className="collapse anticon anticon-circle-o-right"
            onClick={this.handleCodeExapnd}
            unselectable="none"
          />

          {codeExpand && (
            <span
              className="fullscreen anticon anticon-arrow-salt"
              onClick={this.viewFullscreen}
              unselectable="none"
            />
          )}
          {codeExpand && !Array.isArray(highlightedCode) && (
            <Radio.Group
              value={state.lang}
              onChange={this.handleProgrammingLangChange}
            >
              <Radio.Button value="es6">ES2016</Radio.Button>
              <Radio.Button value="ts">TypeScript</Radio.Button>
            </Radio.Group>
          )}
        </section>

        <section
          className={`highlight-wrapper ${codeExpand ? 'highlight-wrapper-expand' : ''}`}
          key="code"
        >
          {this.renderDemoCode(highlightedCode, false)}
          {hsNode}
        </section>
      </section>
    );
  }
}
