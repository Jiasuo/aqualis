<template>
  <!-- HEADER -->
  <header>
    <h1>Aqualis</h1>
    <div class="card">
      <h2>Fais le plein de fraîcheur !</h2>
      <p>
        Viens découvrir le meilleur parc aquatique de France. Un grand nombre
        d’attractions promet du fun aquatique pour toute la famille!
      </p>
      <div class="button cta">Réserver</div>
    </div>
    <div class="img_mask"></div>
  </header>
  <!-- DESCRIPTION -->
  <section class="detailsContainer">
    <!-- Top -->
    <h2>23 Attractions et Spectacles</h2>
    <div class="desc">
      <div class="left">
        <h4>Dès le 9 avril 2022</h4>
        <h3>Aqualis vous accueille</h3>
        <p>
          Aqualis, parc d’attractions à Vienne, vous ouvre ses portes pour vivre
          de merveilleuses aventures en famille, ressentir émerveillement,
          émotions ou encore frissons !
        </p>
      </div>
      <div class="right">
        <div class="button">Toutes les attractions</div>
      </div>
    </div>
    <!-- Bot -->
    <div class="attractionExemples">
      <Attraction title="Test" />
      <Attraction />
      <Attraction />
    </div>
  </section>
  <!-- TICKETS -->
  <section class="ticketsContainer">
    <h2>Billetterie</h2>
    <div class="tickets">
      <div class="ticket">
        <div class="top">
          <h3>Pass Journée</h3>
          <p>Billet 1 jours valable tous les jours d'ouverture d'Aqualis</p>
        </div>
        <div class="bot">
          <div class="priceContainer">
            <div class="selector">-<span class="quantity">1</span>+</div>
            <div class="price">35 EUR</div>
          </div>
          <div class="button">Réserver</div>
        </div>
      </div>
      <div class="ticket">
        <div class="top">
          <h3>Pass Journée</h3>
          <p>Billet 1 jours valable tous les jours d'ouverture d'Aqualis</p>
        </div>
        <div class="bot">
          <div class="priceContainer">
            <div class="selector">-<span class="quantity">1</span>+</div>
            <div class="price">35 EUR</div>
          </div>
            <div class="button">Réserver</div>
        </div>
      </div>
      <div class="ticket">
        <div class="top">
          <h3>Pass Journée</h3>
          <p>Billet 1 jours valable tous les jours d'ouverture d'Aqualis</p>
        </div>
        <div class="bot">
          <div class="priceContainer">
            <div class="selector">-<span class="quantity">1</span>+</div>
            <div class="price">35 EUR</div>
          </div>
            <div class="button">Réserver</div>
        </div>
      </div>
    </div>
  </section>
  <!-- ACTIVITIES -->
  <section class="activitiesContainer">
    <h2>Attractions</h2>
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
  background-image: url("../assets/img/bg_header.jpg");
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
  background-image: url("../assets/img/header_mask.svg");
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

/* #region DETAILS  */
section.detailsContainer {
  padding: 7.81vw 15.63vw;
  color: white;
  background-color: var(--dblue);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.desc {
  margin-top: 2.08vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.desc .left {
  width: 50%;
}
.desc .left p {
  margin-top: 1.04vw;
  color: var(--white);
}
.attractionExemples {
  margin-top: 5.21vw;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

/* #endregion */

/* #region TICKETS */
section.ticketsContainer {
  padding: 7.81vw 15.63vw;
  height: 70.98vw;
  background-image: url("../assets/img/tickets_bg.png"),
    linear-gradient(180deg, #0a2d4b 0%, #1e57a3 100%);
  background-size: cover;
}
.ticketsContainer h2 {
  margin-top: 3.34vw;
}
.ticketsContainer .tickets {
  margin-top: 5.21vw;
  display: flex;
  justify-content: space-between;
}
.tickets .ticket {
  width: clamp(194.5px, 20.26vw, 389px);
  height: clamp(336.72px, 35.08vw, 673.44px);
  padding: 4.79vw 2.6vw;
  background-image: url("../assets/img/ticket_card.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.ticket h3 {
  font-size: clamp(14.18px, 1.48vw, 28.36px);
  text-align: center;
}
.ticket p {
  margin-top: 2.08vw;
  text-align: center;
  color: var(--white);
}
.ticket .bot {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.bot .priceContainer {
  margin-bottom: clamp(11.5px, 1.2vw, 23px);
  display: flex;
  align-items: center;
  color: white;
}
.priceContainer .quantity{
  margin: 0 clamp(5px, 0.52vw, 10px);
  display: inline-block;
  padding:0.47vw 1.2vw;
  background-image: linear-gradient(114.85deg, rgba(255, 255, 255, 0.49) -0.29%, rgba(255, 255, 255, 0.07) 100.51%);
backdrop-filter: blur(26.5831px);
border-radius: clamp(7.5px, 0.78vw, 15px);
}
.price{
  margin-left: clamp(20px, 2.08vw, 40px);
  font-family: var(--title);
  font-size: clamp(16px, 1.67vw, 32px);
  letter-spacing: 0.05em;
}
/* #endregion */

/* #region ACTIVITIES */
section.activitiesContainer{
  padding:16vw 15.63vw 7.81vw 15.63vw;
  height: 63.38vw;
  background-image: url("../assets/img/activities_bg.png"), linear-gradient(180deg, #1e57a3 0%, var(--blue) 100%);
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
  border-radius: 1.15vw;
  display: flex;
  flex-direction: column-reverse;
}

.attractionList .attraction:hover{
  cursor: pointer;
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

/* #region CALENDAR */
section.calendarContainer{
  padding: 7.81vw 15.63vw 6vw 15.63vw;
  background-image: linear-gradient(180deg, var(--blue) 0%, var(--dark) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.calendar{
  margin-top: 3.65vw;
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
  width: clamp(163px, 16.98vw, 326px);
  background-image: linear-gradient(196.64deg, #EB6B20 11.5%, #AF5017 89.27%);
}
/* #endregion */
</style>