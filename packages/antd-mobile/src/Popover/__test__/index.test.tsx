import * as React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import {
  ScanCodeOutline,
  SystemQRcodeOutline,
  InformationCircleOutline,
  MoreOutline,
} from '@ant-design/mobile-icons'
import { Popover } from '..'

const Item = Popover.Item

describe('Popover', () => {
  it('snapshot', () => {
    const component = shallow(
      <Popover
        mask
        visible={true}
        overlay={[
          <Item key="4" value="scan" icon={ScanCodeOutline} data-seed="logId">
            Scan
          </Item>,
          <Item key="5" value="special" icon={SystemQRcodeOutline}>
            My Qrcode
          </Item>,
          <Item key="6" value="button ct" icon={InformationCircleOutline}>
            <span style={{ marginRight: 5 }}>Help</span>
          </Item>,
        ]}
        align={{
          overflow: { adjustY: 0, adjustX: 0 },
          offset: [-10, 0],
        }}
        onVisibleChange={() => null}
        onSelect={() => null}
        data-y="111"
      >
        <div>
          点击 <MoreOutline />
        </div>
      </Popover>,
    )

    expect(toJSON(component)).toMatchSnapshot()
  })
})
