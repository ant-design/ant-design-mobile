import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} не соответствует типу ${type}'

const ruRU = mergeLocale(base, {
  locale: 'ru',
  common: {
    confirm: 'Подтвердить',
    cancel: 'Отменить',
    loading: 'Загрузка',
    close: 'Закрыть',
  },
  Calendar: {
    markItems: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    yearAndMonth: '${year}/${month}',
  },
  Cascader: {
    placeholder: 'Выбор',
  },
  Dialog: {
    ok: 'ОК',
  },
  DatePicker: {
    tillNow: 'До настоящего времени',
  },
  ErrorBlock: {
    default: {
      title: 'Упс! Что-то пошло не так',
      description: 'Пожалуйста, подождите минуту и повторите попытку',
    },
    busy: {
      title: 'Упс, не загружается',
      description: 'Попробуйте обновить страницу',
    },
    disconnected: {
      title: 'Сеть занята',
      description: 'Попробуйте обновить страницу',
    },
    empty: {
      title: 'Хм, не могу найти...',
      description: 'Хотите попробовать другой запрос?',
    },
  },
  Form: {
    required: 'Обязательное',
    optional: 'Опциональное',
    defaultValidateMessages: {
      default: 'Ошибка валидации поля ${label}',
      required: 'Пожалуйста, заполните поле ${label}',
      enum: 'Значение ${label} должно быть одним из [${enum}]',
      whitespace: '${label} не может быть пустым символом',
      date: {
        format: '${label} имеет некорректный формат даты',
        parse: '${label} не может быть конвертировано в дату',
        invalid: '${label} не является валидной датой',
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
        len: 'Длина ${label} должна быть ${len} символов(-а)',
        min: 'Длина ${label} должна быть не меньше ${min} символов(-а)',
        max: 'Длина ${label} должна быть не больше ${max} символов(-а)',
        range:
          'Длина ${label} должна быть в диапазоне от ${min} до ${max} символов(-а)',
      },
      number: {
        len: '${label} должно быть равно ${len}',
        min: '${label} должно быть значением не меньше ${min}',
        max: '${label} должно быть значением не больше ${max}',
        range: '${label} должно быть значением в диапазоне от ${min} до ${max}',
      },
      array: {
        len: 'Размер ${label} должен быть ${len}',
        min: 'Размер ${label} должен быть не меньше ${min}',
        max: 'Размер ${label} должен быть не больше ${max}',
        range: 'Размер ${label} должен быть в диапазоне от ${min} до ${max}',
      },
      pattern: {
        mismatch: '${label} не соответствует шаблону ${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: 'Выгружается...',
    upload: 'Выгрузить',
  },
  InfiniteScroll: {
    noMore: 'Больше нет',
    failedToLoad: 'Ошибка загрузки',
    retry: 'Повторить',
  },
  Input: {
    clear: 'очистить',
  },
  Mask: {
    name: 'Маска',
  },
  Modal: {
    ok: 'ОК',
  },
  PasscodeInput: {
    name: 'Ввод пароля',
  },
  PullToRefresh: {
    pulling: 'Прокрутите вниз, чтобы обновления',
    canRelease: 'Отпустите, чтобы немедленно обновить',
    complete: 'Обновление успешно',
  },
  SearchBar: {
    name: 'Панель поиска',
  },
  Slider: {
    name: 'Слайдер',
  },
  Stepper: {
    decrease: 'вычесть',
    increase: 'прибавить',
  },
  Switch: {
    name: 'Переключатель',
  },
  Selector: {
    name: 'Селектор',
  },
})

export default ruRU
