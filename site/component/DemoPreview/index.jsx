import React from 'react';
import classNames from 'classnames';

export default class DemoPreview extends React.Component {

  render() {
    const { id, className, meta, preview, style, src, } = this.props;
    const codeBoxClass = classNames({
      'code-box': true,
      'code-box-preview': true,
      [className]: className,
    });
    return (
      <section className={codeBoxClass} id={ `preview-${id}` }>
        <section className="code-box-demo code-box-demo-preview">
        {
          meta.iframe ?
          <iframe src={src} /> :
          preview
        }
        {
          !!style ?
          <style dangerouslySetInnerHTML={{ __html: style }} /> :
          null
        }
        </section>
      </section>
    );
  }
}
