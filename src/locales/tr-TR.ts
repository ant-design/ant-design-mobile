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
    markItems: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
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
      default: 'Alan doğrulama hatası ${label}',
      required: '${label} gerekli bir alan',
      enum: '${label} şunlardan biri olmalı: [${enum}]',
      whitespace: '${label} sadece boşluk olamaz',
      date: {
        format: '${label} tarih biçimi geçersiz',
        parse: '${label} bir tarihe dönüştürülemedi',
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
        min: '${label} en az ${min} karakter olmalı',
        max: '${label} en çok ${max} karakter olmalı',
        range: '${label} ${min}-${max} karakter arası olmalı',
      },
      number: {
        len: '${label} ${len} olmalı',
        min: '${label} en az ${min} olmalı',
        max: '${label} en çok ${max} olmalı',
        range: '${label} ${min}-${max} arası olmalı',
      },
      array: {
        len: '${label} sayısı ${len} olmalı',
        min: '${label} sayısı en az ${min} olmalı',
        max: '${label} sayısı en çok ${max} olmalı',
        range: '${label} sayısı ${min}-${max} arasında olmalıdır',
      },
      pattern: {
        mismatch: '${label} şu kalıpla eşleşmeli: ${pattern}',
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
    name: 'Arama Çubuğu',
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
