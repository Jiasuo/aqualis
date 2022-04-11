<template>
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
</template>

<script setup>
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

</style>