import Cookie from 'js-cookie';

export default {
  getLocale() {
    return (
      Cookie.get('locale') ||
      (
        navigator.language ||
        navigator.browserLanguage ||
        navigator.userLanguage
      ).toLowerCase()
    );
  },
  setLocale(locale) {
    Cookie.set('locale', locale, { expires: 365 });
  },
};
