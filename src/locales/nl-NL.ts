import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} is niet geldig als ${type}'

const nlNL = mergeLocale(base, {
  locale: 'nl-NL',
  common: {
    confirm: 'Bevestigen',
    cancel: 'Annuleren',
    loading: 'Laden',
    close: 'Sluiten',
  },
  Calendar: {
    markItems: ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'],
    yearAndMonth: '${month}-${year}',
  },
  Cascader: {
    placeholder: 'Selecteren',
  },
  Dialog: {
    ok: 'OK',
  },
  DatePicker: {
    tillNow: 'Tot nu',
  },
  ErrorBlock: {
    default: {
      title: 'Oeps, er is iets fout gegaan',
      description: 'Wacht een minuutje en probeer opnieuw',
    },
    busy: {
      title: 'Oeps, niet aan het laden',
      description: 'Probeer de pagina te vernieuwen',
    },
    disconnected: {
      title: 'Netwerk is bezet',
      description: 'Probeer de pagina te vernieuwen',
    },
    empty: {
      title: 'Hmm, dat kon niet gevonden worden...',
      description: 'Wil je een nieuwe zoekopdracht proberen?',
    },
  },
  Form: {
    required: 'Verplicht',
    optional: 'Optioneel',
    defaultValidateMessages: {
      default: 'Veldvalidatiefout voor ${label}',
      required: 'Vul ${label} in',
      enum: '${label} moet een van de volgende zijn: [${enum}]',
      whitespace: '${label} mag geen leeg karakter zijn',
      date: {
        format: 'Ongeldige datumnotatie voor ${label}',
        parse: 'Kan ${label} niet converteren naar een datum',
        invalid: 'Ongeldige datum voor ${label}',
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
        len: '${label} moet ${len} tekens zijn',
        min: '${label} moet minimaal ${min} tekens zijn',
        max: '${label} mag maximaal ${max} tekens zijn',
        range: '${label} moet tussen ${min}-${max} tekens zijn',
      },
      number: {
        len: '${label} moet gelijk zijn aan ${len}',
        min: '${label} moet minimaal ${min} zijn',
        max: '${label} mag maximaal ${max} zijn',
        range: '${label} moet tussen ${min}-${max} zijn',
      },
      array: {
        len: 'Moet ${len} ${label} zijn',
        min: 'Moet minimaal ${min} ${label} zijn',
        max: 'Mag maximaal ${max} ${label} zijn',
        range: 'Aantal ${label} moet tussen ${min}-${max} zijn',
      },
      pattern: {
        mismatch: '${label} komt niet overeen met het patroon ${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: 'Uploaden...',
    upload: 'Uploaden',
  },
  InfiniteScroll: {
    noMore: 'Geen meer',
    failedToLoad: 'Laden mislukt',
    retry: 'Opnieuw proberen',
  },
  Input: {
    clear: 'wissen',
  },
  Mask: {
    name: 'Masker',
  },
  Modal: {
    ok: 'Begrepen',
  },
  PasscodeInput: {
    name: 'Invoer voor toegangscode',
  },
  PullToRefresh: {
    pulling: 'Trek naar beneden om te vernieuwen',
    canRelease: 'Los om onmiddellijk te vernieuwen',
    complete: 'Vernieuwen voltooid',
  },
  SearchBar: {
    name: 'Zoekbalk',
  },
  Slider: {
    name: 'Schuifregelaar',
  },
  Stepper: {
    decrease: 'afnemen',
    increase: 'toenemen',
  },
  Switch: {
    name: 'Schakelaar',
  },
  Selector: {
    name: 'Selector',
  },
})

export default nlNL
