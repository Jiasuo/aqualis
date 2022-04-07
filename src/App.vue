<template>
    <!-- Top bg -->
    <div class="topBg"></div>
    <Top />
  <router-view></router-view>
</template>

<script>
// Components
import Top from "./components/Top.vue"

export default {
  name: 'App',
  components: {
    Top
  }
}
</script>

<style>
.topBg{
    height: clamp(66.5px, 6.93vw, 133px);
    background: linear-gradient(180deg, #208CEB 0%, #014972 100%);
}
</style>
