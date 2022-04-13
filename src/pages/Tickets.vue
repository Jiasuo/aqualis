<template>
  <header>
    <h1>Billetterie</h1>
    <div class="card">
      <h2>Chacun son tour</h2>
      <p>
        Viens découvrir le meilleur parc aquatique de France. Un grand nombre
        d’attractions promet du fun aquatique pour toute la famille!
      </p>
    </div>
    <div class="img_mask"></div>
  </header>
  <section class="classicTicketsContainer">
    <h2>Classiques</h2>
    <div class="ticketsContainer">
      <Ticket tag="1d" ticket="Pass Journée" :price="35" text="Billet 1 jours valable tous les jours d'ouverture d'Aqualis"/>
      <Ticket tag="2d" ticket="Pass 2 jours" :price="55" text="Billet 2 jours valable tous les jours d’ouverture d’Aqualis"/>
      <Ticket tag="1y" ticket="Pass 2022" :price="90" text="Billet nominatif valable tous les jours d’ouverture d’Aqualis"/>
    </div>
  </section>
  <section class="groupTicketContainer">
    <h2>à plusieurs</h2>
    <div class="groupContainer">
      <div class="left"></div>
      <div class="right">
        <h3>Billets Groupe</h3>
        <p>Devis et réservation minimum 48h avant la visite
Récupérez vos billets en caisse le jour de votre visite</p>
<p>Contactez le 01 23 45 67 89<br/>ou commercial@aqualis.fr</p>
  <h5>à partir de 20 EUR /Jour</h5>
  <div class="button" @click="showContact=true">Devis</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Ticket from "../components/Ticket.vue"
import {showContact} from "../store"
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
  background-image: url("../assets/img/header_maskO.svg");
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

/* #region TICKETS */
.classicTicketsContainer{
  background-image: linear-gradient(180deg, #EB6B20 0%, #208CEB 100%);
}
.ticketsContainer{
  margin-top: 5.21vw;
  display: flex;
  justify-content: space-between;
}
/* #endregion */

/* #region GROUP */
.groupTicketContainer{
  background-image: linear-gradient(180deg, var(--blue) 0%, var(--dark) 100%);
}
.groupTicketContainer h2{
  margin-top: -5vw;
}
.groupContainer{
  margin-top: 5.21vw;
  background-image: linear-gradient(262.19deg, rgba(255, 255, 255, 0.49) 0%, rgba(243, 250, 255, 0.07) 100%);
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  border-radius: 1.15vw;
  display: flex;
  justify-content: space-between;
}
.left{
  width: 33.8vw;
  height: 31.25vw;
  border-radius: 1.15vw 0 0 1.15vw;
  background-image: url("../assets/img/group.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 90% center;
}
.right{
  width: 34.95vw;
  padding: 2.6vw 4.69vw;
  color: white;
}
.right p:first-of-type{
  margin-top: 3vw;
}
.right p:last-of-type{
  margin-top: 1.56vw;
}
.right h5{
  margin-top: 2vw;
  text-align-last: left;
}
.right .button{
  margin-top: 2vw;
  background-image: var(--gradO);
}
/* #endregion */

</style>