  <template>
  <div class="BrowsePage">

    <div class="BrowseFilterBar">
      <div class="Filter">
        <div class="Filter-container">
          <div class="Filter-selectors">
            <select class="Filter-select"
                    v-model="sortOption">
              <option v-for="item in sortOptions"
                      :key="item.label"
                      :value="item">{{ $t(item.label) }}</option>
            </select>
          </div>
          <div class="Filter-sortBy">Sort by</div>
          <div class="Filter-tabs">
            <!-- <span class="Filter-tab Filter-tab--active">For Sale</span> -->
            <router-link v-for="(tab) in filterTabs"
                         :key="tab.type"
                         :to="{
                            params: Object.assign({}, $route.params, {type: tab.type, page: 1}),
                            query: $route.query,
                         }"
                         class="Filter-tab"
                         :class="{'Filter-tab--active': type === tab.type}">
              {{$t(tab.label)}}</router-link>
          </div>
        </div>
      </div>
      <div class="BrowseFilterBar-filterResults">
        <div class="KittiesFilter">
          <div class="KittiesFilter-header">
            <span class="KittiesFilter-header-count">{{ $t('Total') }}: {{total}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="KittiesGallery">
      <div class="Container Container--lg">
        <div class="KittiesGrid">
          <div v-for="(item) in items"
               :key="item.id"
               class="KittiesGrid-item">
            <router-link class="Header-home active"
                         :to="{
                            name: 'Item',
                            params: {id:item.id}
                          }">
              <div class="KittyCard-wrapper">
                <div class="KittyCard u-bg-alt-thundergrey
                            KittyCard--responsive KittyCard--shadow-thundergrey">
                  <img class="KittyCard-image"
                       style="border-radius: var(--size-image);"
                       :src="item.imageUrl">
                  <div class="KittyCard-status">
                    <div v-if='item.auction'
                         class="KittyStatus">
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
                  <span v-if="item.isNew"
                        class="KittyCard-newBadge">
                    <svg class="NewBadge"
                         width="100%"
                         height="100%"
                         viewBox="0 0 38 38">
                      <g fill="none"
                         fill-rule="evenodd">
                        <path d="M37.985 0L0 37.985V0h37.985z"
                              fill="#E96BD4"></path>
                        <text fill="#FFF"
                              font-family="Calibre-Semibold, Calibre"
                              font-size="12"
                              font-weight="500"
                              letter-spacing=".4"
                              transform="rotate(-45 13.581 14.581)">
                          <tspan x="3.081"
                                 y="16.581">{{$t('New')}}</tspan>
                        </text>
                      </g>
                    </svg>
                  </span>
                </div>
                <div class="KittyCard-details">
                  <span class="KittyCard-details-item">{{$t('Rarity')}} {{item.rarity}}</span>
                </div>
                <div class="KittyCard-actions">
                  <span class="KittyCard-actions-action">
                    <span class="PurrBadge"
                          role="button">
                      <span class="PurrBadge-hearts">
                        <span class="PurrBadge-heart">
                          <svg width="22"
                               height="22"
                               viewBox="0 0 22 22">
                            <path fill="none"
                                  fill-rule="evenodd"
                                  stroke="#C4C3C0"
                                  stroke-width="2"
                                  d="M11 8.025C7.787 4.188 5.3 6.838 4.88 7.63c-.765 1.463-.306 3.68.765 4.747l3.918 4.052a2 2 0 0 0 2.876 0l3.917-4.052c1.07-1.068 1.53-3.283.764-4.747-.421-.792-3.06-3.442-6.12.395z"></path>
                          </svg>
                        </span>
                        <span class="PurrBadge-heartFill">
                          <svg width="22"
                               height="22"
                               viewBox="0 0 22 22">
                            <g fill="none"
                               fill-rule="evenodd">
                              <g transform="translate(4 5.546)">
                                <mask id="b"
                                      fill="#fff">
                                  <path d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z"></path>
                                </mask>
                                <path fill="#FFA6D8"
                                      d="M5.636 11.169L1.799 6.763l-.037-.036c-1.66-1.621-1.78-4.133-.244-5.593 1.45-1.38 3.882-1.36 5.59-.015 1.705-1.345 4.139-1.363 5.587.015 1.535 1.46 1.421 3.973-.255 5.601l-.034.036-4.222 4.552c-.081.077-.964.318-1.079.317-.114.001-1.388-.394-1.47-.471z"></path>
                                <path fill="#EA60AE"
                                      fill-rule="nonzero"
                                      d="M6.815 11.566L2.184 7.03C.479 5.28.25 2.554 1.827.978c1.49-1.49 4.823-1.244 4.988.36-1.292-.772-2.878.366-3.364 1.873-.429 1.33 0 3.257 3.189 7.315.316.402.973.334 1.518.128 0 .159-.448.463-1.343.912z"

                                      mask="url(#b)"></path>
                                <path fill="#FFE1F2"
                                      fill-rule="nonzero"
                                      d="M12.992 11.977L8.36 7.442c-1.705-1.75-1.933-4.476-.356-6.052C9.493-.1 12.12-1.081 13.58 1.8 11.7.294 9.561 1.584 9.123 2.968c-.437 1.384-.291 4.035 1.07 5.396.343.343 3.597 2.908 4.141 2.702 0 .159-.447.462-1.342.911z"

                                      mask="url(#b)"
                                      transform="matrix(-1 0 0 1 21.276 0)"></path>
                              </g>
                              <path stroke="#2A2825"
                                    stroke-width="1.5"
                                    d="M9.726 16.567c-1.835-1.557-3.22-2.934-4.155-4.13-1.726-2.208-1.828-4.462-.252-6.038C6.81 4.91 9.765 5.391 11 7.347c1.338-1.904 4.31-2.435 5.796-.948 1.576 1.576 1.436 4.088-.262 6.046-.928 1.071-2.323 2.435-4.185 4.092a2 2 0 0 1-2.623.03z"></path>
                            </g>
                          </svg>
                        </span>
                      </span>
                      <span class="PurrBadge-count">0</span>
                    </span>
                  </span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="KittiesGalleryPagination">
      <div class="Pagination">
        <div class="Pagination-pages">
          <router-link v-for="(paginationPage) in paginationPages"
                       :key="paginationPage"
                       :to="{
                            params: Object.assign({}, $route.params, {page: paginationPage}),
                            query: $route.query,
                         }"
                       class="Pagination-page"
                       :class="{'Pagination-page--active': Number(paginationPage) === page}">
            {{paginationPage}}</router-link>
        </div>
        <div>
          <!-- <button class="Pagination-button Pagination-button--disabled">Previous</button>
          <button class="Pagination-button">Next</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash';
