import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} غير صالح ${type}'

const arSA = mergeLocale(base, {
  'locale': 'ar-SA',
  'common': {
    'confirm': 'نعم',
    'cancel': 'إلغاء',
    'loading': 'جار التحميل',
    'close': 'إغلاق',
  },
  'Calendar': {
    'title': 'اختيار التاريخ',
    'confirm': 'تأكيد',
    'start': 'يبدأ',
    'end': 'ينهي',
    'today': 'اليوم',
    'markItems': ['واحد', 'اثنين', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'يوم'],
    'yearAndMonth': '${year} سنة ${month} شهر',
  },
  'Cascader': { 'placeholder': 'اختر من فضلك' },
  'Dialog': { 'ok': 'فهمت' },
  'DatePicker': { 'tillNow': 'إلى اليوم' },
  'ErrorBlock': {
    'default': {
      'title': 'تواجه الصفحة بعض المشكلات البسيطة',
      'description': 'حاول لاحقًا',
    },
    'busy': { 'title': 'الازدحام في الأمام', 'description': 'حاول التجديد' },
    'disconnected': {
      'title': 'شبكة مشغولة',
      'description': 'مرر أصابعك وساعد ف الإصلاح',
    },
    'empty': {
      'title': 'لم أتمكن من العثور على ما تحتاجه',
      'description': 'البحث عن شيء آخر',
    },
  },
  'Form': {
    'required': 'مطلوب',
    'optional': 'اختياري',
    'defaultValidateMessages': {
      'default': 'خطأ في التحقق من صحة الكلمات ${label}',
      'required': 'يرجى إدخال ${label}',
      'enum': '${label} يجب أن يكون واحدًا منهم [ ${enum} ]',
      'whitespace': '${label} لا يمكن أن يكون حرفًا فارغًا',
      'date': {
        'format': '${label} تنسيق التاريخ غير صالح',
        'parse': '${label} لا يمكن تحويله إلى تاريخ',
        'invalid': '${label} تاريخ غير صالح',
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
        'len': '${label} يجب أن يكون عدد الأحرف ${len}',
        'min': '${label} أحرف على الأقل ${min}',
        'max': '${label} الحد الأقصى لعدد الأحرف ${max}',
        'range': '${label} يجب أن يكون بين ${min} - ${max} حرفًا',
      },
      'number': {
        'len': '${label} يجب أن يساوي ${len}',
        'min': '${label}الحد الأدنى للقيمة هو ${min}',
        'max': '${label}القيمة القصوى هي ${max}',
        'range': '${label} يجب أن يكون بين ${min} - ${max}',
      },
      'array': {
        'len': 'يجب أن يكون ${len} ${label}',
        'min': 'على الأقل ${min} ${label}',
        'max': 'الحد الأقصى ${max} ${label}',
        'range': '${label} يجب أن تكون الكمية بين ${min} - ${max}',
      },
      'pattern': { 'mismatch': '${label} لا يتطابق مع النمط ${pattern}' },
    },
  },
  'ImageUploader': { 'uploading': 'جارٍ التحميل...', 'upload': 'تحميل' },
  'InfiniteScroll': {
    'noMore': '-لا يوجد أكثر-',
    'failedToLoad': 'فشل التحميل',
    'retry': 'إعادة التحميل',
  },
  'Input': { 'clear': 'إزالة' },
  'Mask': { 'name': 'قناع الخلفية' },
  'Modal': { 'ok': 'فهمت' },
  'PasscodeInput': { 'name': 'مربع إدخال كلمة المرور' },
  'PullToRefresh': {
    'pulling': 'اسحب إلى الأسفل للتحديث',
    'canRelease': 'حرر للتحديث على الفور',
    'complete': 'تم التحديث بنجاح',
  },
  'SearchBar': { 'name': 'شريط البحث' },
  'Slider': { 'name': 'شريط الإدخال المنزلق' },
  'Stepper': { 'decrease': 'يقلل', 'increase': 'يزيد' },
  'Switch': { 'name': 'زر الفتح والإغلاق' },
  'Selector': { 'name': 'اختر مجموعة' },
})

export default arSA
