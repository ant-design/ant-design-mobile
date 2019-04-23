import React from 'react';
import { Tooltip, Icon } from 'antd';
import './ThemerColor.less';

const Tag = ({ color, check, ...rest }) => (
  <div
    {...rest}
    style={{
      backgroundColor: color,
    }}
  >
    {check ? <Icon type="check" /> : ''}
  </div>
);

const ThemeColor = ({ colors, title, value, onChange }) => {
  let colorList = colors;
  const themeColor = {
    dust: '薄暮',
    volcano: '火山',
    sunset: '日暮',
    cyan: '明青',
    green: '极光绿',
    daybreak: '拂晓蓝（默认）',
    geekblue: '极客蓝',
    purple: '酱紫',
  };
  if (!colors) {
    colorList = [
      {
        key: 'dust',
        color: '#F5222D',
      },
      {
        key: 'volcano',
        color: '#FA541C',
      },
      {
        key: 'sunset',
        color: '#FAAD14',
      },
      {
        key: 'cyan',
        color: '#13C2C2',
      },
      {
        key: 'green',
        color: '#52C41A',
      },
      {
        key: 'daybreak',
        color: '#1890FF',
      },
      {
        key: 'geekblue',
        color: '#2F54EB',
      },
      {
        key: 'purple',
        color: '#722ED1',
      },
    ];
  }
  return (
    <div className="themeColor">
      <h3 className="title">{title}</h3>
      <div className="content">
        {colorList.map(({ key, color }) => (
          <Tooltip key={color} title={themeColor[key]}>
            <Tag
              className="colorBlock"
              color={color}
              check={value === color}
              onClick={() => onChange && onChange(color)}
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default ThemeColor;
