---
title: Footer
nav:
  title: Components
  path: /components
---

### DEMO

<code src="./demo/basic.tsx" />

### API

#### Footer

| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| children |  footer content |  Footer.Text \| Footer.Links \| Footer.Tags \| Footer.Logo  | `-` |

#### Footer.Text

| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| children | text content | string | `-` |

#### Footer.Links

| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| links |  link array | [{value: string; onPress: function}] | `[]` |

#### Foot.Tags

| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| tags | tag array | [{value: string; onPress: function}] | `[]` |

#### Footer.Logo

| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| src | img address | string | `-` |
