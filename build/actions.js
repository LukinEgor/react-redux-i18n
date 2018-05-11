'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syncLocaleWithLocalStorage = exports.SYNC_LOCALE_WITH_LOCALSTORAGE = exports.setLocale = exports.SET_LOCALE = exports.loadTranslations = exports.LOAD_TRANSLATIONS = undefined;

var _index = require('./index');

var localeKey = 'i18n-locale';

var LOAD_TRANSLATIONS = exports.LOAD_TRANSLATIONS = '@@i18n/LOAD_TRANSLATIONS';
var loadTranslations = exports.loadTranslations = function loadTranslations(translations) {
  return function (dispatch) {
    dispatch({
      type: LOAD_TRANSLATIONS,
      translations: translations
    });
    _index.I18n.forceComponentsUpdate();
  };
};

var SET_LOCALE = exports.SET_LOCALE = '@@i18n/SET_LOCALE';
var setLocale = exports.setLocale = function setLocale(locale) {
  return function (dispatch, getState) {
    dispatch({
      type: SET_LOCALE,
      locale: locale
    });

    _index.I18n.forceComponentsUpdate();
    if (getState().i18n.syncWithLocalStorage) {
      localStorage.setItem(localeKey, locale);
    }
  };
};

var SYNC_LOCALE_WITH_LOCALSTORAGE = exports.SYNC_LOCALE_WITH_LOCALSTORAGE = '@@i18n/SYNC_LOCALE_WITH_LOCALSTORAGE';
var syncLocaleWithLocalStorage = exports.syncLocaleWithLocalStorage = function syncLocaleWithLocalStorage(locale) {
  return function (dispatch) {
    dispatch({
      type: SYNC_LOCALE_WITH_LOCALSTORAGE,
      locale: localStorage.getItem(localeKey) || locale
    });
  };
};