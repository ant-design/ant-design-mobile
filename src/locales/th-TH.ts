import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label}ไม่ใช่${type}ที่ถูกต้อง'

const thTH = mergeLocale(base, {
  locale: 'th-TH',
  common: {
    confirm: 'ยืนยัน',
    cancel: 'ยกเลิก',
    loading: 'กำลังโหลด',
    close: 'ปิด',
  },
  Calendar: {
    title: 'เลือกวันที่',
    confirm: 'ยืนยัน',
    start: 'เริ่ม',
    end: 'เสร็จ',
    today: 'วันนี้',
    markItems: [
      'วันจันทร์',
      'วันอังคาร',
      'วันพุธ',
      'วันพฤหัสบดี',
      'วันศุกร์',
      'วันเสาร์',
      'วันอาทิตย์',
    ],
    yearAndMonth: '${year}/${month}',
  },
  Cascader: {
    placeholder: 'เลือก',
  },
  Dialog: {
    ok: 'ฉันรู้แล้ว',
  },
  DatePicker: {
    tillNow: 'จนถึงตอนนี้',
  },
  ErrorBlock: {
    default: {
      title: 'อุ๊ปส์, มีบางอย่างผิดพลาด',
      description: 'กรุณารอสักครู่แล้วลองอีกครั้ง',
    },
    busy: {
      title: 'อุ๊ปส์, ไม่ได้โหลด',
      description: 'ลองรีเฟรชหน้า',
    },
    disconnected: {
      title: 'เครือข่ายไม่ว่าง',
      description: 'ลองรีเฟรชหน้า',
    },
    empty: {
      title: 'อืมม, ไม่พบ...',
      description: 'ลองค้นหาใหม่?',
    },
  },
  Form: {
    required: 'จำเป็น',
    optional: 'ไม่จำเป็น',
    defaultValidateMessages: {
      default: 'ข้อผิดพลาดในการตรวจสอบฟิลด์ ${label}',
      required: 'กรุณากรอก ${label}',
      enum: '${label} ต้องเป็นหนึ่งใน [${enum}]',
      whitespace: '${label} ต้องไม่มีช่องว่าง',
      date: {
        format: 'รูปแบบวันที่ ${label} ไม่ถูกต้อง',
        parse: '${label} ไม่สามารถแปลงเป็นวันที่ได้',
        invalid: '${label} เป็นวันที่ไม่ถูกต้อง',
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
        len: '${label} ต้องมี ${len} ตัวอักษร',
        min: '${label} ต้องมีอย่างน้อย ${min} ตัวอักษร',
        max: '${label} ต้องมีไม่เกิน ${max} ตัวอักษร',
        range: '${label} ต้องอยู่ระหว่าง ${min}-${max} ตัวอักษร',
      },
      number: {
        len: '${label} ต้องเท่ากับ ${len}',
        min: '${label} ต้องมีอย่างน้อย ${min}',
        max: '${label} ต้องมีไม่เกิน ${max}',
        range: '${label} ต้องอยู่ระหว่าง ${min}-${max}',
      },
      array: {
        len: 'ต้องมี ${len} ${label}',
        min: 'อย่างน้อย ${min} ${label}',
        max: 'มากสุด ${max} ${label}',
        range: 'จำนวน ${label} ต้องอยู่ระหว่าง ${min}-${max}',
      },
      pattern: {
        mismatch: '${label} ไม่ตรงกับรูปแบบ ${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: 'กำลังอัปโหลด...',
    upload: 'อัปโหลด',
  },
  InfiniteScroll: {
    noMore: 'ไม่มีเพิ่มเติม',
    failedToLoad: 'โหลดล้มเหลว',
    retry: 'ลองใหม่',
  },
  Input: {
    clear: 'ชัดเจน',
  },
  Mask: {
    name: 'มาสก์',
  },
  Modal: {
    ok: 'ฉันรู้แล้ว',
  },
  PasscodeInput: {
    name: 'ป้อนรหัสผ่าน',
  },
  PullToRefresh: {
    pulling: 'ดึงลงเพื่อรีเฟรช',
    canRelease: 'ปล่อยเพื่อรีเฟรชทันที',
    complete: 'รีเฟรชสำเร็จ',
  },
  SearchBar: {
    name: 'แถบค้นหา',
  },
  Slider: {
    name: 'สไลด์เดอร์',
  },
  Stepper: {
    decrease: 'ลด',
    increase: 'เพิ่ม',
  },
  Switch: {
    name: 'สวิตช์',
  },
  Selector: {
    name: 'เลือก',
  },
})

export default thTH
