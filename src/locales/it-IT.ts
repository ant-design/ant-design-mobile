import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} non è valido come ${type}'

const itIT = mergeLocale(base, {
  locale: 'it-IT',
  common: {
    confirm: 'Conferma',
    cancel: 'Annulla',
    loading: 'Caricamento',
    close: 'Chiudi',
  },
  Calendar: {
    markItems: ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'],
    yearAndMonth: '${month}/${year}',
  },
  Cascader: {
    placeholder: 'Si prega di selezionare',
  },
  Dialog: {
    ok: 'Ho capito',
  },
  DatePicker: {
    tillNow: 'Finora',
  },
  ErrorBlock: {
    default: {
      title: 'Oops, qualcosa è andato storto',
      description: 'Per favore, attendi un minuto e riprova più tardi',
    },
    busy: {
      title: 'Oops, non sta caricando',
      description: 'Prova a ricaricare la pagina',
    },
    disconnected: {
      title: 'La rete è occupata',
      description: 'Prova a ricaricare la pagina',
    },
    empty: {
      title: 'Mmm, non ho potuto trovarlo...',
      description: 'Vuoi provare una nuova ricerca?',
    },
  },
  Form: {
    required: 'Richiesto',
    optional: 'Opzionale',
    defaultValidateMessages: {
      default: 'Errore di convalida del campo per ${label}',
      required: 'Per favore compila ${label}',
      enum: '${label} deve essere uno di [${enum}]',
      whitespace: '${label} non puà essere un carattere vuoto',
      date: {
        format: '${label} il formato della data non è valido',
        parse: '${label} non può essere convertito in data',
        invalid: '${label} non è una data valida',
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
        len: '${label} deve essere lungo ${len} caratteri',
        min: '${label} deve essere lungo almeno ${min} caratteri',
        max: '${label} deve essere lungo fino a ${max} caratteri',
        range: '${label} deve essere lungo ${min}-${max} caratteri',
      },
      number: {
        len: '${label} deve essere uguale a ${len}',
        min: '${label} deve essere almeno ${min}',
        max: '${label} deve essere massimo ${max}',
        range: '${label} deve essere compreso tra ${min}-${max}',
      },
      array: {
        len: 'Deve essere ${len} ${label}',
        min: 'Almeno ${min} ${label}',
        max: 'Al massimo ${max} ${label}',
        range: 'La quantità ${label} deve essere compresa tra ${min}-${max}',
      },
      pattern: {
        mismatch: '${label} non corrisponde al pattern ${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: 'Caricamento in corso...',
    upload: 'Carica',
  },
  InfiniteScroll: {
    noMore: 'Finito',
    failedToLoad: 'Caricamento fallito',
    retry: 'Riprova',
  },
  Input: {
    clear: 'cancella',
  },
  Mask: {
    name: 'Maschera',
  },
  Modal: {
    ok: 'Ho capito',
  },
  PasscodeInput: {
    name: 'Input per codice di accesso',
  },
  PullToRefresh: {
    pulling: 'Scrolla in basso per aggiornare',
    canRelease: 'Rilaascia per aggiornare',
    complete: 'Ricarcamento completato',
  },
  SearchBar: {
    name: 'Barra di ricerca',
  },
  Slider: {
    name: 'Slider',
  },
  Stepper: {
    decrease: 'decrementa',
    increase: 'incrementa',
  },
  Switch: {
    name: 'Switch',
  },
  Selector: {
    name: 'Selettore',
  },
})

export default itIT
