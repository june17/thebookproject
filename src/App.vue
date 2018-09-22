<template>
  <div>
    <TheNav />
    <router-view :key="$route.path"/>
  </div>
</template>

<script>
import TheNav from '@/components/TheNav'

export default {
  name: 'App',
  components: {
    TheNav
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
