<template>
  <div
    :class="`${settingActiveTheme.name} ${webpClass}`"
    class="quran-offline app js">
    <div
      v-show="isShowSidebar"
      class="sidebar-cover"
      @click="hideSidebar" />
    <BaseSidebar :class="{'sidebar--open': isShowSidebar}" />
    <BaseHeader />
    <nuxt class="app__content" />
    <BaseToast />
    <div
      v-show="showArrowToTop"
      class="arrowtotop">
      <a href="#header">
        <ArrowUpIcon
          w="3em"
          h="3em" />
      </a>
    </div>
  </div>
</template>

<script>
// polyfill
import 'unfetch/polyfill'

import { mapState, mapMutations, mapActions } from 'vuex'

import ArrowUpIcon from 'vue-ionicons/dist/js/ios-arrow-dropup-circle'

import BaseHeader from '../components/BaseHeader.vue'
import BaseSidebar from '../components/BaseSidebar.vue'
import BaseToast from '../components/BaseToast.vue'

import { isSupportWebp } from '../utils/webp.js'

require('vue-ionicons/ionicons.css')

export default {
  name: 'DefaultLayout',
  components: {
    BaseHeader,
    BaseSidebar,
    BaseToast,
    ArrowUpIcon
  },
  data () {
    return {
      showArrowToTop: false,
      webpClass: 'no-webp'
    }
  },
  computed: {
    ...mapState([
      'settingActiveTheme',
      'isShowSidebar'
    ])
  },
  mounted () {
    this.initDataFromBrowserStorage()
    window.addEventListener('scroll', this.handleScroll)
    if (window.navigator.share) {
      this.setWebshareSupport(true)
    }
    let clasz = 'no-webp'
    if (isSupportWebp()) clasz = 'webp'
    this.webpClass = clasz
  },
  beforedestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapMutations([
      'setShowSidebar'
    ]),
    ...mapActions([
      'initDataFromBrowserStorage',
      'setWebshareSupport'
    ]),
    hideSidebar () {
      this.setShowSidebar(false)
    },
    handleScroll () {
      this.showArrowToTop = (window.pageYOffset > 2000)
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/main.scss';
  @import '@/assets/themes.scss';
  .sidebar-cover{
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top:0px; right: 0px; bottom: 0px; left: 0px;
    height: 100%;
    z-index: 19;
  }
  .arrowtotop{
    position: fixed;
    bottom: 90px;
    right: 10px;
  }
  .app__content{
    min-height: 100vh;
  }
</style>