import api from '@/api';

export default {
  name: 'Header',
  props: {
    filterTabs: Array,
  },
  computed: {
    maxPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    paginationPages() {
      let start = this.page - 4;
      start = start < 1 ? 1 : start;
      let end = start + 9;
      end = end > this.maxPage ? this.maxPage : end;
      const pages = [];
      for (let i = start; i <= end; i += 1) {
        pages.push(i);
      }
      return pages;
    },
    sortOptions() {
      return [
        {
          label: 'Price Desc',
          query: {
            orderBy: 'price',
            orderDirection: 'desc',
          },
        },
        {
          label: 'Price Asc',
          query: {
            orderBy: 'price',
            orderDirection: 'asc',
          },
        },
      ];
    },
    sortOption: {
      get() {
        const routeQuery = this.$route.query;
        const foundSortOption = this.sortOptions.find((item) => {
          const isInRouteQuery = Object.entries(item.query).every(
            ([k, v]) => routeQuery[k] === v,
          );
          return isInRouteQuery;
        });
        return foundSortOption || this.sortOptions[0];
      },
      set(targetSortOption) {
        this.$router.push({
          query: targetSortOption.query,
        });
      },
    },
    me() {
      return this.$store.state.me;
    },
    pageSize() {
      return 20;
    },
    page() {
      return Number(this.$route.params.page) || 1;
    },
    type() {
      const type = this.$route.params.type;
      const foundTab = this.filterTabs.find(item => item.type === type);
      return (foundTab || this.filterTabs[0]).type;
    },
  },
  data() {
    return {
      items: [],
      total: 0,
      loading: false,
      error: null,
    };
  },
  methods: {
    async loadItems() {
      const query = Object.assign(
        {
          type: this.$route.params.type,
          offset: this.page * this.pageSize,
          limit: this.pageSize,
          owner: this.$route.params.address,
        },
        this.sortOption.query,
      );
      this.loading = true;
      const { items, total } = await api.queryItems(query);
      this.loading = false;
      this.items = items;
      this.total = total;
    },
  },
  created() {
    this.loadItems();
  },
  watch: {
    $route: debounce(function fn() {
      this.loadItems('update');
    }, 200),
  },
};
</script>

<style scoped>

</style>
