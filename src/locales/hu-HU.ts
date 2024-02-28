import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} is not a valid ${type}'

export const huHU = mergeLocale(base, {
  locale: 'hu',
  common: {
    confirm: 'Alkalmazás',
    cancel: 'Visszavonás',
    loading: 'Betöltés',
    close: 'Bezárás',
  },
  Calendar: {
    title: 'Dátum kiválasztása',
    confirm: 'Alkalmazás',
    today: 'ma',
    markItems: ['Hét', 'Ked', 'Sze', 'Csü', 'Pén', 'Szo', 'Vas'],
    yearAndMonth: '${year}-${month}',
  },
  Cascader: {
    placeholder: 'Kiválasztás',
  },
  Dialog: {
    ok: 'OK',
  },
  DatePicker: {
    tillNow: 'Till Now',
  },
  ErrorBlock: {
    default: {
      title: 'Oopsz, valami hiba történt',
      description: 'Kérjük, várjon egy percet, és próbálja újra',
    },
    busy: {
      title: 'Oopsz, nem sikerült betölteni',
      description: 'Próbálja meg frissíteni az oldalt',
    },
    disconnected: {
      title: 'A hálózat elfoglalt',
      description: 'Próbálja meg frissíteni az oldalt',
    },
    empty: {
      title: "Hmm, nem találjuk amit keresel...",
      description: 'Szeretnél új keresést indítani?',
    },
  },
  Form: {
    required: 'Kötelező',
    optional: 'Opcionális',
    defaultValidateMessages: {
      default: 'Mező validációs hiba ${label}',
      required: 'Mező kitöltése kötelező ${label}',
      enum: '${label} tatroznia kell [${enum}]',
      whitespace: '${label} nem lehet üres karakter',
      date: {
        format: '${label} dátum formátuma érvénytelen',
        parse: '${label} nem alakítható dátummá',
        invalid: '${label} nem érvényes dátum',
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
        len: '${label} muszáj hogy ${len} karakter hosszú legyen',
        min: '${label} muszáj hogy legalább ${min} karakter hosszú legyen',
        max: '${label} muszáj hogy maximum ${max} karakter hosszú legyen',
        range: '${label} muszáj hogy ${min}-${max} karakter hosszú legyen',
      },
      number: {
        len: '${label} muszáj hogy ${len} legyen',
        min: '${label} legalább ${min} legyen',
        max: '${label} maximum ${max} lehet',
        range: '${label} muszáj hogy ${min}-${max} között legyen',
      },
      array: {
        len: 'Muszáj ${len} legyen ${label}',
        min: 'Legalább ${min} ${label}',
        max: 'Maximum ${max} ${label}',
        range: '${label} értéke ${min}-${max} között kell legyen',
      },
      pattern: {
        mismatch: '${label} nem hasonlít ${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: 'Feltöltés...',
    upload: 'Feltöltés',
  },
  InfiniteScroll: {
    noMore: 'Nincs több',
    failedToLoad: 'Nem sikerült betölteni',
    retry: 'Újra',
  },
  Input: {
    clear: 'Törlés',
  },
  Mask: {
    name: 'Maszk',
  },
  Modal: {
    ok: 'OK',
  },
  PasscodeInput: {
    name: 'PIN-kód',
  },
  PullToRefresh: {
    pulling: 'Görgessen le a frissítéshez',
    canRelease: 'Engedje el az azonnalli frissítéshez',
    complete: 'Sikeresen frissítve',
  },
  SearchBar: {
    name: 'Keresés',
  },
  Slider: {
    name: 'Csúszka',
  },
  Stepper: {
    decrease: 'csökkentés',
    increase: 'növelés',
  },
  Switch: {
    name: 'Kapcsoló',
  },
  Selector: {
    name: 'Kiválasztás',
  },
})

export default huHU
