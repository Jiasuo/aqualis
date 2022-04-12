<template>
  <div class="container">
    <h1>Plan du site</h1>
    <img src="../assets/img/map_transparent.png" alt="plan d'Aqualis" />
    <div class="description">
      <h2>Application Aqualis</h2>
      <div class="card">
          <h3>Télécharger</h3>
          <p>Planifiez votre journée avec notre application mobile</p>
          <div class="mobileIconscontainer">
              <div class="apple">
                  <div class="icon"></div>
                  <div class="text">App. Store</div>
              </div>
              <div class="android">
                  <div class="icon">
                  </div>
                  <div class="text">Play Store</div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  padding: 5.21vw 15.63vw;
  background-image: linear-gradient(180deg, white 0%, var(--dark) 100%);
}
h1 {
  margin-bottom: 4vw;
  color: var(--blue);
  font-size: clamp(36px, 3.75vw, 72px);
}
img {
  width: 100%;
}
.description {
  margin-top: 5.21vw;
  margin-bottom: 4vw;
}
.card{
    margin-top: 4vw;
    padding: 5.21vw 7.81vw;
    border-radius: 1.72vw;
    background-image: linear-gradient(99.26deg, rgba(255, 255, 255, 0.49) 0%, rgba(255, 255, 255, 0.07) 100%);
    -webkit-backdrop-filter: blur(1.56vw);
    backdrop-filter: blur(1.56vw);
    text-align: center;
}
h3{
    margin-bottom: 1vw;
}
p{
    margin-bottom: 1vw;
    color: white;
}
.mobileIconscontainer{
    display: flex;
    width: 80%;
    margin: auto;
    color: #fff;
    align-items: center;
    justify-content: space-around;
}
.apple, .android{
    padding: 1vw;
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    font-size: clamp(12px, 1.25vw, 24px);
    line-height: clamp(18px, 1.88vw, 36px);
    letter-spacing: 0.024em;
}
.apple:hover, .android:hover{
    background-color: var(--orange);
}
.icon{
    width: clamp(30px, 5.21vw, 100px);
    height: clamp(30px, 5.21vw, 100px);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
.apple .icon{
    background-image: url("../assets/img/apple.svg");
}
.android .icon{
    background-image: url("../assets/img/android.svg");
    background-size: 80% 80%;
}
.text{
    margin-top: 0.3vw;
}
</style>
