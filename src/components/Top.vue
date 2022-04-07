<template>
  <div class="container">
      <ul class="nav left">
          <li class="navItem"><router-link to="/">Accueil</router-link></li>
          <li class="navItem"><router-link to="/">Attractions</router-link></li>
          <li class="navItem"><router-link to="/">Téléchargements</router-link></li>
      </ul>
      <div class="logoContainer">
          <img src="../assets/img/logo.svg" alt="Logo Aqualis">
      </div>
      <ul class="nav right">
          <li class="navItem"><router-link to="/">Services</router-link></li>
          <li class="navItem"><router-link to="/">Contact</router-link></li>
          <li class="navItem"><router-link to="/" class="button tickets">Billetterie</router-link></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "Top",
};
</script>

<style scoped>
.container {
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  max-width: 100%;
  height: clamp(66.5px, 6.93vw, 133px);
  padding: 0 7.81vw;
  display: grid;
  grid-template-columns: 1fr clamp(45px, 4.69vw, 90px) 1fr;
  gap: clamp(100px, 10.42vw, 200px);
  background-image: linear-gradient(
    90.27deg,
    rgba(255, 255, 255, 0.49) 0%,
    rgba(255, 255, 255, 0.07) 100%
  );
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  font-family: 'Luckiest Guy', cursive;
  color: white;
}
.logoContainer{
    display: flex;
    align-items: center;
    justify-content: center;
}
.logoContainer img{
    width: clamp(45px, 4.69vw, 90px);
    height: clamp(43.86px, 4.57vw, 87.72px);
}
a{
    color: white;
    text-decoration: none;
    font-size: clamp(12px, 1.04vw, 20px);
}
.nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navItem .tickets{
    /* width: clamp(90px, 9.38vw, 180px);
    height: clamp(23px, 2.4vw, 46px); */
    background: linear-gradient(196.64deg, #EB6B20 11.5%, #AF5017 89.27%);
}
</style>