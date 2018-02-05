<template>
  <header class="Header-container">
    <div class="Header">
      <div class="Header-group Header-group-home">
        <router-link class="Header-home active"
                     :to="{ name: 'Home'}">
          <div class="Header-logoWrapper">
            <div class="Header-logo"></div>
          </div>
          <h1 class="Header-wordmark">{{ $t("CryptoCards") }}</h1>
        </router-link>
        <div class="Header-networkStatus">
          <div class="NetworkStatus NetworkStatus--1">
            <div class="TooltipNew">
              <span class="TooltipNew-wrapper">
                <span class="NetworkStatus-message">
                  <span class="NetworkStatus-badge"></span>
                  <span class="NetworkStatus-status">{{ $t("Network good") }}</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="Header-group">
        <router-link v-if="me"
                     class="Header-navigation-item"
                     :class="{'Header-navigation-item--active': isActive('My')}"
                     :to="{ name: 'User', params:{address: me.address}}">{{ $t("My") }}</router-link>
        <router-link v-if="!me"
                     class="Header-navigation-item"
                     :class="{'Header-navigation-item--active': isActive('SignIn')}"
                     :to="{ name: 'SignIn'}">{{ $t("Sign In") }}</router-link>
        <router-link class="Header-navigation-item"
                     :class="{'Header-navigation-item--active': isActive('Market')}"
                     :to="{ name: 'Market'}">{{ $t("Marketplace") }}</router-link>
        <router-link v-if="me"
                     class="Header-navigation-item"
                     :class="{'Header-navigation-item--active': isActive('Activity')}"
                     :to="{ name: 'Activity'}">{{ $t("Activity") }}</router-link>
      </div>
      <div class="Header-group">
        <a class="Header-group-toggleIcon"><img src="/icons/group.svg"></a>
        <div class="Header-dropdown Header-navigation-dropdown">
          <router-link v-if="me"
                       class="Header-navigation-item"
                       :class="{'Header-navigation-item--active': isActive('Invite')}"
                       :to="{ name: 'Invite'}">{{ $t("Invite") }}</router-link>
          <router-link class="Header-navigation-item"
                       :class="{'Header-navigation-item--active': isActive('About')}"
                       :to="{ name: 'About'}">{{ $t("About") }}</router-link>
          <router-link class="Header-navigation-item"
                       :class="{'Header-navigation-item--active': isActive('Faq')}"
                       :to="{ name: 'Faq'}">{{ $t("FAQs") }}</router-link>
          <a class="Header-navigation-item">
            <select class="Filter-select"
                    v-model="locale">
              <option v-for="(item) in $config.i18n"
                      :key="item.locale"
                      :value="item.locale">
                {{item.langDisplay}}</option>
            </select>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    me() {
      return this.$store.state.me;
    },
    isActive() {
      return routeName => this.$route.name === routeName;
    },
    locale: {
      get() {
        const locale = this.$store.state.locale;
        const lang = this.$config.i18n.find(
          item =>
            item.locale === locale ||
            item.aliases.some(alias => alias === locale),
        );
        return lang ? lang.locale : null;
      },
      set(value) {
        this.$store.dispatch('setLocale', value);
      },
    },
  },
};
</script>

<style scoped>

</style>
