import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} geçerli bir ${type} değil'

const trTR = mergeLocale(base, {
  locale: 'tr-TR',
  common: {
    confirm: 'Onayla',
    cancel: 'İptal',
    loading: 'Yükleniyor',
    close: 'Kapat',
  },
  Calendar: {
    markItems: ['Paz', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
    yearAndMonth: '${year}/${month}',
  },
  Cascader: {
    placeholder: 'Seç',
  },
  Dialog: {
    ok: 'Tamam',
  },
  DatePicker: {
    tillNow: 'Şimdiye kadar',
  },
  ErrorBlock: {
    default: {
      title: 'Hata, sanırım bir şeyler ters gitti',
      description: 'Lütfen bir dakika bekleyip tekrar deneyin',
    },
    busy: {
      title: 'Hata, yüklenmiyor',
      description: 'Sayfayı yenilemeyi deneyin',
    },
    disconnected: {
      title: 'Ağ şu an meşgul',
      description: 'Sayfayı yenilemeyi deneyin',
    },
    empty: {
      title: 'Hmm, bunu bulamadım...',
      description: 'Yeni bir şeyler aramak ister misin?',
    },
  },
  Form: {
    required: 'Zorunlu',
    optional: 'İsteğe bağlı',
    defaultValidateMessages: {
      default: '${label} için doğrulama hatası',
      required: 'Lütfen ${label} girin',
      enum: '${label} şu [${enum}] değerlerden birini içermeli',
      whitespace: '${label} boş bir karakter olamaz',
      date: {
        format: '${label} tarih biçimi geçersiz',
        parse: '${label} tarihe dönüştürülemez',
        invalid: '${label} geçersiz bir tarih',
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
        len: '${label}, ${len} karakterden oluşmalıdır',
        min: '${label} en az ${min} karakterden oluşmalıdır',
        max: '${label} en fazla ${max} karakterden oluşmalıdır',
        range: '${label}, ${min}-${max} karakter arasında olmalıdır',
      },
      number: {
        len: '${label} ${len} değerine eşit olmalı',
        min: '${label} minimum ${min} olmalı',
        max: '${label} maximum ${max} olmalı',
        range: '${label} yanlızca ${min}-${max} değer aralığında olabilir',
      },
      array: {
        len: '${len} ${label} olmalı',
        min: 'En az ${min} ${label} ',
        max: 'En fazla ${max} ${label}',
        range: '${label} miktarı ${min}-${max} arasında olmalıdır',
      },
      pattern: {
        mismatch: '${label}, ${pattern} modeliyle eşleşmiyor',
      },
    },
  },
  ImageUploader: {
    uploading: 'Yükleniyor...',
    upload: 'Yükle',
  },
  InfiniteScroll: {
    noMore: 'Daha fazla yok',
    failedToLoad: 'Yükleme başarısız',
    retry: 'Tekrar',
  },
  Input: {
    clear: 'temizle',
  },
  Mask: {
    name: 'Maskele',
  },
  Modal: {
    ok: 'Tamam',
  },
  PasscodeInput: {
    name: 'Şifre Girişi',
  },
  PullToRefresh: {
    pulling: 'Yenilemek için aşağı kaydırın',
    canRelease: 'Hemen yenilemek için bırakın',
    complete: 'Yenileme başarılı',
  },
  SearchBar: {
    name: 'Arama Kutusu',
  },
  Slider: {
    name: 'Slider',
  },
  Stepper: {
    decrease: 'azalt',
    increase: 'yükselt',
  },
  Switch: {
    name: 'Değiştir',
  },
  Selector: {
    name: 'Seçici',
  },
})

export default trTR
