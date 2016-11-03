import React from 'react';
import classNames from 'classnames';
import Button from 'antd/lib/button';
import Modal from 'antd/lib/modal';
import Radio from 'antd/lib/radio';

export default class Demo extends React.Component {
  static contextTypes = {
    intl: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      fullscreen: false,
      lang: 'es6',
    };
  }

  handleCodeExapnd = () => {
    this.props.handleCodeExpandList(this.props.index, !this.props.codeExpand);
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

  handleProgrammingLangChange = (e) => {
    this.setState({ lang: e.target.value });
  }

  renderDemoCode(highlightedCode, inModal) {
    const props = this.props;
    const lang = this.state.lang;
    const style = !inModal ? null : { margin: '-22px -16px' };
    return Array.isArray(highlightedCode) ? (
      <div className="highlight" style={style}>
        <span
          className="fullscreen anticon anticon-arrow-salt"
          onClick={this.viewFullscreen}
          unselectable="none"
        />
        {props.utils.toReactComponent(highlightedCode)}
      </div>
    ) : (
      <div className="highlight" style={style}>
        <Radio.Group value={lang} onChange={this.handleProgrammingLangChange}>
          <Radio.Button value="es6">ES2016</Radio.Button>
          <Radio.Button value="ts">TypeScript</Radio.Button>
        </Radio.Group>
        {!inModal && (
          <span
            className="fullscreen anticon anticon-arrow-salt"
            onClick={this.viewFullscreen}
            unselectable="none"
          />
        )}
        <pre className="language-jsx">
          <code dangerouslySetInnerHTML={{ __html: highlightedCode[lang] }} />
        </pre>
      </div>
    )
  }

  render() {
    const props = this.props;
    const {
      meta,
      content,
      highlightedCode,
      highlightedStyle,
      className,
      codeExpand,
    } = props;

    const codeBoxClass = classNames({
      'code-box': true,
      [className]: className,
      expand: codeExpand,
    });

    const locale = this.context.intl.locale;
    const localizedTitle = meta.title[locale] || meta.title;
    const localizeIntro = content[locale] || content;
    const introChildren = props.utils
      .toReactComponent(['div'].concat(localizeIntro));

    return (
      <section className={codeBoxClass} id={meta.id} onClick={this.handleClick}>
        <Modal
          ref="modal"
          visible={this.state.fullscreen}
          title={meta.title} onCancel={this.handleCancel}
          width={900}
          footer={[
            <Button key="back" type="ghost" size="large" onClick={this.handleCancel}>返 回</Button>,
          ]}
        >
          {this.renderDemoCode(highlightedCode, true)}
        </Modal>

        <section className="code-box-meta markdown">
          <div className="code-box-title">
            <a href={`#${meta.id}`}>
              {localizedTitle}
            </a>
          </div>
          {introChildren}

          <span
            className="collapse anticon anticon-circle-o-right"
            onClick={this.handleCodeExapnd}
            unselectable="none"
          />
        </section>

        <section
          className={`highlight-wrapper ${codeExpand ? 'highlight-wrapper-expand' : ''}`}
          key="code"
        >
          {this.renderDemoCode(highlightedCode, false)}
          {
            highlightedStyle ?
              <div key="style" className="highlight">
                <pre>
                  <code
                    className="css"
                    dangerouslySetInnerHTML={{
                      __html: highlightedStyle,
                    }}
                  />
                </pre>
              </div> :
              null
          }
        </section>
      </section>
    );
  }
}
