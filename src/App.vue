<template>
  <div id="app">
    <Header />
    <main class="Main">
      <transition name="fade"
                  mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  created() {
    this.$store.dispatch('initLocale');
    this.$store.dispatch('FETCH_ME');
  },
  computed: {
    locale() {
      return this.$store.state.locale;
    },
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    },
  },
};
</script>

<style>

</style>
