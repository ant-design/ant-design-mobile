import { mergeLocale } from '../utils/merge-locale'
import { base } from './base'

const typeTemplate = '${label}Pas un valide${type}'

const frFR = mergeLocale(base, {
  locale: 'fr-FR',
  common: {
    confirm: 'Activer',
    cancel: 'Annuler',
    loading: 'Chargement',
  },
  Calendar: {
    markItems: ['un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept'],
    yearAndMonth: '${year}Année ${month}Mois',
  },
  Cascader: {
    placeholder: 'Veuillez sélectionner',
  },
  Dialog: {
    ok: 'Je l’ai compris',
  },
  ErrorBlock: {
    default: {
      title: 'La page rencontre des problèmes mineurs',
      description: 'Venez essayer plus tard',
    },
    busy: {
      title: 'Pas chargé.',
      description: 'Tentative de rafraîchir la page',
    },
    disconnected: {
      title: 'Le réseau est occupé',
      description: 'Tentative de rafraîchir la page',
    },
    empty: {
      title: 'Vous n’avez pas trouvé ce que vous cherchez',
      description: 'Trouvez les autres',
    },
  },
  Form: {
    required: 'Qu’il remplit',
    optional: 'Décharge sélectionnés',
    defaultValidateMessages: {
      default: 'Erreur de validation de champ${label}',
      required: 'Veuillez entrer le${label}',
      enum: '${label}doit être l’un des[${enum}]',
      whitespace: '${label}Ne peut pas être un caractère vide',
      date: {
        format: '${label}Format de date invalide',
        parse: '${label}Non convertible en date',
        invalid: '${label}Est une date non valide',
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
        len: '${label}pour${len}Un caractère',
        min: '${label}Au moins${min}Un caractère',
        max: '${label}Un maximum de${max}Un caractère',
        range: '${label}Dans les${min}-${max}Entre les caractères',
      },
      number: {
        len: '${label}Doit être égal à${len}',
        min: '${label}La valeur minimale est${min}',
        max: '${label}La valeur maximale est${max}',
        range: '${label}Dans les${min}-${max}entre',
      },
      array: {
        len: 'pour${len}个${label}',
        min: 'Au moins${min}个${label}',
        max: 'Un maximum de${max}个${label}',
        range: '${label}Montant de${min}-${max}entre',
      },
      pattern: {
        mismatch: '${label}Ne correspond pas au modèle${pattern}',
      },
    },
  },
  ImageUploader: {
    uploading: 'Téléchargement...',
    upload: 'Télécharger',
  },
  InfiniteScroll: {
    noMore: 'Non, plus maintenant.',
  },
  Mask: {
    name: 'Masques',
  },
  Modal: {
    ok: 'Je l’ai compris',
  },
  PullToRefresh: {
    pulling: 'Rafraîchir la liste déroulante',
    canRelease: 'Libérez instantanément rafraîchir',
    complete: 'Rafraîchir avec succès',
  },
})

export default frFR
