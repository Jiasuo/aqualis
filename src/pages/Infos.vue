<template>
  <header>
    <h1>Informations</h1>
    <div class="card">
      <h2>À propos d'Aqualis</h2>
      <p>
        Viens découvrir le meilleur parc aquatique de France. Un grand nombre
        d’attractions promet du fun aquatique pour toute la famille!
      </p>
    </div>
    <div class="img_mask"></div>
  </header>
  <section class="servicesContainer">
    <h2>Services</h2>
    <div class="servicesList">
      <div class="service">
        <div class="icon"></div>
        <div class="text">Parking gratuit</div>
      </div>
      <div class="service animals">
        <div class="icon"></div>
        <div class="text">Garde animaux</div>
      </div>
      <div class="service babyCouch">
        <div class="icon"></div>
        <div class="text">Tables à langer</div>
      </div>
      <div class="service camping">
        <div class="icon"></div>
        <div class="text">Camping cars</div>
      </div>
      <div class="service childChair">
        <div class="icon"></div>
        <div class="text">Chaises enfants</div>
      </div>
      <div class="service food">
        <div class="icon"></div>
        <div class="text">Pique-nique</div>
      </div>
      <div class="service handicap">
        <div class="icon"></div>
        <div class="text">Accès handicap</div>
      </div>
      <div class="service infos">
        <div class="icon"></div>
        <div class="text">Bornes infos</div>
      </div>
      <div class="service keys">
        <div class="icon"></div>
        <div class="text">Vestiaires</div>
      </div>
      <div class="service moveBaby">
        <div class="icon"></div>
        <div class="text">Parking Gratuit</div>
      </div>
      <div class="service restaurant">
        <div class="icon"></div>
        <div class="text">Restauration</div>
      </div>
      <div class="service atm">
        <div class="icon"></div>
        <div class="text">Distributeurs</div>
      </div>
    </div>
  </section>
  <section class="accessContainer">
    <h2>Plan d'accès</h2>
    <div class="mapContainer">
      <div class="left">
        <h3>Nous trouver</h3>
        <p>
          30 avenue Général Leclerc<br />38200 Vienne <br />Tél : 01 23 45 67 89
        </p>
        <div class="button">Contact</div>
      </div>
      <div class="right"></div>
    </div>
  </section>
  <!-- CALENDAR -->
  <section class="calendarContainer">
    <h2>Calendrier</h2>
    <div class="calendar">
      <div class="calendarCard">
        <img src="../assets/img/calendar.png" alt="calendrier">
      </div>
      <ul class="legends">
        <li class="legend">
          <div class="indicator open"></div>Parc ouvert de 10h30 à 17h30<br />Attractions
          ouvertes de 10h30 à 17h30
        </li>
        <li class="legend">
          <div class="indicator open2"></div>Parc ouvert de 10h30 à 17h30<br />Attractions
          ouvertes de 10h30 à 17h30
        </li>
        <li class="legend">
          <div class="indicator open3"></div>Parc ouvert de 10h30 à 17h30<br />Attractions
          ouvertes de 10h30 à 17h30
        </li>
        <li class="legend">
          <div class="indicator closed"></div>Parc fermé</li>
      </ul>
    </div>
    <div class="cta button">Billetterie</div>
  </section>
</template>

