import { FloatingPanel, List } from 'antd-mobile'

const data = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
]

const thresholds = [100, window.innerHeight * 0.4, window.innerHeight * 0.8]

export default () => {
  return (
    <FloatingPanel thresholds={thresholds}>
      <List>
        {data.map((item, index) => (
          <List.Item key={index}>{item}</List.Item>
        ))}
      </List>
    </FloatingPanel>
  )
}
