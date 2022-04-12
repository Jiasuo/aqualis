<template>
  <!-- HEADER -->
  <header>
    <h1>Naga</h1>
    <div class="card">
      <h2>Des Sensations</h2>
      <p>
        Viens découvrir le meilleur parc aquatique de France. Un grand nombre
        d’attractions promet du fun aquatique pour toute la famille!
      </p>
    </div>
    <div class="img_mask"></div>
  </header>
  <section class="description">
      <div class="card">
          <h3>Les rapides</h3>
          <div class="left">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At et posuere volutpat in consectetur amet. Viverra commodo vestibulum aliquam consectetur sed vel vitae scelerisque. </p>
          <div class="button">Réserver</div>
          </div>
          <div class="right">
              <div class="indicator">
                  <div class="icon"></div>
                  <div class="text">Sensations fortes</div>
              </div>
              <div class="indicator">
                  <div class="icon minHeight"></div>
                  <div class="text">Accessible à partir<br>de 1m</div>
              </div>
          </div>
      </div>
  </section>
  <section class="similarAttractionsContainer">
      <h2>Attractions similaires</h2>
      <div class="similarAttractions">
          <Attraction />
          <Attraction />
          <Attraction />
      </div>
  </section>
</template>

<script setup>
import Attraction from "../components/Attraction.vue"
</script>

<style scoped>
/* #region Header */
header {
  height: 49.32vw;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/detail_bg.jpg");
  background-size: cover;
  background-position: center;
  filter: brightness(0.777);
  z-index: -1;
}
.img_mask {
  width: 100%;
  height: 16.23vw;
  position: absolute;
  bottom: -0.2vw;
  background-image: url("../assets/img/header_maskW.svg");
  background-size: cover;
}
h1 {
  margin-top: -2.5vw;
  font-size: clamp(36px, 3.75vw, 72px);
}
header .card {
  margin-top: 2.5vw;
  width: clamp(377.5px, 39.32vw, 755px);
  height: clamp(156px, 16.25vw, 312px);
  padding: 2.34vw 3.91vw;
  border-radius: clamp(15px, 1.56vw, 30px);
  background: linear-gradient(
    99.69deg,
    rgba(255, 255, 255, 0.49) 0%,
    rgba(255, 255, 255, 0.07) 100%
  );
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 10;
}
.card h2 {
  font-size: clamp(18px, 1.88vw, 36px);
  font-family: var(--title);
  letter-spacing: 0.1em;
}
.card p {
  margin-top: 1.04vw;
  font-size: clamp(12px, 1.04vw, 20px);
  line-height: clamp(18px, 1.56vw, 30px);
}
header .card .cta {
  margin-top: 1.5vw;
  background-image: linear-gradient(196.64deg, #eb6b20 11.5%, #af5017 89.27%);
  transition: 0.3s linear;
}
header .card .cta:hover {
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.1) 100%);
}
/* #endregion */

/* #region description */
section.description{
    padding-top: 5.21vw;
    height: 66.67vw;
    background-image: url("../assets/img/detail_card.png"), linear-gradient(180deg, white 0%, var(--blue) 100%);
    background-size: contain;
    background-repeat: no-repeat;
  background-position: 0 5.21vw, center;
}
.card{
    margin-top: 11.09vw;
    height: 34.06vw;
    padding: 5.21vw 7.81vw;
    border-radius: 1.72vw;
    background-image: linear-gradient(99.26deg, rgba(255, 255, 255, 0.49) 0%, rgba(255, 255, 255, 0.07) 100%);
    -webkit-backdrop-filter: blur(1.56vw);
    backdrop-filter: blur(1.56vw);
    color: white;
    display: grid;
    grid-template-columns: 60% 1fr;
}
.description .card h3{
    grid-column: span 2;
}
.description .card .left{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.description .button{
    margin-top: 3.13vw;
    width: clamp(163px, 16.98vw, 326px);
    background-image: var(--gradO);
}
.card p{
    font-size: clamp(12px, 1.25vw, 24px);
    line-height: clamp(24px, 2.5vw, 48px);
}
.description .right{
    height: 15.16vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    text-align: center;
}
.indicator{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.indicator .text{
    margin-top: 1vw;
}
.indicator .icon{
    width: 6.98vw;
    height: 3.54vw;
    background-image: url("../assets/img/sensations.svg");
    background-size: cover;
}
.icon.minHeight{
    width: 5.31vw;
    background-image: url("../assets/img/minHeight.svg");
}
/* #endregion */

/* #region Similar attractions */
section.similarAttractionsContainer{
    background-image: linear-gradient(180deg, var(--blue) 0%, var(--dark) 100%);
}
.similarAttractionsContainer h2{
    margin-top: -7vw;
}
.similarAttractions{
    margin-top: 3.65vw;
    display: flex;
    justify-content: space-between;
}
/* #endregion */
</style>