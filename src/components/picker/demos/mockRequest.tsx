import { basicColumns } from './columns-data'
import { sleep } from 'antd-mobile/es/utils/sleep'

export async function mockRequest(dealy: number) {
  await sleep(dealy)
  return basicColumns
}
