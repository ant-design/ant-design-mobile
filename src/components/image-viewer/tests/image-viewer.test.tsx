import React, { useRef, useState } from 'react'
import { render, testA11y, fireEvent, sleep } from 'testing'
import ImageViewer, { MultiImageViewerRef } from '../index'
import Button from '../../button'

const demoImages = [
  'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80',
  'https://images.unsplash.com/photo-1601128533718-374ffcca299b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3128&q=80',
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3113&q=80',
  'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=1000&q=80',
]

describe('ImageViewer', () => {
  test('passes a11y test', async () => {
    await testA11y(<ImageViewer image={demoImages[0]} visible={true} />)
  })
})

describe('ImageViewer.Multi', () => {
  test('calling ref.current.swipeTo before initialization', async () => {
    function App() {
      const [visible, setVisible] = useState(false)
      const ref = useRef<MultiImageViewerRef>(null)
      return (
        <>
          <Button
            onClick={() => {
              ref.current?.swipeTo(2)
              setVisible(true)
            }}
          >
            Show
          </Button>
          <ImageViewer.Multi
            ref={ref}
            images={demoImages}
            visible={visible}
            defaultIndex={0}
          />
        </>
      )
    }
    const renderer = render(<App />)
    expect(renderer.container).toMatchSnapshot()
    fireEvent.click(renderer.getByText('Show'))
    await sleep(1000)
    expect(renderer.getByText('3 / 4')).not.toBeNull()
    expect(renderer.container).toMatchSnapshot()
  })
})
