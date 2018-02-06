import Cookie from 'js-cookie';
import faker from 'faker';
import Web3 from 'web3';

const web3Provider = window.web3 ? window.web3.currentProvider : null;
const web3 = web3Provider ? new Web3(web3Provider) : null;

// Mock
const User = () => ({
  address: faker.finance.bitcoinAddress(),
  nickname: faker.name.findName(),
  imageUrl: faker.image.avatar(),
});
const Card = () => ({
  id: faker.random.uuid(),
  type: 'Card',
  name: faker.random.word(),
  isNew: Math.random() > 0.8,
  imageUrl: faker.image.image(),
  createAt: faker.date.past(),
  createBy: faker.finance.bitcoinAddress(),
  rarity: Math.random(),
  owner: new User(),
  bio: faker.lorem.paragraphs(),
});
const CardPack = () => ({
  id: faker.random.uuid(),
  type: 'CardPack',
  isNew: Math.random() > 0.8,
  imageUrl: faker.image.image(),
  createAt: new Date(faker.date.past()).getTime(),
  createBy: faker.finance.bitcoinAddress(),
  rarity: Math.random(),
  owner: new User(),
  bio: faker.lorem.paragraphs(),
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
    if (!web3) {
      throw Error('NO_METAMASK');
    }
    return new Promise((resolve, reject) => {
      web3.eth.getAccounts((error, accounts) => {
        const address = accounts[0];
        if (address) {
          const user = new User();
          user.address = address;
          return resolve(user);
        }
        return reject(new Error('METAMASK_LOCKED'));
      });
    });
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
