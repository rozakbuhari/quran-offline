(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{185:function(t,e,n){var content=n(207);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("2eab8a82",content,!0,{sourceMap:!1})},186:function(t,e,n){var content=n(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("834528f6",content,!0,{sourceMap:!1})},206:function(t,e,n){"use strict";var r=n(185);n.n(r).a},207:function(t,e,n){(t.exports=n(22)(!1)).push([t.i,".surah__header[data-v-504af8db] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.surah__title[data-v-504af8db] {\n  font-size: 2rem;\n  width: 100%;\n  float: right;\n  text-align: right;\n}\n.surah__title--latin[data-v-504af8db] {\n    width: 100%;\n    font-size: 1.5rem;\n}\n.surah__trans[data-v-504af8db] {\n  text-align: right;\n  font-style: italic;\n  line-height: 2;\n}\n.surah__count[data-v-504af8db] {\n  text-align: right;\n}\n",""])},208:function(t,e,n){"use strict";var r=n(186);n.n(r).a},209:function(t,e,n){(t.exports=n(22)(!1)).push([t.i,".feed[data-v-66f83a2e] {\n  display: block;\n  width: 90%;\n  margin: 1em auto;\n  padding-bottom: 1em;\n  border-bottom: 1px solid #ccc;\n}\n.feed__title[data-v-66f83a2e] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    font-size: 1.5rem;\n}\n.feed__title svg[data-v-66f83a2e] {\n      margin-right: .2em;\n}\n.feed__empty[data-v-66f83a2e] {\n    text-align: left;\n    padding-top: 1em;\n    color: #333;\n    font-style: italic;\n}\n",""])},236:function(t,e,n){"use strict";n.r(e);n(31),n(26);var r=n(5),l=(n(1),n(2),n(3),n(84)),c=n.n(l),o=n(10),d={name:"LastReadCard",props:{surah:{type:Object,default:function(){return{}}}},computed:{},methods:{getSurahDetailUrl:function(t,e){return"/".concat(t,"#verse-").concat(e)},goToSurahDetail:function(t,e){var path=this.getSurahDetailUrl(t,e);this.$router.push(path)}}},h=(n(206),n(12)),f=Object(h.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"surah__root"},[n("a",{staticClass:"surah block_content has-shadow",on:{click:function(e){e.preventDefault(),t.goToSurahDetail(t.surah.index,t.surah.verse)}}},[n("div",{staticClass:"surah__header"},[n("div",{staticClass:"surah__header--left"},[n("div",{staticClass:"surah__index tag_index",staticStyle:{width:"130px"}},[t._v("\n          "+t._s(t.$t("numberOfVerse"))+" "+t._s(t.surah.verse)+"\n        ")])]),t._v(" "),n("div",{staticClass:"surah__header--right"},[n("div",{staticClass:"divider clearfix"},[n("div",{staticClass:"surah__title"},[t._v("\n            "+t._s(t.surah.arabic)+"\n          ")])]),t._v(" "),n("div",{staticClass:"divider clearfix"},[n("div",{staticClass:"surah__title surah__title--latin"},[t._v("\n            "+t._s(t.surah.latin)+"\n          ")])])])])])])},[],!1,null,"504af8db",null).exports,v=n(27),_=n(11),m={name:"LastVersePage",head:function(){return this.metaHead},components:{IosBookmarkIcon:c.a,LastReadCard:f},computed:Object(r.a)({},Object(o.d)(["settingActiveTheme","allSurahList","lastReadVerse"]),{metaHead:function(){var title=this.$t("pageTitle.lastRead");return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor}]}},isHaveLastRead:function(){return Object(_.c)(this.lastReadVerse&&this.lastReadVerse.surah)},lastReadVerseData:function(){var t=this;if(this.isHaveLastRead){var e=this.allSurahList.find(function(e){return e.index===t.lastReadVerse.surah});return Object.assign({},e,{verse:this.lastReadVerse.verse})}return null}}),mounted:function(){this.setHeaderTitle(v.a.LAST_READ),this.fetchSurahInfo()},methods:Object(r.a)({},Object(o.c)(["setHeaderTitle"]),Object(o.b)(["fetchAllSurah"]),{fetchSurahInfo:function(){this.fetchAllSurah({success:function(){}})}})},x=(n(208),Object(h.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"feed clearfix"},[e("div",{staticClass:"feed__title"},[e("IosBookmarkIcon",{attrs:{w:"1em",h:"1em"}}),this._v("\n      Ayat terakhir dibaca:\n    ")],1),this._v(" "),e("div",{staticClass:"feed__item clearfix"},[this.isHaveLastRead?e("div",[e("LastReadCard",{attrs:{surah:this.lastReadVerseData}})],1):e("div",{staticClass:"feed__empty"},[this._v("\n        Anda belum pernah menandai salah satu ayat sebagai terakhir dibaca.\n      ")])])])])},[],!1,null,"66f83a2e",null));e.default=x.exports}}]);