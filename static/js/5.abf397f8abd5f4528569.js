webpackJsonp([5],{"8PtV":function(t,s){},Xofs:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("Xxa5"),e=i.n(a),n=i("exGp"),r=i.n(n),c=i("gyMJ"),o={name:"ItemView",data:function(){return{item:null}},methods:{loadItem:function(){var t=this;return r()(e.a.mark(function s(){return e.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,c.a.getItem(t.$route.params.id);case 2:t.item=s.sent;case 3:case"end":return s.stop()}},s,t)}))()},onBuy:function(){alert("TODO: Buy")}},created:function(){this.loadItem()}},l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.item?i("div",{staticClass:"KittyPage"},[i("div",{staticClass:"KittyBanner u-bg-alt-thundergrey"},[i("div",{staticClass:"Container Container--full"},[i("div",{staticClass:"KittyBanner-container KittyBanner-container--shadow-thundergrey"},[i("img",{staticClass:"KittyBanner-image",staticStyle:{"z-index":"1"},attrs:{src:t.item.imageUrl,alt:t.$t(t.item.type)+" #"+t.item.id}}),t._v(" "),t.item.auction?i("div",{staticClass:"KittyBanner-status"},[i("div",{staticClass:"KittyStatus KittyStatus--list"},[i("div",{staticClass:"KittyStatus-item"},[t._m(0),t._v(" "),i("span",{staticClass:"KittyStatus-itemText"},[i("span",{staticClass:"KittyStatus-label"},[t._v(t._s(t.$t("For sale")))]),t._v(" "),i("span",{staticClass:"KittyStatus-note"},[i("small",[t._v("Ξ")]),t._v("\n                  "+t._s(t.item.auction.currentPrice)+"\n                ")])])])])]):t._e()])])]),t._v(" "),i("div",{staticClass:"KittyPage-content"},[i("div",{staticClass:"KittyProfile"},[i("div",{staticClass:"Container Container--sm"},[i("div",{staticClass:"KittySection"},[i("div",{staticClass:"KittySection-content"},[i("div",{staticClass:"KittyHeader"},[i("div",{staticClass:"KittyHeader-main"},[i("div",{staticClass:"KittyHeader-name"},[i("h1",{staticClass:"KittyHeader-name-text"},[t._v("\n                    "+t._s(t.$t(t.item.type))+"\n                  ")])]),t._v(" "),i("div",{staticClass:"KittyHeader-details"},[i("span",[t._v(t._s(t.$t("Id"))+" "+t._s(t.item.id))]),t._v(" "),i("br"),t._v(" "),i("span",[t._v(t._s(t.$t("Rarity"))+" "+t._s(t.item.rarity))]),t._v(" "),i("br"),t._v(" "),i("span",[t._v(t._s(t.$t("Create at"))+" "+t._s(t.$d(new Date(t.item.createAt))))])])]),t._v(" "),i("router-link",{staticClass:"KittyHeader-owner",attrs:{to:{name:"User",params:{address:t.item.owner.address}}}},[i("div",{staticClass:"KittyHeader-owner-image"},[i("img",{attrs:{src:t.item.owner.imageUrl}})]),t._v(" "),i("span",{staticClass:"KittyHeader-owner-details"},[i("div",{staticClass:"KittyHeader-owner-name"},[t._v("\n                    "+t._s(t.item.owner.nickname)+"\n                  ")]),t._v(" "),i("span",[t._v(t._s(t.$t("Owner")))])])])],1)])]),t._v(" "),t.item.auction?i("div",{staticClass:"KittySection"},[i("div",{staticClass:"KittySection-content"},[i("div",{staticClass:"KittyBid KittyBid--sale"},[i("div",{staticClass:"KittyBid-boxes"},[i("div",{staticClass:"KittyBid-box"},[i("h3",{staticClass:"KittyBid-box-title"},[t._v(t._s(t.$t("Buy now price")))]),t._v(" "),i("span",{staticClass:"KittyBid-box-subtitle"},[i("em",[t._v("Ξ")]),t._v("\n                    "+t._s(t.item.auction.currentPrice)+"\n                  ")])]),t._v(" "),t._m(1)]),t._v(" "),i("div",{staticClass:"KittyBid-action"},[t.$store.state.me?t._e():i("router-link",{staticClass:"Button Button--larger Button--buy",attrs:{to:{name:"SignIn"}}},[t._v(t._s(t.$t("Sign in to buy!")))]),t._v(" "),t.$store.state.me&&t.item.owner.address!==t.$store.state.me.address?i("a",{staticClass:"Button Button--larger Button--buy",on:{click:t.onBuy}},[t._v(t._s(t.$t("Buy!")))]):t._e()],1)])])]):t._e(),t._v(" "),i("div",{staticClass:"KittySection"},[i("h2",{staticClass:"KittySection-heading"},[t._v(t._s(t.$t("Bio")))]),t._v(" "),i("div",{staticClass:"KittySection-content"},[i("div",{staticClass:"KittyDescription"},[i("p",[t._v(t._s(t.item.bio)+"\n              ")])])])])])])])]):t._e()},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"KittyStatus-itemIcon"},[s("i",{staticClass:"Icon Icon--tag"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"KittyBid-box KittyBid-box--secondary"},[s("h3",{staticClass:"KittyBid-box-title"},[this._v("Time left")]),this._v(" "),s("span",{staticClass:"KittyBid-box-subtitle"},[this._v("23\n                    "),this._v("hours\n                  ")])])}]};var d=i("VU/8")(o,l,!1,function(t){i("8PtV")},"data-v-7b9e3428",null);s.default=d.exports}});
//# sourceMappingURL=5.abf397f8abd5f4528569.js.map