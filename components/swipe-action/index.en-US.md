---
category: Components
type: Gesture
title: SwipeAction
---

iOS-style swipeout buttons that appear from behind a component.

### Definition

Call out oprations from one side of screen with gesture.

### Rules
1. Only one row can be swiped at a time.
2. Can hide oprations by clicking outside of buttons or swiping the list backforwards.

## API

### SwipeAction

Properties | Descrition | Type | Default
-----------|------------|------|--------
| style           | style for `swipeout`   | Object |             |
| left       | left buttons for `swipeout`      | Array | `null` |
| right       | right buttons for `swipeout`    | Array | `null` |
| autoClose       | auto hide after button is pressed   | Boolean | `function() {}` |
| onOpen       |    callback function that is triggered when the buttons will be opened   | (): void | `function() {}` |
| disabled       |   whether is disabled    | Boolean | `false` |
| onClose   |  callback function that is triggered when the buttons will be closed | (): void | `function() {}` |

### Button

| Properties | Descrition             | Type                    | Default |
|------|------------------|-------------------------|--------|
| text       | text of button    | String | `Click` |
| style       | style of button     | Object | `` |
| onPress       | callback function that is triggered when button will be pressed   | (): void | `function() {}` |
| className | class name of button | String | |
