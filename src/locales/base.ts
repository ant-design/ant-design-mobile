const typeTemplate = '${label} is not a valid ${type}'

export const base = {
  locale: 'en',
  common: {
    confirm: 'Confirm',
    cancel: 'Cancel',
    loading: 'Loading',
  },
  Calendar: {
    markItems: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    renderYearAndMonth: (year: number, month: number) => `${year}/${month}`,
  },
  Cascader: {
    placeholder: 'Selecting',
  },
  Dialog: {
    ok: 'OK',
  },
  ErrorBlock: {
    default: {
      title: 'Oops, something went wrong',
      description: 'Please wait a minute and try again',
    },
    busy: {
      title: 'Oops, not loading',
      description: 'Try to refresh the page',
    },
    disconnected: {
      title: 'Network is busy',
      description: 'Try to refresh the page',
    },
    empty: {
      title: "Hmm, couldn't find that...",
      description: 'Want to try a new search?',
    },
  },
  Form: {
    required: 'Required',
    optional: 'Optional',
    defaultValidateMessages: {
      default: 'Field validation error for ${label}',
      required: 'Please enter ${label}',
      enum: '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date',
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate,
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} must be at least ${min} characters',
        max: '${label} must be up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters',
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} must be minimum ${min}',
        max: '${label} must be maximum ${max}',
        range: '${label} must be between ${min}-${max}',
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}',
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: 'Uploading...',
    upload: 'Upload',
  },
  InfiniteScroll: {
    noMore: 'No more',
  },
  Mask: {
    name: 'Mask',
  },
  Modal: {
    ok: 'OK',
  },
  PullToRefresh: {
    pulling: 'Scroll down to refresh',
    canRelease: 'Release to refresh immediately',
    complete: 'Refresh successful',
  },
}

export type Locale = typeof base
