<template>
  <div class="SignInView">
    <div class="Hero">
      <div v-if="signInError === 'METAMASK_LOCKED'"
           class="Container Container--sm Container--center">
        <h2 class="Hero-h2">{{$t('Your MetaMask is locked')}}</h2>
        <p class="Hero-description">{{$t('Simply open MetaMask and follow the instructions to unlock it.')}}</p>
      </div>

      <div v-if="signInError === 'NO_METAMASK'"
           class="Container Container--sm Container--center">
        <h2 class="Hero-h2">{{$t('What’s this meow!?')}}</h2>
        <p class="Hero-description">
          {{$t('You can only play CryptoKitties on a desktop browser like Chrome orFirefox.')}}
        </p>
      </div>

      <div v-if="me"
           class="Container Container--sm Container--center">
        <router-link class="Hero-h2"
                     :to="{
                            name: 'User',
                            params: {address:me.address},
                         }">
          {{$t('Welcome')}} {{me.address}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignInView',
  computed: {
    me() {
      return this.$store.state.me;
    },
    signInError() {
      return this.$store.state.signInError;
    },
  },
};
</script>

<style scoped>

</style>
