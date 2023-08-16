import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} er ikke gyldig som ${type}'

const nbNO = mergeLocale(base, {
  locale: 'nb-NO',
  common: {
    confirm: 'Bekreft',
    cancel: 'Avbryt',
    loading: 'Laster',
    close: 'Lukk',
  },
  Calendar: {
    markItems: ['Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør', 'Søn'],
    yearAndMonth: '${month}.${year}',
  },
  Cascader: {
    placeholder: 'Velg',
  },
  Dialog: {
    ok: 'OK',
  },
  DatePicker: {
    tillNow: 'Til nå',
  },
  ErrorBlock: {
    default: {
      title: 'Oops, noe gikk galt',
      description: 'Vent et minutt og prøv igjen',
    },
    busy: {
      title: 'Oops, ikke laster',
      description: 'Prøv å oppdatere siden',
    },
    disconnected: {
      title: 'Nettverket er opptatt',
      description: 'Prøv å oppdatere siden',
    },
    empty: {
      title: 'Hmm, fant ikke det...',
      description: 'Vil du prøve en ny søk?',
    },
  },
  Form: {
    required: 'Påkrevd',
    optional: 'Valgfritt',
    defaultValidateMessages: {
      default: 'Feltvalideringsfeil for ${label}',
      required: 'Vennligst skriv inn ${label}',
      enum: '${label} må være en av [${enum}]',
      whitespace: '${label} kan ikke være et blankt tegn',
      date: {
        format: 'Ugyldig datoformat for ${label}',
        parse: '${label} kan ikke konverteres til en dato',
        invalid: '${label} er en ugyldig dato',
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
        len: '${label} må være ${len} tegn',
        min: '${label} må ha minst ${min} tegn',
        max: '${label} må ha opptil ${max} tegn',
        range: '${label} må ha mellom ${min}-${max} tegn',
      },
      number: {
        len: '${label} må være lik ${len}',
        min: '${label} må være minimum ${min}',
        max: '${label} må være maksimum ${max}',
        range: '${label} må være mellom ${min}-${max}',
      },
      array: {
        len: 'Må ha ${len} ${label}',
        min: 'Minst ${min} ${label}',
        max: 'Maksimalt ${max} ${label}',
        range: 'Antall ${label} må være mellom ${min}-${max}',
      },
      pattern: {
        mismatch: '${label} samsvarer ikke med mønsteret ${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: 'Laster opp...',
    upload: 'Last opp',
  },
  InfiniteScroll: {
    noMore: 'Ingen flere',
    failedToLoad: 'Kunne ikke laste inn',
    retry: 'Prøv igjen',
  },
  Input: {
    clear: 'slett',
  },
  Mask: {
    name: 'Maske',
  },
  Modal: {
    ok: 'OK',
  },
  PasscodeInput: {
    name: 'Inndata for adgangskode',
  },
  PullToRefresh: {
    pulling: 'Dra ned for å oppdatere',
    canRelease: 'Slipp for å oppdatere umiddelbart',
    complete: 'Oppdatering fullført',
  },
  SearchBar: {
    name: 'Søkefelt',
  },
  Slider: {
    name: 'Glideregister',
  },
  Stepper: {
    decrease: 'reduser',
    increase: 'øk',
  },
  Switch: {
    name: 'Bryter',
  },
  Selector: {
    name: 'Velger',
  },
})

export default nbNO
