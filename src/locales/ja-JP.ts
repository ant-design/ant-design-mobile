import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} は有効な ${type} ではありません'

const jaJP = mergeLocale(base, {
  locale: 'ja-JP',
  common: {
    confirm: '確認',
    cancel: 'キャンセル',
    loading: '読み込み中',
  },
  Calendar: {
    markItems: ['月', '火', '水', '木', '金', '土', '日'],
    yearAndMonth: '${year}年${month}月',
  },
  Cascader: {
    placeholder: '選択下さい',
  },
  Dialog: {
    ok: '了解',
  },
  ErrorBlock: {
    default: {
      title: 'おっと,何か問題が発生しました',
      description: 'しばらく待ってからもう一度お試しください',
    },
    busy: {
      title: 'おっと,ロードされていません',
      description: 'ページをリフレッシュしてみてください',
    },
    disconnected: {
      title: 'ネットワークがビジー状態です',
      description: 'ページをリフレッシュしてみてください',
    },
    empty: {
      title: 'うーん,見つからなかった...',
      description: 'ほかを試してみませんか?',
    },
  },
  Form: {
    required: '必須',
    optional: 'オプション',
    defaultValidateMessages: {
      default: '${label} のフィールド検証エラー',
      required: '${label} を入力してください',
      enum: '${label} は [${enum}] のいずれかでなければなりません',
      whitespace: '${label} を空白文字にすることはできません',
      date: {
        format: '${label} の日付形式が無効です',
        parse: '${label} は日付に変換できません',
        invalid: '${label} は無効な日付です',
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
        len: '${label} の長さは ${len} 文字でなければなりません',
        min: '${label} の長さは少なくとも ${min} 文字でなければなりません',
        max: '${label} の長さは最大 ${max} 文字でなければなりません',
        range: '${label} の長さは ${min}-${max} 文字の間でなければなりません',
      },
      number: {
        len: '${label} は ${len} と等しくなければなりません',
        min: '${label} は最小 ${min} でなければなりません',
        max: '${label} は最大 ${max} でなければなりません',
        range: '${label} は ${min}-${max} の間でなければなりません',
      },
      array: {
        len: '${label} は ${len} 個である必要があります',
        min: '${label} は少なくとも ${min} 個',
        max: '${label} は最大 ${min} 個',
        range: '${label} の数は ${min}-${max} の間でなければなりません',
      },
      pattern: {
        mismatch: '${label} はパターン ${pattern} と一致しません',
      },
    },
  },
  ImageUploader: {
    uploading: 'アップロード中...',
    upload: 'アップロード',
  },
  InfiniteScroll: {
    noMore: 'これ以上',
    failedToLoad: '読み込みに失敗しました',
    retry: '再試行',
  },
  Input: {
    clear: 'クリア',
  },
  Mask: {
    name: 'マスク',
  },
  Modal: {
    ok: '了解',
  },
  PasscodeInput: {
    name: 'パスコード入力',
  },
  PullToRefresh: {
    pulling: '下にスクロールして更新',
    canRelease: '解放してすぐに更新',
    complete: 'リフレッシュ成功',
  },
  SearchBar: {
    name: '検索バー',
  },
  Slider: {
    name: 'スライダー',
  },
  Stepper: {
    decrease: '減少',
    increase: '増加',
  },
  Switch: {
    name: 'スイッチ',
  },
})

export default jaJP
