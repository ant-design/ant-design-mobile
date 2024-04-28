import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} không phải là một ${type} hợp lệ'

const viVN = mergeLocale(base, {
  'locale': 'vi-VN',
  'common': {
    'confirm': 'Chắc chắn',
    'cancel': 'Hủy',
    'loading': 'Đang tải',
    'close': 'Đóng',
  },
  'Calendar': {
    'title': 'Chọn ngày',
    'confirm': 'Xác nhận',
    'start': 'Bắt đầu',
    'end': 'Kết thúc',
    'today': 'Hôm nay',
    'markItems': ['Một', 'Hai', 'Ba', 'Bốn', 'Năm', 'Sáu', 'Ngày'],
    'yearAndMonth': 'Tháng ${month} năm ${year}',
  },
  'Cascader': { 'placeholder': 'Vui lòng lựa chọn' },
  'Dialog': { 'ok': 'OK' },
  'DatePicker': { 'tillNow': 'Đến nay' },
  'ErrorBlock': {
    'default': {
      'title': 'Trang đang gặp một số vấn đề nhỏ',
      'description': 'Đợi chút rồi thử',
    },
    'busy': { 'title': 'Ùn tắc phía trước', 'description': 'Thử quét mới' },
    'disconnected': {
      'title': 'Mạng đang bận',
      'description': 'Chạm khẽ để chỉnh sửa',
    },
    'empty': {
      'title': 'Không tìm thấy thứ bạn cần',
      'description': 'Tìm cái khác',
    },
  },
  'Form': {
    'required': 'Bắt buộc',
    'optional': 'Tùy chọn',
    'defaultValidateMessages': {
      'default': 'Lỗi xác thực trường ${label}',
      'required': 'Vui lòng nhập ${label}',
      'enum': '${label} phải là một trong [${enum}]',
      'whitespace': '${label} không được là ký tự trống',
      'date': {
        'format': '${label}Định dạng ngày tháng không còn hiệu lực',
        'parse': '${label} Không thể chuyển đổi thành ngày',
        'invalid': '${label} là một ngày không hợp lệ',
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
        'len': '${label} phải là ${len} ký tự',
        'min': '${label} tối thiểu ${min} ký tự',
        'max': '${label} tối đa ${max} ký tự',
        'range': '${label} phải ở giữa chữ ${min} - ${max}',
      },
      'number': {
        'len': '${label} phải bằng ${len}',
        'min': '${label} giá trị tối thiểu là ${min}',
        'max': '${label} giá trị tối đa là ${max}',
        'range': '${label} phải ở giữa ${min} - ${max}',
      },
      'array': {
        'len': 'Phải là ${len} chiếc ${label}',
        'min': 'Tối thiểu ${min} chiếc ${label}',
        'max': 'Tối đa ${max} chiếc ${label}',
        'range': '${label} số lượng phải ở giữa ${min} - ${max}',
      },
      'pattern': { 'mismatch': '${label} không khớp với mẫu ${pattern}' },
    },
  },
  'ImageUploader': { 'uploading': 'Đang tải lên...', 'upload': 'Tải lên' },
  'InfiniteScroll': {
    'noMore': 'Hết rồi bạn ơi',
    'failedToLoad': 'Tải xuống thất bại',
    'retry': 'Tải lại',
  },
  'Input': { 'clear': 'Xóa' },
  'Mask': { 'name': 'Nền tối' },
  'Modal': { 'ok': 'OK' },
  'PasscodeInput': { 'name': 'Khung nhập mật khẩu' },
  'PullToRefresh': {
    'pulling': 'Kéo xuống để làm mới',
    'canRelease': 'Thả ra để làm mới',
    'complete': 'Làm mới thành công',
  },
  'SearchBar': { 'name': 'Khung tìm kiếm' },
  'Slider': { 'name': 'Thanh nhập liệu trượt' },
  'Stepper': { 'decrease': 'Giảm', 'increase': 'Tăng' },
  'Switch': { 'name': 'Bật tắt' },
  'Selector': { 'name': 'Chọn nhóm' },
})

export default viVN
