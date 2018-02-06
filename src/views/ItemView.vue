<template>
  <div v-if="item"
       class="KittyPage">
    <div class="KittyBanner u-bg-alt-thundergrey">
      <div class="Container Container--full">
        <div class="KittyBanner-container KittyBanner-container--shadow-thundergrey">
          <img class="KittyBanner-image"
               style="z-index:1"
               :src="item.imageUrl"
               :alt='$t(item.type)+" #" +item.id'>
          <div v-if='item.auction'
               class="KittyBanner-status">
            <div class="KittyStatus KittyStatus--list">
              <div class="KittyStatus-item">
                <span class="KittyStatus-itemIcon">
                  <i class="Icon Icon--tag"></i>
                </span>
                <span class="KittyStatus-itemText">
                  <span class="KittyStatus-label">{{$t('For sale')}}</span>
                  <span class="KittyStatus-note">
                    <small>Ξ</small>
                    {{item.auction.currentPrice}}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="KittyPage-content">
      <div class="KittyProfile">
        <div class="Container Container--sm">
          <div class="KittySection">
            <div class="KittySection-content">
              <div class="KittyHeader">
                <div class="KittyHeader-main">
                  <div class="KittyHeader-name">
                    <h1 class="KittyHeader-name-text">
                      {{$t(item.type)}}
                    </h1>
                  </div>
                  <div class="KittyHeader-details">
                    <span>{{$t('Id')}} {{item.id}}</span>
                    <br/>
                    <span>{{$t('Rarity')}} {{item.rarity}}</span>
                    <br/>
                    <span>{{$t('Create at')}} {{ $d(new Date(item.createAt)) }}</span>
                  </div>
                </div>
                <router-link class="KittyHeader-owner"
                             :to="{ name: 'User', params:{address: item.owner.address}}">
                  <div class="KittyHeader-owner-image">
                    <img :src="item.owner.imageUrl">
                  </div>
                  <span class="KittyHeader-owner-details">
                    <div class="KittyHeader-owner-name">
                      {{item.owner.nickname}}
                    </div>
                    <span>{{$t('Owner')}}</span>
                  </span>
                </router-link>
              </div>
            </div>
          </div>
          <div v-if="item.auction"
               class="KittySection">
            <div class="KittySection-content">
              <div class="KittyBid KittyBid--sale">
                <div class="KittyBid-boxes">
                  <div class="KittyBid-box">
                    <h3 class="KittyBid-box-title">{{$t('Buy now price')}}</h3>
                    <span class="KittyBid-box-subtitle">
                      <em>Ξ</em>
                      {{item.auction.currentPrice}}
                    </span>
                  </div>
                  <div class="KittyBid-box KittyBid-box--secondary">
                    <h3 class="KittyBid-box-title">Time left</h3>
                    <span class="KittyBid-box-subtitle">
                      <!-- react-text: 2299 -->23
                      <!-- react-text: 2301 -->hours
                    </span>
                  </div>
                </div>
                <div class="KittyBid-action">
                  <router-link v-if="!$store.state.me"
                               class="Button Button--larger Button--buy"
                               :to="{ name: 'SignIn'}">{{ $t("Sign in to buy!") }}</router-link>
                  <a v-if="$store.state.me && item.owner.address !== $store.state.me.address"
                     class="Button Button--larger Button--buy"
                     @click="onBuy">{{ $t("Buy!") }}</a>
                </div>
              </div>
            </div>
          </div>
          <div class="KittySection">
            <h2 class="KittySection-heading">{{$t('Bio')}}</h2>
            <div class="KittySection-content">
              <div class="KittyDescription">
                <p>{{item.bio}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api';

export default {
  name: 'ItemView',
  data() {
    return {
      item: null,
    };
  },
  methods: {
    async loadItem() {
      this.item = await api.getItem(this.$route.params.id);
    },
    onBuy() {
      alert('TODO: Buy');
    },
  },
  created() {
    this.loadItem();
  },
};
</script>

<style scoped>

</style>
