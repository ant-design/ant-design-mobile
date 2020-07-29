import uuid from './uuid'

describe('_internal/uuid', () => {
  it('normal', () => {
    // 跑 100 遍，消除随机性
    for (let index = 0; index < 100; index++) {
      expect(uuid().length).toBe(36)
      expect(uuid().split('-').length).toBe(5)
      expect(uuid().includes('4')).toBeTruthy()
    }
  })

  // cannot mock performance to null
})
