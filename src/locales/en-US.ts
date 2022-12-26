import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const enUS = mergeLocale(base, {
  locale: 'en-US',
  common: {
    confirm: 'Confirm',
    cancel: 'Cancel',
    loading: 'Loading',
  },
  Calendar: {
    markItems: ['1', '2', '3', '4', '5', '6', 'day'],
    renderYearAndMonth: (year: number, month: number) => `${year} ${month}`,
  },
  Cascader: {
    placeholder: 'Please Select',
  },
  Dialog: {
    ok: 'Ok',
  },
  DatePicker: {
    tillNow: 'Till now',
  },
  ErrorBlock: {
    default: {
      title: 'The page encountered some problems',
      description: 'Please try again later',
    },
    busy: {
      title: 'Currently busy',
      description: 'Try to refresh',
    },
    disconnected: {
      title: 'Connection failed',
      description: 'Try to connect again',
    },
    empty: {
      title: 'No results',
      description: 'Try something else',
    },
  },
  Form: {
    required: 'required',
    optional: 'optional',
    defaultValidateMessages: {
      default: '${label} validation error',
      required: '${label} is required',
      enum: '${label} must be one of [${enum}]',
      whitespace: '${label} can not be empty',
      date: {
        format: 'invalid date format ${label}',
        parse: '${label} can not be converted to date',
        invalid: '${label} is invalid date',
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
        len: '${label} needs length ${len}',
        min: '${label} needs minium length ${min}',
        max: '${label} needs maximum length ${max}',
        range: '${label} length must be between ${min}-${max}',
      },
      number: {
        len: '${label} needs length ${len}',
        min: '${label} needs minium length ${min}',
        max: '${label} needs maximum length ${max}',
        range: '${label} must be between ${min}-${max}',
      },
      array: {
        len: '${label} needs length ${len}',
        min: '${label} needs minium length ${min}',
        max: '${label} needs maximum length ${max}',
        range: '${label} length must be between ${min}-${max}',
      },
      pattern: {
        mismatch: '${label} mismatched ${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: 'Uploading...',
    upload: 'upload',
  },
  InfiniteScroll: {
    noMore: 'no more items',
    failedToLoad: 'failed to load',
    retry: 'retry',
  },
  Input: {
    clear: 'clear',
  },
  Mask: {
    name: 'Mask',
  },
  Modal: {
    ok: 'Ok',
  },
  PasscodeInput: {
    name: 'Password input',
  },
  PullToRefresh: {
    pulling: 'Pull down to refresh',
    canRelease: 'Release refresh',
    complete: 'Refresh succesfull',
  },
  SearchBar: {
    name: 'Search bar',
  },
  Slider: {
    name: 'Slider',
  },
  Stepper: {
    decrease: 'Back',
    increase: 'Next',
  },
  Switch: {
    name: 'Switch',
  },
})

export default enUS
