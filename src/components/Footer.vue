<template>
  <footer>
    <!-- INFOS -->
    <div class="infos">
      <div class="logoContainer">
        <img src="../assets/img/logotype.svg" alt="logo Aqualis" class="logo" />
      </div>
      <p class="address">30 avenue Général Leclerc, 38200 Vienne</p>
      <p class="phone">Téléphone : 01 23 45 67 89</p>
      <p class="copyright">aqualis.fr © 2022 - Tous droits réservés</p>
    </div>
    <!-- WEATHER -->
    <div class="weather">
      <h3>Météo actuelle</h3>
      <div class="container">
        <h5 class="weatherText">Belle journée</h5>
        <div class="infos">
          <div class="weatherPic">
            <span class="icon sun"></span>
            Ensoleillé
          </div>
          <div class="temperature">
            <span class="icon temp"></span>
            28° C
          </div>
          <div class="wind">
            <span class="icon wave"></span>
            15km/h
          </div>
        </div>
      </div>
    </div>
    <!-- RIGHT BLOC -->
    <div class="right">
      <!-- SOCIAL MEDIA -->
      <div class="social">
        <h3>Rejoignez-nous</h3>
        <div class="icons">
          <div class="fb"></div>
          <div class="insta"></div>
          <div class="snap"></div>
          <div class="tiktok"></div>
        </div>
      </div>
      <!-- NAVIGATIONS -->
      <div class="navigation">
        <h3>Site</h3>
        <ul class="nav">
          <li class="navItem">
            <router-link :to="{ name: 'Home' }" class="navLink">Billetterie</router-link>
          </li>
          <li class="navItem">
            <router-link :to="{ name: 'Home' }" class="navLink">Activités</router-link>
          </li>
          <li class="navItem">
            <router-link :to="{ name: 'Home' }" class="navLink">A propos</router-link>
          </li>
          <li class="navItem">
            <router-link :to="{ name: 'Home' }" class="navLink">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
footer {
  height: clamp(205.84px, 21.44vw, 411.68px);
  padding: clamp(57.5px, 5.99vw, 115px) clamp(75px, 7.81vw, 150px)
    clamp(9.6px, 1vw, 19.2px) clamp(75px, 7.81vw, 150px);
    background-color: #1e57a3;
  background-image: url("../assets/img/footer_bg.svg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
}
h3 {
  text-align: center;
  font-size: clamp(24px, 1.67vw, 32px);
}
/* #region Infos */
.infos {
  color: white;
}
.infos p {
  margin-top: clamp(7.5px, 0.78vw, 15px);
  font-size: clamp(12px, 1.25vw, 24px);
  letter-spacing: normal;
}
p.phone {
  margin-top: clamp(2.5px, 0.26vw, 5px);
}
p.copyright {
  font-size: clamp(7.5px, 0.78vw, 15px);
}
.logo {
  width: 10.73vw;
  height: 4.49vw;
}
/* #endregion */

/* #region weather */
.weather {
  position: absolute;
  top: clamp(57.5px, 5.99vw, 115px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.weather .container {
  margin-top: clamp(45px, 4.69vw, 90px);
}
.weatherText {
  font-size: clamp(12px, 1.25vw, 24px);
  color: var(--orange);
}
.weather .infos {
  margin-top: clamp(20px, 2.08vw, 40px);
  width: clamp(151.5px, 15.78vw, 303px);
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: clamp(10px, 0.94vw, 18px);
}
.weather .infos > div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.weather .icon {
  margin-bottom: clamp(5px, 0.52vw, 10px);
  width: clamp(25px, 2.6vw, 50px);
  height: clamp(25px, 2.6vw, 50px);
  background-size: cover;
}
.icon.sun {
  background-image: url("../assets/img/sun.svg");
}
.icon.temp {
  background-image: url("../assets/img/temperature.svg");
}
.icon.wave {
  background-image: url("../assets/img/wave.svg");
}
/* #endregion */

.right {
  height: 100%;
  display: flex;
}

/* #region Social */
.social{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.social .icons{
    margin-top: 2.08vw;
    display: grid;
    grid-template-columns: repeat(2, 5vw);
    grid-template-rows: repeat(2, 5vw);
    gap: 0.63vw;
}
.fb{
    background-image: url("../assets/img/fb.svg");
    background-size: cover;
}
.insta{
    background-image: url("../assets/img/insta.svg");
    background-size: cover;
}
.snap{
    background-image: url("../assets/img/snap.svg");
    background-size: cover;
}
.tiktok{
    background-image: url("../assets/img/tiktok.svg");
    background-size: cover;
}
/* #endregion */


/* #region navigation */
.navigation{
    margin-left: 3vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.nav{
    margin-top: 2.5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.navItem:not(:first-child){
    margin-top: 1.04vw;
}
.navLink{
    text-decoration: none;
    color: white;
    font-size: clamp(12px, 1.25vw, 24px);
}
/* #endregion */
</style>