/* tslint:disable:no-unused-variable */
import React from 'react';
/* tslint:enable:no-unused-variable */
import splitObject from '../_util/splitObject';
import MyScroller from './MyScroller';
import List from '../list';
const { Item } = List;

export default function handleProps(props) {
  let [{ renderHeader, renderFooter, renderSectionHeader, renderRow }, restProps] =
    splitObject(props, ['renderHeader', 'renderFooter', 'renderSectionHeader', 'renderRow']);
  const listPrefixCls = props.listPrefixCls;

  const extraProps = {
    renderHeader: null as any,
    renderFooter: null as any,
    renderSectionHeader: null as any,
    renderScrollComponent: scrollerProps => <MyScroller {...scrollerProps} />,
    renderBodyComponent: () => <div className={`${listPrefixCls}-body`} />,
    renderRow,
  };
  if (renderHeader) {
    extraProps.renderHeader =
      () => <div className={`${listPrefixCls}-header`}>{renderHeader() }</div>;
  }
  if (renderFooter) {
    extraProps.renderFooter =
      () => <div className={`${listPrefixCls}-footer`}>{renderFooter() }</div>;
  }
  if (renderSectionHeader) {
    extraProps.renderSectionHeader =
      (sectionData, sectionID) => <Item>{renderSectionHeader(sectionData, sectionID)}</Item>;
  }
  return { restProps, extraProps };
}
