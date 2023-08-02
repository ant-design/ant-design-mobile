import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} er ikke gyldig som ${type}'

const daDK = mergeLocale(base, {
  locale: 'da-DK',
  common: {
    confirm: 'Bekræft',
    cancel: 'Afbestille',
    loading: 'Indlæser',
    close: 'Luk',
  },
  Calendar: {
    markItems: ['ma', 'ti', 'on', 'to', 'fr', 'lø', 'sø'],
    yearAndMonth: '${month}.${year}',
  },
  Cascader: {
    placeholder: 'Vælger',
  },
  Dialog: {
    ok: 'Bekræft',
  },
  DatePicker: {
    tillNow: 'Indtil nu',
  },
  ErrorBlock: {
    default: {
      title: 'Oops, noget gik galt',
      description: 'Vent et minut og prøv igen',
    },
    busy: {
      title: 'Oops, ikke indlæser',
      description: 'Prøv at opdatere siden',
    },
    disconnected: {
      title: 'Netværket er optaget',
      description: 'Prøv at opdatere siden',
    },
    empty: {
      title: 'Hmm, kunne ikke finde det...',
      description: 'Vil du prøve en ny søgning?',
    },
  },
  Form: {
    required: 'Påkrævet',
    optional: 'Valgfri',
    defaultValidateMessages: {
      default: 'Feltvalideringsfejl for ${label}',
      required: 'Indtast venligst ${label}',
      enum: '${label} skal være en af [${enum}]',
      whitespace: '${label} kan ikke være et tomt tegn',
      date: {
        format: '${label} datoformatet er ugyldigt',
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
        min: '${label} skal være mindst ${min} tegn',
        max: '${label} skal være op til ${max} tegn',
        range: '${label} skal være imellem ${min}-${max} tegn',
      },
      number: {
        len: '${label} skal være lig med ${len}',
        min: '${label} skal være minimum ${min}',
        max: '${label} skal være maksimalt ${max}',
        range: '${label} skal være imellem ${min}-${max}',
      },
      array: {
        len: 'Må være ${len} ${label}',
        min: 'I det mindste ${min} ${label}',
        max: 'Højst ${max} ${label}',
        range: 'Mængden af ${label} skal være imellem ${min}-${max}',
      },
      pattern: {
        mismatch: '${label} stemmer ikke overens med mønsteret ${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: 'Uploader...',
    upload: 'Upload',
  },
  InfiniteScroll: {
    noMore: 'Ikke mere',
    failedToLoad: 'Kunne ikke indlæses',
    retry: 'Prøve igen',
  },
  Input: {
    clear: 'slette',
  },
  Mask: {
    name: 'Maske',
  },
  Modal: {
    ok: 'Bekræft',
  },
  PullToRefresh: {
    pulling: 'Rul ned for at opdatere',
    canRelease: 'Slip for at opdatere med det samme',
    complete: 'Opdatering lykkedes',
  },
  Stepper: {
    decrease: 'aftage',
    increase: 'øge',
  },
  Selector: {
    name: 'Vælger',
  },
})

export default daDK
