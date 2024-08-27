import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} није ваљан ${type}'

const srRS = mergeLocale(base, {
  locale: 'sr',
  common: {
    confirm: 'Потврди',
    cancel: 'Откажи',
    loading: 'Учитавање',
    close: 'Затвори',
  },
  Calendar: {
    title: 'Избор датума',
    confirm: 'Потврди',
    start: 'почетак',
    end: 'крај',
    today: 'данас',
    markItems: ['Пон', 'Уто', 'Сре', 'Чет', 'Пет', 'Суб', 'Нед'],
    yearAndMonth: '${year}/${month}',
  },
  Cascader: {
    placeholder: 'Изаберите',
  },
  Dialog: {
    ok: 'У реду',
  },
  DatePicker: {
    tillNow: 'До сада',
  },
  ErrorBlock: {
    default: {
      title: 'Оопс, нешто је пошло по злу',
      description: 'Молимо сачекајте минут и покушајте поново',
    },
    busy: {
      title: 'Оопс, није учитано',
      description: 'Покушајте да освежите страницу',
    },
    disconnected: {
      title: 'Мрежа је заузета',
      description: 'Покушајте да освежите страницу',
    },
    empty: {
      title: 'Хмм, нисмо то нашли...',
      description: 'Желите ли да покушате нову претрагу?',
    },
  },
  Form: {
    required: 'Обавезно',
    optional: 'Опционо',
    defaultValidateMessages: {
      default: 'Грешка у валидацији за поље ${label}',
      required: 'Молимо унесите ${label}',
      enum: '${label} мора бити један од [${enum}]',
      whitespace: '${label} не може бити празан карактер',
      date: {
        format: '${label} формат датума није ваљан',
        parse: '${label} не може бити конвертован у датум',
        invalid: '${label} је неважећи датум',
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
        len: '${label} мора бити ${len} карактера',
        min: '${label} мора имати најмање ${min} карактера',
        max: '${label} може имати највише ${max} карактера',
        range: '${label} мора бити између ${min}-${max} карактера',
      },
      number: {
        len: '${label} мора бити једнак ${len}',
        min: '${label} мора бити минимум ${min}',
        max: '${label} мора бити максимум ${max}',
        range: '${label} мора бити између ${min}-${max}',
      },
      array: {
        len: 'Мора бити ${len} ${label}',
        min: 'Најмање ${min} ${label}',
        max: 'Највише ${max} ${label}',
        range: 'Количина ${label} мора бити између ${min}-${max}',
      },
      pattern: {
        mismatch: '${label} не одговара шаблону ${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: 'Отпремање...',
    upload: 'Отпреми',
  },
  InfiniteScroll: {
    noMore: 'Нема више',
    failedToLoad: 'Учитавање није успело',
    retry: 'Покушај поново',
  },
  Input: {
    clear: 'очисти',
  },
  Mask: {
    name: 'Маска',
  },
  Modal: {
    ok: 'У реду',
  },
  PasscodeInput: {
    name: 'Унос шифре',
  },
  PullToRefresh: {
    pulling: 'Повуците надоле за освежавање',
    canRelease: 'Ослободите да одмах освежите',
    complete: 'Освежавање успешно',
  },
  SearchBar: {
    name: 'Трака за претрагу',
  },
  Slider: {
    name: 'Слајдер',
  },
  Stepper: {
    decrease: 'смањи',
    increase: 'повећај',
  },
  Switch: {
    name: 'Прекидач',
  },
  Selector: {
    name: 'Селектор',
  },
})

export default srRS
