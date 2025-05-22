import { Locale } from './base'

const typeTemplate = '${label}वैध नहीं है${type}'

const hiIN: Locale = {
  locale: 'hi-IN',
  common: {
    confirm: 'ज़रूर',
    cancel: 'रद्द करना',
    loading: 'लोड हो रहा है',
    close: 'बंद',
  },
  Calendar: {
    title: 'तिथि चयन',
    confirm: 'पुष्टि करना',
    start: 'शुरू',
    end: 'खत्म करना',
    today: 'आज',
    markItems: [
      'सोमवार',
      'मंगलवार',
      'बुधवार',
      'गुरुवार',
      'शुक्रवार',
      'शनिवार',
      'रविवार',
    ],
    yearAndMonth: '${year}年${month}月',
  },
  Cascader: {
    placeholder: 'कृपया चयन कीजिए',
  },
  Dialog: {
    ok: 'अच्छा ऐसा है',
  },
  DatePicker: {
    tillNow: 'तारीख तक',
  },
  ErrorBlock: {
    default: {
      title: 'पेज पर कुछ छोटी-मोटी समस्याएं हैं',
      description: 'बाद में प्रयास करें',
    },
    busy: {
      title: 'आगे ट्रैफिक जाम',
      description: 'ताज़ा करें और प्रयास करें',
    },
    disconnected: {
      title: 'नेटवर्क थोड़ा व्यस्त है',
      description: 'मरम्मत में मदद के लिए अपनी उंगलियाँ हिलाएँ',
    },
    empty: {
      title: 'आपको जो चाहिए था वो नहीं मिला',
      description: 'कुछ और खोजो.',
    },
  },
  Form: {
    required: 'आवश्यक',
    optional: 'वैकल्पिक',
    defaultValidateMessages: {
      default: 'फ़ील्ड सत्यापन त्रुटियाँ${label}',
      required: 'कृपया दर्ज करें${label}',
      enum: '${label}इनमें से एक होना चाहिए[${enum}]',
      whitespace: '${label}रिक्त वर्ण नहीं हो सकता',
      date: {
        format: '${label}अमान्य दिनांक प्रारूप',
        parse: '${label}दिनांक में परिवर्तित नहीं किया जा सकता',
        invalid: '${label}यह तारीख अमान्य है',
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
        len: '${label}अवश्य होना चाहिए${len}वर्ण',
        min: '${label}कम से कम${min}वर्ण',
        max: '${label}अधिकांश${max}वर्ण',
        range: '${label}अवश्य होना चाहिए${min}-${max}अक्षरों के बीच',
      },
      number: {
        len: '${label}बराबर होना चाहिए${len}',
        min: '${label}न्यूनतम मान है${min}',
        max: '${label}अधिकतम मान है${max}',
        range: '${label}अवश्य होना चाहिए${min}-${max}बीच में',
      },
      array: {
        len: 'अवश्य होना चाहिए${len}व्यक्तिगत${label}',
        min: 'कम से कम${min}व्यक्तिगत${label}',
        max: 'अधिकांश${max}व्यक्तिगत${label}',
        range: '${label}मात्रा होनी चाहिए${min}-${max}बीच में',
      },
      pattern: {
        mismatch: '${label}पैटर्न से मेल नहीं खाता${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: 'अपलोड हो रहा है...',
    upload: 'अपलोड करें',
  },
  InfiniteScroll: {
    noMore: 'अब और नहीं',
    failedToLoad: 'लोडिंग विफल',
    retry: 'पुनः लोड करें',
  },
  Input: {
    clear: 'स्पष्ट',
  },
  Mask: {
    name: 'पृष्ठभूमि मास्क',
  },
  Modal: {
    ok: 'अच्छा ऐसा है',
  },
  PasscodeInput: {
    name: 'पासवर्ड इनपुट बॉक्स',
  },
  PullToRefresh: {
    pulling: 'ताज़ा करने के लिए नीचे खींचें',
    canRelease: 'तुरंत ताज़ा करें रिलीज़ करें',
    complete: 'ताज़ा सफलता',
  },
  SearchBar: {
    name: 'खोज बॉक्स',
  },
  Slider: {
    name: 'स्लाइड इनपुट बार',
  },
  Stepper: {
    decrease: 'कम करना',
    increase: 'बढ़ोतरी',
  },
  Switch: {
    name: 'बदलना',
  },
  Selector: {
    name: 'समूह का चयन करें',
  },
}

export default hiIN
