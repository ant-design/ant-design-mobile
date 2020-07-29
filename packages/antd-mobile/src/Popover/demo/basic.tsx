import * as React from 'react'
import { unstable_Popover as Popover } from '@ant-design/mobile'

import { More, ScanCode, Help, Qr, Gift } from '@ant-design/mobile-icons'

const Item = Popover.Item

export default () => {
  const [visible, setVisible] = React.useState(true)

  const handleVisibleChange = (visible: boolean) => {
    setVisible(visible)
  }

  const select = (opt: any) => {
    setVisible(false)
    console.log('the visible', visible)
  }

  return (
    <div>
      <Popover
        mask
        visible={visible}
        overlay={[
          <Item key="4" value="scan" icon={ScanCode} data-seed="logId">
            Scan
          </Item>,
          <Item key="5" value="special" badge={{ dot: true }} icon={Qr}>
            My Qrcode
          </Item>,
          <Item key="6" value="button ct" icon={Help}>
            <span>Help</span>
          </Item>,
          <Item key="7" value="button ct" badge={{ text: 123 }} icon={Gift}>
            <span>Dot</span>
          </Item>,
        ]}
        align={{
          overflow: { adjustY: 0, adjustX: 0 },
          offset: [-10, 0],
        }}
        onVisibleChange={visible => handleVisibleChange(visible)}
        onSelect={opt => select(opt)}
      >
        <div>
          点击 <More />
        </div>
      </Popover>
    </div>
  )
}
