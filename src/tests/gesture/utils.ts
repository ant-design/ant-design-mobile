// https://github.com/pmndrs/use-gesture/blob/main/test/utils.tsx
export function patchCreateEvent(createEvent: any) {
  // patching createEvent
  for (const key in createEvent) {
    if (key.indexOf('pointer') === 0) {
      // eslint-disable-next-line
      // @ts-ignore
      const fn = createEvent[key.replace('pointer', 'mouse')]
      if (!fn) continue

      createEvent[key] = function (
        // eslint-disable-next-line
        // @ts-ignore
        type,
        { pointerId = 1, pointerType = 'mouse', ...rest } = {}
      ) {
        const event = fn(type, rest)
        event.pointerId = pointerId
        event.pointerType = pointerType
        const eventType = event.type
        Object.defineProperty(event, 'type', {
          get: function () {
            return eventType.replace('mouse', 'pointer')
          },
        })
        return event
      }
    }
  }
}
