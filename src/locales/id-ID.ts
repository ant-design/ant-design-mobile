import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} bukan ${type} yang valid'

const idID = mergeLocale(base, {
  locale: 'id-ID',
  common: {
    confirm: 'Yakin',
    cancel: 'Batal ',
    loading: 'memuat',
  },
  Calendar: {
    markItems: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
    yearAndMonth: '${year} Tahun ${month} Bulan',
  },
  Cascader: {
    placeholder: 'Silahkan Pilih',
  },
  Dialog: {
    ok: 'Saya mendapatkannya',
  },
  ErrorBlock: {
    default: {
      title: 'Halaman mengalami beberapa permasalahan kecil',
      description: 'Coba lagi nanti',
    },
    busy: {
      title: 'kepadatan diawal',
      description: 'Coba untuk menyegarkan',
    },
    disconnected: {
      title: 'jaringan sedikit sibuk',
      description: 'Gerakkan jari Anda untuk membantu memperbaiki',
    },
    empty: {
      title: 'Itu tidak menemukan apa yang Anda butuhkan',
      description: 'Silahkan cari yang lain',
    },
  },
  Form: {
    required: 'Diperlukan',
    optional: 'opsional untuk diisi',
    defaultValidateMessages: {
      default: 'Kesalahan validasi bidang ${label}',
      required: 'Harap masukkan ${label}',
      enum: '${label} harus salah satu dari [${enum}]',
      whitespace: '${label} tidak boleh berupa karakter kosong',
      date: {
        format: 'Format tanggal ${label} tidak valid',
        parse: '${label} tidak dapat dikonversi ke tanggal',
        invalid: '${label} adalah tanggal yang tidak valid',
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
        len: '${label} harus berupa ${len} karakter',
        min: '${label} Minimal ${min} karakter',
        max: '${label}Maksimum ${max} karakter',
        range: '${label} harus antara ${min}-${max} karakter',
      },
      number: {
        len: '${label} harus sama dengan ${len}',
        min: 'Nilai minimum ${label} adalah ${min}',
        max: '${label} memiliki nilai maksimum ${max}',
        range: '${label} harus antara ${min}-${max}',
      },
      array: {
        len: 'Harus ${len} ${label}',
        min: 'Minimal ${min} ${label}',
        max: 'Hingga ${max} ${label}',
        range: 'Jumlah ${label} harus antara ${min}-${max}',
      },
      pattern: {
        mismatch: '${label} tidak cocok dengan pola ${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: 'mengunggah...',
    upload: 'diunggah',
  },
  InfiniteScroll: {
    noMore: 'tidak ada lagi',
    failedToLoad: 'Gagal memuat',
    retry: 'memuat ulang',
  },
  Mask: {
    name: 'lapisan pelindung',
  },
  Modal: {
    ok: 'Saya mendapatkannya',
  },
  PullToRefresh: {
    pulling: 'Tarik ke bawah untuk menyegarkan',
    canRelease: 'Lepaskan untuk menyegarkan segera',
    complete: 'Segarkan berhasil',
  },
  SearchBar: {
    name: 'Bilah Pencarian',
  },
  Slider: {
    name: 'Penggeser',
  },
  Stepper: {
    decrease: 'mengurangi',
    increase: 'meningkat',
  },
  Switch: {
    name: 'Mengalihkan',
  },
})

export default idID
