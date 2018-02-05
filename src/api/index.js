import Cookie from 'js-cookie';
import faker from 'faker';

// Mock
const User = () => ({
  address: faker.finance.bitcoinAddress(),
  nickname: faker.name.findName(),
  imageUrl: faker.image.avatar(),
});

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
  async getMe() {
    return Math.random() > 0.5 ? new User() : null;
  },
};
