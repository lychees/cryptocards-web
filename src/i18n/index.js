import Vue from 'vue';
import VueI18n from 'vue-i18n';

import zh from './lang/zh.json';
import en from './lang/en.json';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    zh,
    'zh-cn': zh,
    'zh-hk': zh,
    'zh-sg': zh,
    'zh-tw': zh,
    en,
  },
});
