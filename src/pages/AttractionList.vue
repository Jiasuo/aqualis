<template>
<!-- HEADER -->
  <header class="container">
      <h1>Attractions</h1>
    <div class="card">
      <h3>43 Activités à découvrir</h3>
      <p>
        Viens découvrir le meilleur parc aquatique de France. Un grand nombre
        d’attractions promet du fun aquatique pour toute la famille!
      </p>
      <div class="button cta">Réserver</div>
    </div>
    <div class="img_mask"></div>
  </header>
  <!-- ACTIVITIES -->
  <section class="activitiesContainer">
    <h2>Type d'activité</h2>
    <div class="attractionList">
      <div class="attraction children">
        <div class="button">Enfants</div>
      </div>
      <div class="attraction sensations">
        <div class="button">Sensations</div>
      </div>
      <div class="attraction chill">
        <div class="button">Détente</div>
      </div>
    </div>
  </section>
  <!-- ACTIVITIES LIST -->
  <section class="activityListContainer">
      <h2>Les Attractions</h2>
      <div class="listContainer">
          <Attraction />
          <Attraction />
          <Attraction />
          <Attraction />
          <Attraction />
          <Attraction />
          <Attraction />
          <Attraction />
          <Attraction />
          <Attraction />
          <Attraction />
          <Attraction />
      </div>
  </section>
</template>

<script setup>
// Components
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
  background-image: url("../assets/img/list_bg.jpg");
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
  background-image: url("../assets/img/list_mask.svg");
  background-size: cover;
}
h1 {
  margin-top: -2.5vw;
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

/* #region ACTIVITIES */
section.activitiesContainer{
  padding:16vw 15.63vw 7.81vw 15.63vw;
  height: 63.38vw;
  background-image: url("../assets/img/activities_bg.png"), linear-gradient(180deg, var(--bgw) 0%, var(--blue) 100%);
  background-size: contain, contain;
  background-position: 0 5.21vw, center;
  background-repeat: no-repeat;
}
.attractionList{
  margin-top: 7.55vw;
  display: flex;
  justify-content: space-between;
}
.attractionList .attraction{
  width: 20.21vw;
  height: 24.51vw;
  padding: 2.6vw;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
    border-radius: 1.72vw;
    cursor: pointer;
    overflow: hidden;
}
.attraction.children{
  background-image: url("../assets/img/children.jpg");
}
.attraction.sensations{
  background-image: url("../assets/img/sensations.jpg");
}
.attraction.chill{
  background-image: url("../assets/img/chill.jpg");
}
.attractionList .attraction:hover .button{
  background-image: linear-gradient(196.64deg, #EB6B20 11.5%, #AF5017 89.27%);
}
/* #endregion */

/* #region ACTIVITYLIST */
section.activityListContainer{
    background-image: linear-gradient(180deg, var(--blue) 0%, var(--dark) 100%);
}
.listContainer{
    margin-top: 3.65vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4.06vw;
}
/* #endregion */

</style>