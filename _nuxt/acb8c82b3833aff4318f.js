(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{178:function(t,a,n){var i=n(180);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(23).default)("024851a8",i,!0,{})},179:function(t,a,n){"use strict";var i=n(178);n.n(i).a},180:function(t,a,n){(t.exports=n(22)(!1)).push([t.i,"\n.surah__header[data-v-6ec648d0] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.surah__title[data-v-6ec648d0] {\n  font-size: 2rem;\n  width: 100%;\n  float: right;\n  text-align: right;\n}\n.surah__title--latin[data-v-6ec648d0] {\n    width: 100%;\n    font-size: 1.5rem;\n}\n.surah__trans[data-v-6ec648d0] {\n  text-align: right;\n  font-style: italic;\n  line-height: 2;\n}\n.surah__count[data-v-6ec648d0] {\n  text-align: right;\n}\n",""])},181:function(t,a,n){"use strict";n(24);var i=n(8),e=n.n(i),s=(n(1),n(2),n(3),n(9)),r={name:"SurahCard",props:{surahArray:{type:Array,default:function(){return[]}}},computed:e()({},Object(s.d)(["surahFavorite"])),methods:e()({},Object(s.b)(["addToFavorite","removeFromFavorite","showNotification"]),{doAddToFavorite:function(t){this.addToFavorite(t),this.showNotification({title:"Pesan Sukses",message:"Surat berhasil ditambahkan ke daftar favorit."})},doremoveFromfavorite:function(t){this.removeFromFavorite(t),this.showNotification({title:"Pesan Sukses",message:"Surat berhasil dihapus dari daftar favorit."})},findInFavorite:function(t){return(this.surahFavorite||[]).find(function(a){return a.index===t.index})},getSurahDetailUrl:function(t){return"/".concat(t)},goToSurahDetail:function(t){var a=this.getSurahDetailUrl(t);this.$router.push(a)}})},o=(n(179),n(11)),l=Object(o.a)(r,function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"surah__root"},t._l(t.surahArray,function(a){return n("a",{key:a.index,staticClass:"surah block_content has-shadow",on:{click:function(n){n.preventDefault(),t.goToSurahDetail(a.index)}}},[n("div",{staticClass:"surah__header"},[n("div",{staticClass:"surah__index tag_index"},[t._v("\n        "+t._s(a.index)+"\n      ")]),t._v(" "),n("div",{staticClass:"surah__header--right"},[t.findInFavorite(a)?t._e():n("svg",{attrs:{viewBox:"0 0 512 512",width:"30px",height:"30px"},on:{click:function(n){n.preventDefault(),t.doAddToFavorite(a)}}},[n("path",{attrs:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16zm-127.2 92.5c-10 7.2-14.2 20.2-10.2 31.8l30.1 87.7c1.3 3.7-2.9 6.8-6.1 4.6l-77.4-55.2c-4.9-3.5-10.6-5.2-16.3-5.2-5.7 0-11.4 1.7-16.2 5.2l-77.4 55.1c-3.2 2.3-7.4-.9-6.1-4.6l30.1-87.7c4-11.8-.2-24.8-10.3-32l-81-57.1c-3.2-2.2-1.6-7.3 2.3-7.3H196c12 0 22.7-7.7 26.5-19.1l29.6-88.2c1.2-3.6 6.4-3.6 7.6 0l29.6 88.2c3.8 11.4 14.5 19.1 26.5 19.1h97.3c3.9 0 5.5 5 2.3 7.2l-79.6 57.5z"}})]),t._v(" "),t.findInFavorite(a)?n("svg",{attrs:{viewBox:"0 0 512 512",width:"30px",height:"30px",fill:"#f5aa1e"},on:{click:function(n){n.preventDefault(),t.doremoveFromfavorite(a)}}},[n("path",{attrs:{d:"M463 192H315.9L271.2 58.6C269 52.1 262.9 48 256 48s-13 4.1-15.2 10.6L196.1 192H48c-8.8 0-16 7.2-16 16 0 .9.1 1.9.3 2.7.2 3.5 1.8 7.4 6.7 11.3l120.9 85.2-46.4 134.9c-2.3 6.5 0 13.8 5.5 18 2.9 2.1 5.6 3.9 9 3.9 3.3 0 7.2-1.7 10-3.6l118-84.1 118 84.1c2.8 2 6.7 3.6 10 3.6 3.4 0 6.1-1.7 8.9-3.9 5.6-4.2 7.8-11.4 5.5-18L352 307.2l119.9-86 2.9-2.5c2.6-2.8 5.2-6.6 5.2-10.7 0-8.8-8.2-16-17-16z"}})]):t._e()])]),t._v(" "),n("div",{staticClass:"divider clearfix"},[n("div",{staticClass:"surah__title font-arabic",attrs:{dir:"rtl"}},[t._v("\n        "+t._s(a.arabic)+"\n      ")])]),t._v(" "),n("div",{staticClass:"divider clearfix"},[n("div",{staticClass:"surah__title surah__title--latin"},[t._v("\n        "+t._s(a.latin)+"\n      ")])]),t._v(" "),n("div",{staticClass:"divider clearfix"},[n("div",{staticClass:"surah__trans"},[t._v("\n        ("+t._s(a.translation)+": "+t._s(a.ayah_count)+" Ayat)\n      ")])])])}))},[],!1,null,"6ec648d0",null);l.options.__file="SurahCard.vue";a.a=l.exports},191:function(t,a,n){var i=n(215);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(23).default)("bc6fe790",i,!0,{})},214:function(t,a,n){"use strict";var i=n(191);n.n(i).a},215:function(t,a,n){(t.exports=n(22)(!1)).push([t.i,"\n.feed[data-v-f5ab0d1e] {\n  display: block;\n  width: 90%;\n  margin: 1em auto;\n  padding-bottom: 1em;\n  border-bottom: 1px solid #ccc;\n}\n.feed__title[data-v-f5ab0d1e] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    font-size: 1.5rem;\n}\n.feed__title svg[data-v-f5ab0d1e] {\n      margin-right: .2em;\n}\n.feed__empty[data-v-f5ab0d1e] {\n    text-align: left;\n    padding-top: 1em;\n    color: #333;\n    font-style: italic;\n}\n",""])},241:function(t,a,n){"use strict";n.r(a);var i=n(8),e=n.n(i),s=(n(1),n(2),n(3),n(85)),r=n.n(s),o=n(9),l=n(181),c=n(29),d={data:[{translation:"Yusuf",arabic:"يوسف",latin:"Yusuf",ayah_count:111,index:12},{translation:"Goa",arabic:"الكهف",latin:"Al-Kahf",ayah_count:110,index:18},{translation:"Yasin",arabic:"يٰسۤ",latin:"Yasin",ayah_count:83,index:36},{translation:"Maha Pengasih",arabic:"الرحمن",latin:"Ar-Rahman",ayah_count:78,index:55},{translation:"Hari Kiamat",arabic:"الواقعة",latin:"Al-Waqi'ah",ayah_count:96,index:56},{translation:"Jumat",arabic:"الجمعة",latin:"Al-Jumu'ah",ayah_count:11,index:62},{translation:"Kerajaan",arabic:"الملك",latin:"Al-Mulk",ayah_count:30,index:67}]},u={name:"RecommendationPage",head:function(){return{title:"Surat Rekomendasi | Qur'an Offline"}},components:{IosNavigateIcon:r.a,SurahCard:l.a},data:function(){return{surahRecommendation:d.data}},mounted:function(){this.setHeaderTitle(c.a.RECOMMENDATION)},methods:e()({},Object(o.c)(["setHeaderTitle"]))},h=(n(214),n(11)),f=Object(h.a)(u,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"feed clearfix"},[a("div",{staticClass:"feed__title"},[a("IosNavigateIcon",{attrs:{w:"1em",h:"1em"}}),this._v("\n      Surat rekomendasi:\n    ")],1),this._v(" "),a("div",{staticClass:"feed__item clearfix"},[a("SurahCard",{attrs:{"surah-array":this.surahRecommendation}})],1)])])},[],!1,null,"f5ab0d1e",null);f.options.__file="recommendation.vue";a.default=f.exports}}]);