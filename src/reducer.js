import {
  LOAD_TRANSLATIONS,
  SET_LOCALE,
  SYNC_LOCALE_WITH_LOCALSTORAGE
} from './actions'

const defaultState = {
  syncWithLocalStorage: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_TRANSLATIONS:
      return {
        ...state,
        translations: action.translations
      }

    case SET_LOCALE:
      return {
        ...state,
        locale: action.locale
      }

    case SYNC_LOCALE_WITH_LOCALSTORAGE:
      return {
        ...state,
        syncWithLocalStorage: true,
        locale: action.locale
      }

    default:
      return state
  }
}
