<template>
  <div class="ProfilePage">
    <div class="Container Container--lg">
      <div class="ProfileHeader">
        <div v-if="user"
             class="ProfileHeader-details"><img class="ProfileHeader-image"
               :src="user.imageUrl">
          <div class="ProfileHeader-info">
            <h1 class="ProfileHeader-title">{{user.nickname}}</h1>
            <div class="ProfileHeader-wallet">
              {{$t('Address')}}
              <span style="font-size:0.9em">{{user.address}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BrowseItems :filterTabs=tabList />
  </div>
</template>

<script>
import BrowseItems from '@/components/BrowseItems';
import api from '@/api';

export default {
  name: 'UserView',
  components: {
    BrowseItems,
  },
  computed: {
    isMe() {
      const me = this.$store.state.me || {};
      return me.address === this.$route.params.address;
    },
    tabList() {
      return [
        {
          label: this.isMe ? 'My Cards' : 'His Cards',
          type: 'Card',
        },
        {
          label: this.isMe ? 'My CardPacks' : 'His CardPacks',
          type: 'CardPack',
        },
      ];
    },
  },
  data() {
    return {
      user: null,
    };
  },
  methods: {
    async loadUser() {
      this.user = await api.getUser(this.$route.params.address);
    },
  },
  created() {
    this.loadUser();
  },
};
</script>

<style scoped>

</style>
