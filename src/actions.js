import { I18n } from './index'

const localeKey = 'i18n-locale'

export const LOAD_TRANSLATIONS = '@@i18n/LOAD_TRANSLATIONS'
export const loadTranslations = translations => dispatch => {
  dispatch({
    type: LOAD_TRANSLATIONS,
    translations,
  })
  I18n.forceComponentsUpdate()
}

export const SET_LOCALE = '@@i18n/SET_LOCALE'
export const setLocale = locale => (dispatch, getState) => {
  dispatch({
    type: SET_LOCALE,
    locale
  })

  I18n.forceComponentsUpdate()
  if (getState().i18n.syncWithLocalStorage) {
    localStorage.setItem(localeKey, locale)
  }
}

export const SYNC_LOCALE_WITH_LOCALSTORAGE = '@@i18n/SYNC_LOCALE_WITH_LOCALSTORAGE'
export const syncLocaleWithLocalStorage = (locale) => dispatch => {
  dispatch({
    type: SYNC_LOCALE_WITH_LOCALSTORAGE,
    locale: localStorage.getItem(localeKey) || locale
  })
}
