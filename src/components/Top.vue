<template>
  <div class="container">
      <ul class="nav left">
          <li class="navItem"><router-link to="/" active-class="active">Accueil</router-link></li>
          <li class="navItem"><router-link :to="{name: 'AttractionList'}"  active-class="active">Attractions</router-link></li>
          <li class="navItem"><router-link :to="{name:'Plan'}" active-class="active">Plan d'Aqualis</router-link></li>
      </ul>
      <div class="logoContainer">
          <img src="../assets/img/logo.svg" alt="Logo Aqualis">
      </div>
      <ul class="nav right">
          <li class="navItem"><router-link :to="{name: 'Infos'}" active-class="active">Informations</router-link></li>
          <li class="navItem"><div  @click="showContact=true" class="contactButton">Contact</div></li>
          <li class="navItem tickets"><router-link :to="{name: 'Tickets'}" class="button tickets">Billetterie</router-link></li>
      </ul>
  </div>
  <!-- Contact modal -->
  <teleport to="body">
      <Contact v-if="showContact" @closeContact="showContact=false" />
  </teleport>
</template>

<script setup>
// Components
import Contact from "./Contact.vue"
// Dependencies
import {ref} from "vue"
// const showContact = ref(true); // Dev
const showContact = ref(false); // prod

</script>

<style scoped>
.container {
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  max-width: 100%;
  height: clamp(45px, 4.69vw, 90px);
  padding: 0 7.81vw;
  display: grid;
  grid-template-columns: 1fr 4.69vw 1fr;
  gap: 5vw;
  /* background-image: linear-gradient(
    90.27deg,
    rgba(255, 255, 255, 0.49) 0%,
    rgba(255, 255, 255, 0.07) 100%
  ); */
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
    width: clamp(30px, 3.13vw, 60px);
    height: clamp(30px, 3.13vw, 60px);
}
a{
    color: white;
    text-decoration: none;
    font-size: 13px;
    letter-spacing: 0.05em;
}
.navItem:not([class*=tickets]) a:hover{
    color: var(--orange);
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
.navItem .tickets:hover {
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.1) 100%);
}
.navItem a.active{
    color: var(--orange);
}
.contactButton{
    cursor: pointer;
    font-size: 13px;
    letter-spacing: 0.05em;
}
.contactButton:hover{
    color: var(--orange)
}
</style>