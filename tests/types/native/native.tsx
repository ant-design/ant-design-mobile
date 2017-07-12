import List from 'antd-mobile/lib/list';

const noop = () => { };
const style = { rotation: 0 };

const list = () => (
  <List
    renderHeader={noop}
    renderFooter={noop}
    onTouchEnd={noop}
    styles={{
      Header: style,
      Body: style,
      BodyBottomLine: style,
      Footer: style,
    }}
  >
    <br />
    <List.Item
      align='top'
      disabled
      multipleLine
      thumb='/'
      extra='/'
      arrow=''
      wrap
      styles={{
        underlayColor: '',
        Content: style,
        column: style,
        Extra: style,
        Arrow: style,
        ArrowV: style,
        Item: style,
        Thumb: style,
        multipleThumb: style,
        Line: style,
        multipleLine: style
      }}
      onClick={noop}
      onTouchEnd={noop}
    >
      <br />
      <List.Item.Brief
        wrap
        style={style}
        styles={{
          Brief: style,
          BriefText: style
        }}
      >
        <br />
      </List.Item.Brief>
    </List.Item>
  </List>
);
