import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} não é um ${type} válido'

const ptBR = mergeLocale(base, {
  locale: 'pt-BR',
  common: {
    confirm: 'Confirmar',
    cancel: 'Cancelar',
    loading: 'Carregando',
    close: 'Fechar',
  },
  Calendar: {
    markItems: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    yearAndMonth: '${month}/${year}',
  },
  Cascader: {
    placeholder: 'Selecionando',
  },
  Dialog: {
    ok: 'OK',
  },
  DatePicker: {
    tillNow: 'Até agora',
  },
  ErrorBlock: {
    default: {
      title: 'Oops, algo deu errado',
      description: 'Por favor, aguarde um minuto e tente novamente',
    },
    busy: {
      title: 'Oops, não está carregando',
      description: 'Tente atualizar a página',
    },
    disconnected: {
      title: 'A rede está ocupada',
      description: 'Tente atualizar a página',
    },
    empty: {
      title: 'Hmm, não conseguimos encontrar isso...',
      description: 'Quer tentar uma nova busca?',
    },
  },
  Form: {
    required: 'Obrigatório',
    optional: 'Opcional',
    defaultValidateMessages: {
      default: 'Erro de validação para o campo ${label}',
      required: 'Por favor, insira ${label}',
      enum: '${label} deve ser um dos seguintes [${enum}]',
      whitespace: '${label} não pode ser um espaço em branco',
      date: {
        format: 'Formato de data inválido para ${label}',
        parse: '${label} não pode ser convertido para data',
        invalid: '${label} não é uma data válida',
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
        len: '${label} deve ter ${len} caracteres',
        min: '${label} deve ter pelo menos ${min} caracteres',
        max: '${label} deve ter no máximo ${max} caracteres',
        range: '${label} deve ter entre ${min}-${max} caracteres',
      },
      number: {
        len: '${label} deve ser igual a ${len}',
        min: '${label} deve ser no mínimo ${min}',
        max: '${label} deve ser no máximo ${max}',
        range: '${label} deve estar entre ${min} e ${max}',
      },
      array: {
        len: 'Deve ter ${len} ${label}',
        min: 'Pelo menos ${min} ${label}',
        max: 'No máximo ${max} ${label}',
        range: 'A quantidade de ${label} deve estar entre ${min} e ${max}',
      },
      pattern: {
        mismatch: '${label} não corresponde ao padrão ${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: 'Carregando...',
    upload: 'Carregar',
  },
  InfiniteScroll: {
    noMore: 'Fim',
    failedToLoad: 'Falha ao carregar',
    retry: 'Tentar novamente',
  },
  Input: {
    clear: 'limpar',
  },
  Mask: {
    name: 'Máscara',
  },
  Modal: {
    ok: 'OK',
  },
  PasscodeInput: {
    name: 'Input de código de acesso',
  },
  PullToRefresh: {
    pulling: 'Deslize para baixo para atualizar',
    canRelease: 'Solte para atualizar',
    complete: 'Atualizado com sucesso',
  },
  SearchBar: {
    name: 'Barra de pesquisa',
  },
  Slider: {
    name: 'Deslizante',
  },
  Stepper: {
    decrease: 'diminuir',
    increase: 'aumentar',
  },
  Switch: {
    name: 'Interruptor',
  },
  Selector: {
    name: 'Seletor',
  },
})

export default ptBR
