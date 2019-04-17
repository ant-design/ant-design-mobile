/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import List from '../list';
import { ListViewProps } from './index';
const { Item } = List;

export default function handleProps(props: ListViewProps, isIndexed: boolean) {
  const {
    renderHeader,
    renderFooter,
    renderSectionHeader,
    renderBodyComponent,
    ...restProps
  } = props;
  const listPrefixCls = props.listPrefixCls;

  const extraProps = {
    renderHeader: null as any,
    renderFooter: null as any,
    renderSectionHeader: null as any,
    renderBodyComponent:
      renderBodyComponent ||
      (() => <div className={`${listPrefixCls}-body`} />),
  };
  if (renderHeader) {
    extraProps.renderHeader = () => (
      <div className={`${listPrefixCls}-header`}>{renderHeader()}</div>
    );
  }
  if (renderFooter) {
    extraProps.renderFooter = () => (
      <div className={`${listPrefixCls}-footer`}>{renderFooter()}</div>
    );
  }
  if (renderSectionHeader) {
    extraProps.renderSectionHeader = isIndexed
      ? (sectionData: any, sectionID: string | number) => (
          <div>
            <Item prefixCls={listPrefixCls}>
              {renderSectionHeader(sectionData, sectionID)}
            </Item>
          </div>
        )
      : (sectionData: any, sectionID: string | number) => (
          <Item prefixCls={listPrefixCls}>
            {renderSectionHeader(sectionData, sectionID)}
          </Item>
        );
  }
  return { restProps, extraProps };
}
