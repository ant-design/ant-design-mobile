import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} ${type} типі емес'

const kkKZ = mergeLocale(base, {
  locale: 'kk-KZ',
  common: {
    confirm: 'OK',
    cancel: 'Бастарту',
    loading: 'Жүктелуде',
  },
  Calendar: {
    markItems: ['Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сб', 'Жс'],
    yearAndMonth: '${year} жыл ${month} ай',
  },
  Cascader: {
    placeholder: 'Таңдаңыз',
  },
  Dialog: {
    ok: 'Мен түсіндім',
  },
  ErrorBlock: {
    default: {
      title: 'Азы наулақ мәселелерге тап болдық',
      description: 'Кейінірек көріңіз',
    },
    busy: {
      title: 'Алда кептеліс',
      description: 'Жаңартып көріңіз',
    },
    disconnected: {
      title: 'Желі бос емес',
      description: 'Бетті жаңартып көріңіз',
    },
    empty: {
      title: 'Сізге қажетті нәрсе табылмады',
      description: 'Басқаша іздеп көріңіз',
    },
  },
  Form: {
    required: 'Міндетті',
    optional: 'Селективті',
    defaultValidateMessages: {
      default: '${label} өрісті тексерудегі қате',
      required: '${label} енгізіңіз',
      enum: '${label} [${enum}] мүшесі болуы керек',
      whitespace: '${label} бос болмау керек',
      date: {
        format: '${label} жарамсыз уақыт форматы',
        parse: '${label} уақытқа түрлендірілмейді',
        invalid: '${label} жарамсыз уақыт',
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
        len: '${label} ${len} таңбадан тұруы керек',
        min: '${label} кемінде ${min} таңба болуы керек',
        max: '${label} ең көбінде ${max} таңба болуы керек',
        range: '${label} ұзындығы ${min}-${max} таңба аралығында болуы керек',
      },
      number: {
        len: '${label} және ${len} тең болуы керек',
        min: '${label} минималды мәні ${min}',
        max: '${label} максималды мәні ${max}',
        range: '${label} ${min}-${max} аралығында болуы керек',
      },
      array: {
        len: '${len} ${label} болуы керек',
        min: 'Кемінде ${min} ${label}',
        max: 'Ең көп ${max} ${label}',
        range: '${label} саны ${min}-${max} арасында болуы керек',
      },
      pattern: {
        mismatch: '${label} ${pattern} үлгісіне сәйкес келмейді',
      },
    },
  },
  ImageUploader: {
    uploading: 'Жүктелуде...',
    upload: 'Жүктеу',
  },
  InfiniteScroll: {
    noMore: 'Осыдан артық жоқ',
    failedToLoad: 'Жүктеу сәтсіз болды',
    retry: 'Қайта жүктеу',
  },
  Mask: {
    name: 'Маска қабаты',
  },
  Modal: {
    ok: 'Мен түсіндім',
  },
  PullToRefresh: {
    pulling: 'Жаңарту үшін тартыңыз',
    canRelease: 'Жаңарту үшін жіберіңіз',
    complete: 'Сәтті жаңартылды',
  },
  Switch: {
    name: 'Сөндіргіш',
  },
})

export default kkKZ
