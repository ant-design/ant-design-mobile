---
category: Components
type: Data Display
title: Badge
---

The red dot at corner for notification and getting user attention.

### When to use

- Use plain dot badge when user just need to know there is something new, eg: one-to-one new messages.
- Use numberic badge when user need to know specific number of notifications, eg: new messages from a group.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
size | size of badge, optional: `large` `small` | string | `small`
text | text or number inside badge | string\|number | -
corner | whether is badge at corner position | boolean | `false`
dot | show badge as a red dot | boolean | `false`
overflowCount | max count to show | number | `99`
hot | hot commercial style | boolean | `false`