<script setup></script>

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
  background-image: url("../assets/img/infos_bg.jpg");
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
  background-image: url("../assets/img/header_maskD.svg");
  background-size: cover;
}
h1 {
  margin-top: -2.5vw;
  font-size: clamp(36px, 3.75vw, 72px);
}
header .card {
  margin-top: 2.5vw;
  width: clamp(377.5px, 39.32vw, 755px);
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
/* #endregion */

/* #region Services */
section.servicesContainer {
  background-image: linear-gradient(180deg, var(--dark) 0%, var(--blue) 100%);
}
.servicesList {
  margin-top: 5.21vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, clamp(115px, 11.98vw, 230px));
  gap: 3.28vw;
}
.service {
  padding: 1.88vw;
  height: 100%;
  border-radius: 1.15vw;
  background-image: linear-gradient(
    99.26deg,
    rgba(255, 255, 255, 0.49) 0%,
    rgba(255, 255, 255, 0.07) 100%
  );
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  color: white;
  font-size: clamp(12px, 1.25vw, 24px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.service .icon {
  width: clamp(52.5px, 5.47vw, 105px);
  height: clamp(52.5px, 5.47vw, 105px);
  background-image: url("../assets/img/parking.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.service.atm .icon {
  background-image: url("../assets/img/atm.png");
}
.service.animals .icon {
  background-image: url("../assets/img/animals.png");
}
.service.babyCouch .icon {
  background-image: url("../assets/img/baby_couch.png");
}
.service.camping .icon {
  background-image: url("../assets/img/camping.png");
}
.service.childChair .icon {
  background-image: url("../assets/img/child_chair.png");
}
.service.food .icon {
  background-image: url("../assets/img/food.png");
}
.service.handicap .icon {
  background-image: url("../assets/img/handicap.png");
}
.service.infos .icon {
  background-image: url("../assets/img/infos.png");
}
.service.keys .icon {
  background-image: url("../assets/img/keys.png");
}
.service.moveBaby .icon {
  background-image: url("../assets/img/move_baby.png");
}
.service.restaurant .icon {
  background-image: url("../assets/img/restaurant.png");
}
/* #endregion */

/* #region Access */
section.accessContainer{
  background-image: linear-gradient(180deg, var(--blue) 0%, var(--white) 100%);
}
.mapContainer{
  margin-top: 5.21vw;
  border-radius: 1.72vw;
  background-image: linear-gradient(97.81deg, rgba(243, 250, 255, 0.49) 0%, rgba(243, 250, 255, 0.07) 100%);
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  color: var(--black);
  display: grid;
  grid-template-columns: clamp(214px, 22.29vw, 428px) 1fr;
}
.mapContainer .left{
  margin: 6.98vw 3.65vw;
}
.mapContainer h3{
  color: var(--black);
  font-size: clamp(16px, 1.67vw, 32px);
}
.mapContainer p{
  margin-top: 1vw;
}
.mapContainer .button{
  width: fit-content;
  margin-top: 2vw;
  background-image: var(--gradO);
}
.mapContainer .right{
  background-image: url("../assets/img/access.jpg");
  width: 100%;
  height: 100%;
  border-radius: 0 1.72vw 1.72vw 0;
  object-fit: cover;
  object-position: center center;
}
/* #endregion */

/* #region CALENDAR */
section.calendarContainer{
  padding: 7.81vw 15.63vw 6vw 15.63vw;
  background-image: linear-gradient(180deg, var(--white) 0%, var(--dark) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.calendar{
  margin-top: 5.21vw;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.calendarCard img{
  width: 38.85vw;
  height: 29.06vw;
}
.calendar .legends{
  color: var(--white);
}
.legends .legend{
  display: flex;
  align-items: center;
}
.legend:not(:first-child){
  margin-top: 2.34vw;
}
.legend .indicator{
  margin-right: 1.56vw;
  width: 2.08vw;
  height: 2.08vw;
  border-radius: 50%;
}
.indicator.open{
  background-image: linear-gradient(180deg, rgba(0, 181, 0, 0.7) 0%, rgba(0, 181, 0, 0.2) 100%);
}
.indicator.open2{
  background-image: linear-gradient(180deg, rgba(32, 140, 235, 0.7) 0%, rgba(32, 140, 235, 0.2) 100%);
}
.indicator.open3{
  background-image: linear-gradient(180deg, rgba(235, 107, 32, 0.7) 0%, rgba(235, 107, 32, 0.2) 100%);
}
.indicator.closed{
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(196, 196, 196, 0.2) 100%);
}
.calendarContainer .cta{
  margin-top: 5vw;
  background-image: var(--gradO)
}
/* #endregion */
</style>
