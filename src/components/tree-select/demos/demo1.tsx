import React from 'react'
import { TreeSelect } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  const options2 = [
    {
      label: '分类A很长很长很长很长的标题',
      value: 'A',
      children: [
        {
          label: '分类A-1',
          value: 'A1',
        },
        {
          label: '分类A-2',
          value: 'A2',
        },
      ],
    },
    {
      label: '分类B',
      value: 'B',
      children: [
        {
          label: '分类B-1',
          value: 'B1',
        },
        {
          label: '分类B-2',
          value: 'B2',
        },
      ],
    },
  ]

  const options3 = [
    {
      label: '分类A',
      value: 'A',
      children: [
        {
          label: '分类A-1',
          value: 'A1',
          children: [
            {
              label: '分类A-1-1',
              value: 'A11',
            },
            {
              label: '分类A-1-2',
              value: 'A12',
            },
          ],
        },
        {
          label: '分类A-2',
          value: 'A2',
          children: [
            {
              label: '分类A-2-1',
              value: 'A21',
            },
            {
              label: '分类A-2-2',
              value: 'A22',
            },
          ],
        },
      ],
    },
    {
      label: '分类B',
      value: 'B',
      children: [
        {
          label: '分类B-1',
          value: 'B1',
          children: [
            {
              label: '分类B-1-1',
              value: 'B11',
            },
            {
              label: '分类B-1-2',
              value: 'B12',
            },
          ],
        },
        {
          label: '分类B-2',
          value: 'B2',
          children: [
            {
              label: '分类B-2-1',
              value: 'B21',
            },
            {
              label: '分类B-2-2',
              value: 'B22',
            },
          ],
        },
      ],
    },
    {
      label: '分类C',
      value: 'C',
      children: [
        {
          label: '分类C-1',
          value: 'C1',
          children: [
            {
              label: '分类C-1-1',
              value: 'C11',
            },
            {
              label: '分类C-1-2',
              value: 'C12',
            },
          ],
        },
        {
          label: '分类C-2',
          value: 'C2',
          children: [
            {
              label: '分类C-2-1',
              value: 'C21',
            },
            {
              label: '分类C-2-2',
              value: 'C22',
            },
          ],
        },
      ],
    },
    {
      label: '分类D',
      value: 'D',
      children: [
        {
          label: '分类D-1',
          value: 'D1',
          children: [
            {
              label: '分类D-1-1',
              value: 'D11',
            },
            {
              label: '分类D-1-2',
              value: 'D12',
            },
          ],
        },
        {
          label: '分类D-2',
          value: 'D2',
          children: [
            {
              label: '分类D-2-1',
              value: 'D21',
            },
            {
              label: '分类D-2-2',
              value: 'D22',
            },
          ],
        },
      ],
    },
  ]

  return (
    <div>
      <DemoBlock title='单选' padding='0'>
        <div style={{ height: '180px' }}>
          <TreeSelect
            defaultValue={['A', 'A1', 'A12']}
            options={options3}
            onChange={(value, nodes) => {
              console.log(value, nodes)
            }}
          />
        </div>
      </DemoBlock>
      <DemoBlock title='两列单选' padding='0'>
        <div style={{ height: '180px' }}>
          <TreeSelect
            defaultValue={['A', 'A1']}
            options={options2}
            onChange={(value, nodes) => {
              console.log(value, nodes)
            }}
          />
        </div>
      </DemoBlock>
    </div>
  )
}
