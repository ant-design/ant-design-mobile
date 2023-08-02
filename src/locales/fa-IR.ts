import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} یک ${type} معتبر نیست'

const faIR = mergeLocale(base, {
  locale: 'fa-IR',
  common: {
    confirm: 'تایید',
    cancel: 'لغو',
  },
  Calendar: {
    markItems: [
      'شنبه',
      'یک‌شنبه',
      'دو‌شنبه',
      'سه‌شنبه',
      'چهار‌شنبه',
      'پنج‌نشبه',
      'جمعه',
    ],
    yearAndMonth: '${year}/${month}',
  },
  Cascader: {
    placeholder: 'انتخاب کنید',
  },
  Dialog: {
    ok: 'باشه',
  },
  ErrorBlock: {
    default: {
      title: 'اوه، مشکلی پیش آمد',
      description: 'لطفاً یک دقیقه صبر کنید و دوباره امتحان کنید',
    },
    busy: {
      title: 'اوه، بارگیری نمی شود',
      description: 'سعی کنید صفحه را به روز کنید',
    },
    disconnected: {
      title: 'شبکه مشغول است',
      description: 'سعی کنید صفحه را به روز کنید',
    },
    empty: {
      title: 'هوم، نتونستم پیداش کنم...',
      description: 'آیا می خواهید یک جستجوی جدید را امتحان کنید؟',
    },
  },
  Form: {
    required: 'اجباری',
    optional: 'اختیاری',
    defaultValidateMessages: {
      default: 'خطای اعتبارسنجی فیلد برای ${label}',
      required: 'لطفا وارد کنید ${label}',
      enum: '${label} باید یکی از [${enum}]',
      whitespace: '${label} نمی تواند یک کاراکتر خالی باشد',
      date: {
        format: '${label} قالب تاریخ نامعتبر است',
        parse: '${label} نمی توان به تاریخ تبدیل کرد',
        invalid: '${label} تاریخ نامعتبر است',
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
        len: 'تعداد کاراکترهای ${label} باید ${len} کاراکتر باشد',
        min: 'حداقل کاراکترهای ${label} باید ${min} کاراکتر باشد',
        max: 'حداکثر کاراکترهای ${label} باید ${max} کاراکتر باشد',
        range: 'تعداد کاراکترهای ${label} باید بین ${min}-${max} کاراکتر باشد',
      },
      number: {
        len: 'تعداد اعداد ${label} باید برابر با ${len} باشد',
        min: 'تعداد اعداد ${label} باید حداقل ${min} باشد',
        max: 'تعداد اعداد ${label} باید حداکثر ${max} باشد',
        range: 'تعداد اعداد ${label} باید بین ${min}-${max} باشد',
      },
      array: {
        len: 'طول آیتم‌های ${label} باید برابر با ${len} باشد',
        min: 'آیتم‌های ${label} باید حداقل ${min} باشد',
        max: 'آیتم‌های ${label} باید حداکثر ${max} باشد',
        range: 'آیتم‌های ${label} باید بین ${min}-${max} باشد',
      },
      pattern: {
        mismatch: '${label} با الگوی ${pattern} مطابقت ندارد',
      },
    },
  },
  ImageUploader: {
    uploading: 'در حال آپلود...',
  },
  Mask: {
    name: 'ماسک',
  },
  Modal: {
    ok: 'باشه',
  },
})

export default faIR
