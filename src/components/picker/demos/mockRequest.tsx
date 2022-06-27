import { basicColumns } from './columns-data'
import { sleep } from 'antd-mobile/es/utils/sleep'

export async function mockRequest({ delay }: { delay: number }) {
  await sleep(delay)
  return basicColumns
}
