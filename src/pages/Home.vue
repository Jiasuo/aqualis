<template>
  <!-- HEADER -->
  <header>
    <h1>Aqualis</h1>
    <div class="card">
      <h2>Le plein de fraîcheur !</h2>
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
      <div class="attraction">
        <div class="attractionDetails">
          <h3>Naga</h3>
        </div>
      </div>
      <div class="attraction">
        <div class="attractionDetails">
          <h3>Naga</h3>
        </div>
      </div>
      <div class="attraction">
        <div class="attractionDetails">
          <h3>Naga</h3>
        </div>
      </div>
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
      <div class="attraction">
        <div class="button">Enfants</div>
      </div>
      <div class="attraction">
        <div class="button">Sensations</div>
      </div>
      <div class="attraction">
        <div class="button">Détente</div>
      </div>
    </div>
  </section>
  <!-- CALENDAR -->
  <section class="calendarContainer">
    <h2>Calendrier</h2>
    <div class="calendar">
      <div class="calendarCard"></div>
      <ul class="legends">
        <li class="legend">
          <span class="indocator"></span>Parc ouvert de 10h30 à 17h30<br />Attractions
          ouvertes de 10h30 à 17h30
        </li>
        <li class="legend">
          <span class="indocator"></span>Parc ouvert de 10h30 à 17h30<br />Attractions
          ouvertes de 10h30 à 17h30
        </li>
        <li class="legend">
          <span class="indocator"></span>Parc ouvert de 10h30 à 17h30<br />Attractions
          ouvertes de 10h30 à 17h30
        </li>
        <li class="legend">
          <span class="indocator"></span>Parc ouvert de 10h30 à 17h30<br />Attractions
          ouvertes de 10h30 à 17h30
        </li>
      </ul>
    </div>
    <div class="cta">Billetterie</div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
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
  height: 16.22vw;
  position: absolute;
  bottom: -0.25vw;
  background-image: url("../assets/img/header_mask.svg");
  background-size: contain;
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
}
.card h2 {
  font-size: clamp(18px, 1.88vw, 36px);
  font-family: var(--title);
}
.card p {
  margin-top: 1.04vw;
  font-size: clamp(12px, 1.04vw, 20px);
  line-height: clamp(18px, 1.56vw, 30px);
}
.card .cta {
  margin-top: 1.5vw;
  background: linear-gradient(196.64deg, #eb6b20 11.5%, #af5017 89.27%);
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
.attraction {
  width: clamp(194px, 20.21vw, 388px);
  height: clamp(325px, 33.85vw, 650px);
  background-image: url("../assets/img/attraction.jpg");
  background-size: cover;
  border-radius: 1.72vw;
  display: flex;
  flex-direction: column;
  justify-content: end;
  overflow: hidden;
  cursor: pointer;
}
.attractionDetails::before {
  content: "";
  position: absolute;
  width: 100%;
  height: clamp(274.5px, 28.59vw, 549px);
  top: -0.1vw;
  left: 0;
  background-image: url("../assets/img/waveB.svg");
  background-size: cover;
  background-position: top;
  z-index: 1;
}
.attractionDetails::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: clamp(278.75px, 29.04vw, 557.5px);
  background-image: url("../assets/img/waveF.svg");
  background-size: cover;
  background-position: top;
  z-index: 2;
}
.attractionDetails {
  width: 100%;
  height: clamp(140px, 14.58vw, 280px);
  position: relative;
  transition: ease-out 0.5s all;
}
.attractionDetails:hover {
  height: clamp(278.75px, 29.04vw, 557.5px);
}
.attractionDetails h3 {
  margin-top: clamp(90px, 9.38vw, 180px);
  margin-left: 2.6vw;
  position: relative;
  z-index: 3;
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
</style>