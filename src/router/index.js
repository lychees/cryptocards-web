import Vue from 'vue';
import Router from 'vue-router';

const HomeView = () => import('@/views/HomeView');
const MarketView = () => import('@/views/MarketView');
const ItemView = () => import('@/views/ItemView');
const UserView = () => import('@/views/UserView');
const NotFoundView = () => import('@/views/NotFoundView');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/market/:type?/:page(\\d+)?',
      name: 'Market',
      component: MarketView,
    },
    {
      path: '/item/:id',
      name: 'Item',
      component: ItemView,
    },
    {
      path: '/user/:address/:type?/:page(\\d+)?',
      name: 'User',
      component: UserView,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
});
