import React, { useRef, useState } from 'react'
import {
  render,
  testA11y,
  fireEvent,
  waitFor,
  screen,
  userEvent,
  mockDrag,
  act,
} from 'testing'
import ImageViewer, { MultiImageViewerRef } from '../index'
import Button from '../../button'

const classPrefix = `adm-image-viewer`

const demoImages = [
  'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80',
  'https://images.unsplash.com/photo-1601128533718-374ffcca299b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3128&q=80',
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3113&q=80',
  'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=1000&q=80',
]

describe('ImageViewer', () => {
  test('a11y', async () => {
    await testA11y(<ImageViewer image={demoImages[0]} visible={true} />)
  })

  test('`ImageViewer.show/ImageViewer.clear` should be work', async () => {
    render(
      <button
        onClick={() => {
          ImageViewer.show({ image: demoImages[0] })
        }}
      >
        show
      </button>
    )
    fireEvent.click(screen.getByText('show'))
    const img = await screen.findByRole('img')
    expect(img).toBeVisible()

    act(() => {
      ImageViewer.clear()
    })
    await waitFor(() => expect(img).not.toBeVisible())
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
    await waitFor(() =>
      // end of animation
      expect(document.querySelectorAll('.adm-mask')[0]).toHaveStyle(
        'opacity: 1;'
      )
    )
    expect(renderer.getByText('3 / 4')).not.toBeNull()
    expect(renderer.container).toMatchSnapshot()
  })

  test('rendering with footer', () => {
    function App() {
      return (
        <ImageViewer.Multi
          images={demoImages}
          visible
          renderFooter={() => <Button>查看原图</Button>}
        />
      )
    }
    render(<App />)
    expect(screen.getByText('查看原图')).toBeInTheDocument()
  })

  test('`ImageViewer.Multi.show` should be work', async () => {
    render(
      <>
        <button
          onClick={() => {
            ImageViewer.Multi.show({ images: demoImages })
          }}
        >
          show
        </button>
      </>
    )
    fireEvent.click(screen.getByText('show'))
    const imgs = await screen.findAllByRole('img')
    expect(imgs[0]).toBeVisible()
    await userEvent.click(imgs[0])
    await waitFor(() => expect(imgs[0]).not.toBeVisible())
  })

  test('slide should be work', async () => {
    Object.defineProperty(window, 'innerWidth', {
      value: 300,
    })
    const onIndexChange = jest.fn()

    render(
      <button
        onClick={() => {
          ImageViewer.Multi.show({ images: demoImages, onIndexChange })
        }}
      >
        show
      </button>
    )

    fireEvent.click(screen.getByText('show'))
    await screen.findAllByRole('img')
    const slides = document.querySelectorAll(`.${classPrefix}-slides`)[0]
    expect(screen.getByText('1 / 4')).toBeInTheDocument()

    mockDrag(slides, [
      {
        clientX: 300,
      },
      {
        clientX: 200,
      },
      {
        clientX: 100,
      },
    ])
    await waitFor(() => expect(onIndexChange).toBeCalledWith(1))
    expect(screen.getByText('2 / 4')).toBeInTheDocument()
  })
})
