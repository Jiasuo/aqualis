<template>
  <div @click="goDetail" class="attraction">
        <div class="attractionDetails">
          <h3>{{props.title || "Naga"}}</h3>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from "vue-router"
const router = useRouter()
const props = defineProps({
  title: String
})

function goDetail(){
  router.push({name: "Detail"})
}
</script>

<style scoped>
.attraction {
  width: clamp(194px, 20.21vw, 388px);
  height: clamp(325px, 33.85vw, 650px);
  background-image: url("../assets/img/attraction.jpg");
  background-size: cover;
  border-radius: 1.72vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  cursor: pointer;
}
.attraction:hover .attractionDetails{
  height: clamp(278.75px, 29.04vw, 557.5px);
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
.attractionDetails h3 {
  margin-top: clamp(90px, 9.38vw, 180px);
  margin-left: 2.6vw;
  position: relative;
  z-index: 3;
}
</style>