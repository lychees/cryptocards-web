<template>
  <BrowseItems :filterTabs=marketList />
</template>

<script>
import BrowseItems from '@/components/BrowseItems';

export default {
  name: 'MarketView',
  components: {
    BrowseItems,
  },
  computed: {
    marketList() {
      return [
        {
          label: 'Card Market',
          type: 'Card',
        },
        {
          label: 'CardPack Market',
          type: 'CardPack',
        },
      ];
    },
  },
};
</script>

<style scoped>

</style>
