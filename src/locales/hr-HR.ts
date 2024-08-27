import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} nije važeći ${type}'

const hrHR = mergeLocale(base, {
  locale: 'hr',
  common: {
    confirm: 'Potvrdi',
    cancel: 'Otkaži',
    loading: 'Učitavanje',
    close: 'Zatvori',
  },
  Calendar: {
    title: 'Odabir datuma',
    confirm: 'Potvrdi',
    start: 'početak',
    end: 'kraj',
    today: 'danas',
    markItems: ['Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub', 'Ned'],
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
      description: 'Molimo pričekajte trenutak i pokušajte ponovo',
    },
    busy: {
      title: 'Ups, nije učitano',
      description: 'Pokušajte osvježiti stranicu',
    },
    disconnected: {
      title: 'Mreža je zauzeta',
      description: 'Pokušajte osvježiti stranicu',
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
      whitespace: '${label} ne može biti prazno',
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
        len: '${label} mora imati ${len} znakova',
        min: '${label} mora imati najmanje ${min} znakova',
        max: '${label} može imati najviše ${max} znakova',
        range: '${label} mora biti između ${min}-${max} znakova',
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
        mismatch: '${label} ne odgovara uzorku ${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: 'Učitavanje...',
    upload: 'Učitaj',
  },
  InfiniteScroll: {
    noMore: 'Nema više',
    failedToLoad: 'Učitavanje nije uspjelo',
    retry: 'Pokušaj ponovno',
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
    name: 'Unos lozinke',
  },
  PullToRefresh: {
    pulling: 'Povucite dolje za osvježavanje',
    canRelease: 'Otpustite za trenutnu obnovu',
    complete: 'Osvježavanje uspješno',
  },
  SearchBar: {
    name: 'Traka za pretraživanje',
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

export default hrHR
