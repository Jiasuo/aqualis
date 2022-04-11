<template>
    <!-- Top bg -->
    <div class="topBg"></div>
    <Top />
  <router-view></router-view>
    <Footer/>
</template>

<script>
// Components
import Top from "./components/Top.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  components: {
    Top,
    Footer,
  }
}
</script>

<style>
.topBg{
    height: clamp(45px, 4.69vw, 90px);
    background: linear-gradient(180deg, #208CEB 0%, #014972 100%);
}
section{
  padding: 7.81vw 15.63vw;
}
</style>
