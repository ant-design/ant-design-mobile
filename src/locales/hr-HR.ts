import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} nije važeća ${type}'

const hrHR = mergeLocale(base, {
  locale: 'hr-HR',
  common: {
    confirm: 'Potvrdi',
    cancel: 'Otkaži',
    loading: 'Učitavam',
    close: 'Zatvori',
  },
  Calendar: {
    title: 'Izbor datuma',
    confirm: 'Naravno',
    start: 'početak',
    end: 'završi',
    today: 'danas',
    markItems: ['Pon.', 'Uto.', 'Sri.', 'Čet.', 'Pet.', 'Sub.', 'Ned.'],
    yearAndMonth: '${month}/${year}',
  },
  Cascader: {
    placeholder: 'Odaberi',
  },
  Dialog: {
    ok: 'U redu',
  },
  DatePicker: {
    tillNow: 'Do sada',
  },
  ErrorBlock: {
    default: {
      title: 'Stranica je naišla na neke manje probleme',
      description: 'Molimo pričekajte minutu i pokušajte ponovno',
    },
    busy: {
      title: 'Ne učitava se',
      description: 'Pokušajte osvježiti stranicu',
    },
    disconnected: {
      title: 'Mreža je zauzeta',
      description: 'Pokušajte osvježiti stranicu',
    },
    empty: {
      title: 'Nisam našao ono što trebaš',
      description: 'Nađi nešto drugo',
    },
  },
  Form: {
    required: 'Obavezno',
    optional: 'Neobavezno',
    defaultValidateMessages: {
      default: 'Pogreška provjere valjanosti polja za ${label}',
      required: 'Molim uđite ${label}',
      enum: '${label} mora biti jedan od [${enum}]',
      whitespace: '${label} ne može biti prazan znak',
      date: {
        format: '${label} format datuma nije valjan',
        parse: '${label} ne može se pretvoriti u datum',
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
        max: '${label} mora sadržavati do ${max} znakova',
        range: '${label} mora imati između ${min}-${max} znakova',
      },
      number: {
        len: '${label} mora biti jednako ${len}',
        min: '${label} mora biti najmanje ${min}',
        max: '${label} mora biti maksimalno ${max}',
        range: '${label} mora biti između ${min}-${max}',
      },
      array: {
        len: '${label} mora biti jednako ${len}',
        min: '${label} mora biti najmanje ${min}',
        max: '${label} mora biti maksimalno ${max}',
        range: 'Iznos ${label} mora biti između ${min}-${max}',
      },
      pattern: {
        mismatch: '${label} ne odgovara uzorku ${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: 'Prijenos...',
    upload: 'Učitaj',
  },
  InfiniteScroll: {
    noMore: 'Ne više',
    failedToLoad: 'Učitavanje nije uspjelo',
    retry: 'Pokušaj ponovo',
  },
  Input: {
    clear: 'očistiti',
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
    pulling: 'Pomaknite se prema dolje za osvježavanje',
    canRelease: 'Otpustite da biste odmah osvježili',
    complete: 'Osvježavanje uspješno',
  },
  SearchBar: {
    name: 'Traka za pretraživanje',
  },
  Slider: {
    name: 'Klizač',
  },
  Stepper: {
    decrease: 'smanjenje',
    increase: 'povećati',
  },
  Switch: {
    name: 'Sklopka',
  },
  Selector: {
    name: 'Birač',
  },
})

export default hrHR
