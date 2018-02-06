import Cookie from 'js-cookie';
import faker from 'faker';

// Mock
const User = () => ({
  address: faker.finance.bitcoinAddress(),
  nickname: faker.name.findName(),
  imageUrl: faker.image.avatar(),
});
const Card = () => ({
  id: faker.random.uuid(),
  name: faker.random.word(),
  isNew: Math.random() > 0.8,
  imageUrl: faker.image.image(),
  createAt: faker.date.past(),
  createBy: faker.finance.bitcoinAddress(),
  rarity: Math.random(),
  owner: new User(),
});
const CardPack = () => ({
  id: faker.random.uuid(),
  isNew: Math.random() > 0.8,
  imageUrl: faker.image.image(),
  createAt: new Date(faker.date.past()).getTime(),
  createBy: faker.finance.bitcoinAddress(),
  rarity: Math.random(),
  owner: new User(),
});
const Auction = () => ({
  id: faker.random.uuid(),
  startPrice: faker.commerce.price(),
  endPrice: faker.commerce.price(),
  startTime: new Date(faker.date.past()).getTime(),
  endTime: new Date(faker.date.future()).getTime(),
  nowTime: new Date(faker.date.future()).getTime(),
  currentPrice: faker.commerce.price(),
  seller: new User(),
});
const Item = () => {
  const item = Math.random() > 0.5 ? new Card() : new CardPack();
  item.auction = Math.random() > 0.5 ? new Auction() : null;
  return item;
};

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
  async getUser(address) {
    const user = new User();
    user.address = address;
    return user;
  },
  async queryItems(query) {
    const total = parseInt(Math.random() * 100, 10);
    return {
      total,
      offset: faker.random.number(),
      limit: faker.random.number(),
      items: Array.from({
        length: total,
      }, () => (new Item())),
    };
  },
  async getItem(id) {
    const item = new Item();
    item.id = id;
    return item;
  },
};
