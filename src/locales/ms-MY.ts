import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} Bukan satu yabg sah ${type}'

const msMY = mergeLocale(base, {
  'locale': 'ms-MY',
  'common': {
    'confirm': 'OK',
    'cancel': 'Batal',
    'loading': 'Memuatkan',
    'close': 'Tutup',
  },
  'Calendar': {
    'title': 'Pemilihan tarikh',
    'confirm': 'Ok',
    'start': 'Mula',
    'end': 'Tamat',
    'today': 'Hari ini',
    'markItems': ['Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Hari'],
    'yearAndMonth': 'Tahun${year} bulan ${month}',
  },
  'Cascader': { 'placeholder': 'Sila pilih' },
  'Dialog': { 'ok': 'Faham' },
  'DatePicker': { 'tillNow': 'Sehingga kini' },
  'ErrorBlock': {
    'default': {
      'title': 'Halaman mengalami beberapa isu kecil',
      'description': 'Cuba kemudian',
    },
    'busy': {
      'title': 'Kesesakan di hadapan',
      'description': 'Muat semula dan cuba',
    },
    'disconnected': {
      'title': 'Rangkaian agak sibuk',
      'description': 'Untuk membantu membaiki, gerakkan jari anda.',
    },
    'empty': {
      'title': 'Tidak menemui apa yang anda perlukan',
      'description': 'Cari yang lain',
    },
  },
  'Form': {
    'required': 'Wajib',
    'optional': 'Pilihan',
    'defaultValidateMessages': {
      'default': 'Ralat pengesahan medan ${label}',
      'required': 'Sila masukkan ${label}',
      'enum': '${label} mestilah salah satu daripada [${enum}]',
      'whitespace': '${label} Tidak boleh menjadi watak nol',
      'date': {
        'format': 'Format tarikh ${label} tidak sah',
        'parse': '${label} tidak boleh ditukar kepada tarikh',
        'invalid': '${label} Adalah tarikh yang tidak sah',
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
        'len': '${label} Mestilah ${len} aksara',
        'min': '${label} Sekurang-kurangnya ${min} aksara',
        'max': '${label}Maksimum ${max} aksara',
        'range': '${label} Mesti antara ${min}-${max} aksara',
      },
      'number': {
        'len': '${label} mesti sama dengan ${len}',
        'min': 'Nilai minimum ${label} ialah ${min}',
        'max': 'Nilai maksimum ${label} ialah ${max}',
        'range': '${label}Mesti antara ${min}-${max}',
      },
      'array': {
        'len': 'Mesti ${len} ${label}',
        'min': 'Minimum ${min} ${label}',
        'max': 'Maksimum ${max} ${label}',
        'range': '${label}Kuantiti mestilah antara ${min}-${max}',
      },
      'pattern': { 'mismatch': '${label}Tidak sepadan dengan model${pattern}' },
    },
  },
  'ImageUploader': {
    'uploading': 'Sedang memuat naik...',
    'upload': 'memuat naik',
  },
  'InfiniteScroll': {
    'noMore': 'Tiada lagi',
    'failedToLoad': 'Gagal dimuatkan.',
    'retry': 'Muat semula',
  },
  'Input': { 'clear': 'Bersihkan' },
  'Mask': { 'name': 'lapisan topeng latar belakang' },
  'Modal': { 'ok': 'Faham' },
  'PasscodeInput': { 'name': 'Kotak input kata laluan' },
  'PullToRefresh': {
    'pulling': 'Tarik ke bawah untuk muat semula',
    'canRelease': 'Lepaskan untuk memuatkan semula',
    'complete': 'Muat semula selesai',
  },
  'SearchBar': { 'name': 'Kotak carian' },
  'Slider': { 'name': 'Bar input gelongsor' },
  'Stepper': { 'decrease': 'Menurun', 'increase': 'Meningkat' },
  'Switch': { 'name': 'Suis' },
  'Selector': { 'name': 'Pilih kumpulan' },
})

export default msMY
