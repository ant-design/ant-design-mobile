import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label} no es un ${type} válido'

const esES = mergeLocale(base, {
  locale: 'es',
  common: {
    confirm: 'Confirmar',
    cancel: 'Cancelar',
    loading: 'Cargando',
  },
  Calendar: {
    markItems: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
    yearAndMonth: '${year}/${month}',
  },
  Cascader: {
    placeholder: 'Seleccionando',
  },
  Dialog: {
    ok: 'Entendido',
  },
  ErrorBlock: {
    default: {
      title: 'Oops, algo salió mal',
      description: 'Por favor espere un minuto e intente nuevamente',
    },
    busy: {
      title: 'Oops, no está cargando',
      description: 'Intente refrescar la página',
    },
    disconnected: {
      title: 'La red se encuentra ocupada',
      description: 'Intente refrescar la página',
    },
    empty: {
      title: 'Hmm, no pudimos encontrar eso...',
      description: 'Quieres intentar una nueva búsqueda?',
    },
  },
  Form: {
    required: 'Requerido',
    optional: 'Opcional',
    defaultValidateMessages: {
      default: 'Error de validación para el campo ${label}',
      required: 'Por favor ingrese ${label}',
      enum: '${label} debe ser uno de los siguientes [${enum}]',
      whitespace: '${label} no puede ser un caracter en blanco',
      date: {
        format: '${label} el formato de fecha es inválido',
        parse: '${label} no puede ser convertido a fecha',
        invalid: '${label} no es una fecha válida',
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
        len: '${label} debe tener ${len} caracteres',
        min: '${label} debe tener al menos ${min} caracteres',
        max: '${label} debe tener como mucho ${max} caracteres',
        range: '${label} debe tener entre ${min}-${max} caracteres',
      },
      number: {
        len: '${label} debe ser igual a ${len}',
        min: '${label} debe ser mínimo ${min}',
        max: '${label} debe ser máximo ${max}',
        range: '${label} debe ser entre ${min}-${max}',
      },
      array: {
        len: 'Debe ser ${len} ${label}',
        min: 'Al menos ${min} ${label}',
        max: 'Como mucho ${max} ${label}',
        range: 'La cantidad de ${label} debe ser entre ${min}-${max}',
      },
      pattern: {
        mismatch: '${label} no coincide con el patrón ${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: 'Subiendo...',
  },
  Mask: {
    name: 'Máscara',
  },
  Modal: {
    ok: 'Entendido',
  },
  PullToRefresh: {
    pulling: 'Desplácese hacia abajo para refrescar',
    canRelease: 'Suelte para refrescar inmediatamente',
    complete: 'Refrescó exitosamente',
  },
})

export default esES
