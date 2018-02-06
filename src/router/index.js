import Vue from 'vue';
import Router from 'vue-router';

const HomeView = () => import('@/views/HomeView');
const MarketView = () => import('@/views/MarketView');
const ItemView = () => import('@/views/ItemView');
const UserView = () => import('@/views/UserView');
const NotFoundView = () => import('@/views/NotFoundView');
const SignInView = () => import('@/views/SignInView');
const ActivityView = () => import('@/views/ActivityView');
const AboutView = () => import('@/views/AboutView');
const InviteView = () => import('@/views/InviteView');
const FaqView = () => import('@/views/FaqView');

Vue.use(Router);

export default new Router({
  // mode: 'history',
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
      path: '/sign-in',
      name: 'SignIn',
      component: SignInView,
    },
    {
      path: '/activity',
      name: 'Activity',
      component: ActivityView,
    },
    {
      path: '/invite',
      name: 'Invite',
      component: InviteView,
    },
    {
      path: '/faq',
      name: 'Faq',
      component: FaqView,
    },
    {
      path: '/invite',
      name: 'Invite',
      component: InviteView,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
});
