<template>
  <div>
    <TheNav />
    <router-view 
          :key="$route.path"
          v-show="showPage" @ready="pageReady"/>
    <div v-show="!showPage">
      <AppSpinner />
    </div>
  </div>
</template>

<script>
import TheNav from '@/components/TheNav'
import AppSpinner from '@/components/AppSpinner'
import NProgress from 'nprogress'

export default {
  name: 'App',
  components: {
    TheNav,
    AppSpinner
  },
  data () {
    return {
      showPage: false
    }
  },
  methods: {
      pageReady () {
        this.showPage = true
        NProgress.done()
      }
    },
  created () { 
    NProgress.configure({
      speed: 200,
      showSpinner: false
    })
    NProgress.start()
    this.$router.beforeEach((to, from, next)=>{ //for showing loading indicators in individual pages
      this.showPage = false
      NProgress.start()
      next()
    })
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
