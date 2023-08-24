import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} 유효하지 않은 ${type} 입니다'

const koKR = mergeLocale(base, {
  locale: 'ko-KR',
  common: {
    confirm: '확인',
    cancel: '취소',
    loading: '로딩중',
    close: '닫기',
  },
  Calendar: {
    markItems: ['월', '화', '수', '목', '금', '토', '일'],
    yearAndMonth: '${year}년 ${month}월',
  },
  Cascader: {
    placeholder: '선택됨',
  },
  Dialog: {
    ok: '확인',
  },
  DatePicker: {
    tillNow: '지금까지',
  },
  ErrorBlock: {
    default: {
      title: '문제가 발생했습니다',
      description: '잠시 후 다시 시도해주세요',
    },
    busy: {
      title: '로딩 되지 않았습니다.',
      description: '페이지를 새로고침 해주세요',
    },
    disconnected: {
      title: '네트워크를 사용 중 입니다',
      description: '페이지를 새로고침 해주세요',
    },
    empty: {
      title: '정보를 찾을 수 없습니다',
      description: '정확한 검색어인가요?',
    },
  },
  Form: {
    required: '필수',
    optional: '선택',
    defaultValidateMessages: {
      default: '필드 유효성 검사 오류 ${label}',
      required: '${label} 입력해 주세요',
      enum: '${label} [${enum}] 중에 하나여야 합니다',
      whitespace: '${label} 비워둘 수 없습니다',
      date: {
        format: '${label} 유효하지 않은 날짜 형식입니다',
        parse: '${label} 날짜 형식으로 변환될 수 없습니다',
        invalid: '${label} 유효하지 않은 날짜입니다',
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
        len: '${label} ${len}글자여야 합니다',
        min: '${label} 적어도 ${min}글자 이상이어야 합니다',
        max: '${label} ${max}글자 이하여야 합니다',
        range: '${label} ${min}-${max}글자 사이어야 합니다',
      },
      number: {
        len: '${label} 값은 ${len}이어야 합니다',
        min: '${label} 최솟값은 ${min}입니다',
        max: '${label} 최댓값은 ${max}입니다',
        range: '${label} 값은 ${min}-${max} 사이어야 합니다',
      },
      array: {
        len: '${len}이어야 합니다 ${label}',
        min: '최소 ${min}이어야 합니다 ${label}',
        max: '최대 ${max}이어야 합니다 ${label}',
        range: '${label} ${min}-${max} 사이어야 합니다',
      },
      pattern: {
        mismatch: '${label} ${pattern} 패턴과 일치하지 않습니다',
      },
    },
  },
  ImageUploader: {
    uploading: '업로드 중...',
    upload: '업로드',
  },
  InfiniteScroll: {
    noMore: '불러올 데이터 없음',
    failedToLoad: '불러오기 실패',
    retry: '재시도',
  },
  Input: {
    clear: '지우기',
  },
  Mask: {
    name: '마스크',
  },
  Modal: {
    ok: '확인',
  },
  PasscodeInput: {
    name: '비밀번호 입력',
  },
  PullToRefresh: {
    pulling: '스크롤을 당겨서 새로고침하십시오',
    canRelease: '새로고침 하려면 놓으십시오',
    complete: '새로고침 완료',
  },
  SearchBar: {
    name: '검색바',
  },
  Slider: {
    name: '슬라이더',
  },
  Stepper: {
    decrease: '감소',
    increase: '증가',
  },
  Switch: {
    name: '스위치',
  },
})

export default koKR
