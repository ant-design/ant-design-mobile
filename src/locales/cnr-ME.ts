import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} nije važeći ${type}'

const cnrME = mergeLocale(base, {
  locale: 'cnr',
  common: {
    confirm: 'Potvrdi',
    cancel: 'Otkaži',
    loading: 'Učitavanje',
    close: 'Zatvori',
  },
  Calendar: {
    title: 'Izbor datuma',
    confirm: 'Potvrdi',
    start: 'početak',
    end: 'kraj',
    today: 'danas',
    markItems: ['Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub', 'Ned'],
    yearAndMonth: '${year}/${month}',
  },
  Cascader: {
    placeholder: 'Odabir',
  },
  Dialog: {
    ok: 'U redu',
  },
  DatePicker: {
    tillNow: 'Do sada',
  },
  ErrorBlock: {
    default: {
      title: 'Ups, nešto je pošlo po zlu',
      description: 'Molimo sačekajte trenutak i pokušajte ponovo',
    },
    busy: {
      title: 'Ups, nije učitano',
      description: 'Pokušajte da osvježite stranicu',
    },
    disconnected: {
      title: 'Mreža je zauzeta',
      description: 'Pokušajte da osvježite stranicu',
    },
    empty: {
      title: 'Hmm, nismo to pronašli...',
      description: 'Želite li pokušati novu pretragu?',
    },
  },
  Form: {
    required: 'Obavezno',
    optional: 'Opcionalno',
    defaultValidateMessages: {
      default: 'Greška pri validaciji za polje ${label}',
      required: 'Molimo unesite ${label}',
      enum: '${label} mora biti jedno od [${enum}]',
      whitespace: '${label} ne može biti prazan karakter',
      date: {
        format: '${label} format datuma nije važeći',
        parse: '${label} ne može biti pretvoren u datum',
        invalid: '${label} je nevažeći datum',
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
        len: '${label} mora imati ${len} karaktera',
        min: '${label} mora imati najmanje ${min} karaktera',
        max: '${label} može imati najviše ${max} karaktera',
        range: '${label} mora biti između ${min}-${max} karaktera',
      },
      number: {
        len: '${label} mora biti jednak ${len}',
        min: '${label} mora biti najmanje ${min}',
        max: '${label} mora biti najviše ${max}',
        range: '${label} mora biti između ${min}-${max}',
      },
      array: {
        len: 'Mora biti ${len} ${label}',
        min: 'Najmanje ${min} ${label}',
        max: 'Najviše ${max} ${label}',
        range: 'Količina ${label} mora biti između ${min}-${max}',
      },
      pattern: {
        mismatch: '${label} ne odgovara šablonu ${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: 'Otpremanje...',
    upload: 'Otpremi',
  },
  InfiniteScroll: {
    noMore: 'Nema više',
    failedToLoad: 'Učitavanje nije uspjelo',
    retry: 'Pokušaj ponovo',
  },
  Input: {
    clear: 'očisti',
  },
  Mask: {
    name: 'Maska',
  },
  Modal: {
    ok: 'U redu',
  },
  PasscodeInput: {
    name: 'Unos šifre',
  },
  PullToRefresh: {
    pulling: 'Povucite nadole za osvježavanje',
    canRelease: 'Oslobodite za trenutno osvježavanje',
    complete: 'Osvježavanje uspješno',
  },
  SearchBar: {
    name: 'Traka za pretragu',
  },
  Slider: {
    name: 'Klizač',
  },
  Stepper: {
    decrease: 'smanji',
    increase: 'povećaj',
  },
  Switch: {
    name: 'Prekidač',
  },
  Selector: {
    name: 'Selektor',
  },
})

export default cnrME
