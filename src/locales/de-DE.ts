import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label}ist kein gültiges${type}'

const deDE = mergeLocale(base, {
  'locale': 'de-DE',
  'common': {
    'confirm': 'Bestätigen',
    'cancel': 'Abbrechen',
    'loading': 'Wird geladen',
    'close': 'Deaktivieren',
  },
  'Calendar': {
    'title': 'Datum auswählen',
    'confirm': 'Bestätigen',
    'start': 'Starten',
    'end': 'Beenden',
    'today': 'Heute',
    'markItems': ['I', 'II', 'III', 'IV', 'V', 'Sechs', 'Tag'],
    'yearAndMonth': '${year}Jahr${month}Monat',
  },
  'Cascader': { 'placeholder': 'Bitte auswählen' },
  'Dialog': { 'ok': 'Ich weiß.' },
  'DatePicker': { 'tillNow': 'Bis heute' },
  'ErrorBlock': {
    'default': {
      'title': 'Es gibt ein kleines Problem auf der Seite',
      'description': 'Versuche Sie es später',
    },
    'busy': {
      'title': 'Stau im Voraus',
      'description': 'Einmal aktualisieren',
    },
    'disconnected': {
      'title': 'Beschäftigtes Internet',
      'description': 'Beweg deine Finger und hilf mit!',
    },
    'empty': {
      'title': 'Sie haben nicht gefunden, was Sie brauchen.',
      'description': 'Finden Sie etwas anderes.',
    },
  },
  'Form': {
    'required': 'Pflichtfeld',
    'optional': 'Optional',
    'defaultValidateMessages': {
      'default': 'Fehler bei der Feldüberprüfung${label}',
      'required': 'Bitte geben ${label}ein',
      'enum': '${label}muss einer von ihnen sein[${enum}]',
      'whitespace': '${label}kann nicht ein Nullzeichen sein',
      'date': {
        'format': '${label}Ungültiges Datumsformat',
        'parse': '${label}kann nicht in ein Datum umgewandelt werden',
        'invalid': '${label}ist ein ungültiges Datum',
      },
      'types': {
        'string': typeTemplate,
        'method': typeTemplate,
        'array': typeTemplate,
        'object': typeTemplate,
        'number': typeTemplate,
        'date': typeTemplate,
        'boolean': typeTemplate,
        'integer': typeTemplate,
        'float': typeTemplate,
        'regexp': typeTemplate,
        'email': typeTemplate,
        'url': typeTemplate,
        'hex': typeTemplate,
      },
      'string': {
        'len': '${label} muss ${len} Zeichen lang sein',
        'min': '${label}kann mindestens ${min} Zeichen haben',
        'max': '${label}kann bis zu${max} Zeichen haben',
        'range': '${label}muss zwischen${min}-${max} Zeichen liegen',
      },
      'number': {
        'len': '${label}Muss gleich${len}sein',
        'min': '${label}Der Mindestwert beträgt${min}',
        'max': '${label}Der Höchstwert beträgt ${max}',
        'range': '${label}muss zwischen${min}-${max} liegen',
      },
      'array': {
        'len': 'Muss${len}sein${label}',
        'min': 'Mindestens${min}${label}',
        'max': 'Bis zu${max}${label}',
        'range': '${label}Die Anzahl muss zwischen${min}-${max} liegen',
      },
      'pattern': {
        'mismatch': '${label}stimmt nicht mit dem Muster überein${pattern}',
      },
    },
  },
  'ImageUploader': { 'uploading': 'Beim Hochladen', 'upload': 'Hochladen' },
  'InfiniteScroll': {
    'noMore': "Das war's",
    'failedToLoad': 'Hochladen Fehlgeschlagen',
    'retry': 'Erneut laden',
  },
  'Input': { 'clear': 'Löschen' },
  'Mask': { 'name': 'Hintergrundmaske' },
  'Modal': { 'ok': 'Ich weiß.' },
  'PasscodeInput': { 'name': 'Passwort-Eingabefeld' },
  'PullToRefresh': {
    'pulling': 'Nach unten zum Aktualisieren ziehen',
    'canRelease': 'Loslassen zum sofortige aktualisieren',
    'complete': 'Erfolgreiche Aktualisierung',
  },
  'SearchBar': { 'name': 'Suchfeld' },
  'Slider': { 'name': 'Schieberegler für die Eingabe' },
  'Stepper': { 'decrease': 'Reduzieren', 'increase': 'Erhöhen' },
  'Switch': { 'name': 'Schalter' },
  'Selector': { 'name': 'Gruppe auswählen' },
})

export default deDE
