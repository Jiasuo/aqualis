<template>
  <Top />
  <router-view></router-view>
  <Footer />
</template>

<script>
// Components
import Top from "./components/Top.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Top,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Nunito&display=swap");

:root {
  /* COLORS */
  --grey: #565656;
  --blue: #208ceb;
  --dblue: #0a2d4b;
  --tblue: rgba(32, 140, 235, 0.7);
  --dark: #1e57a3;
  --orange: #eb6b20;
  --black: #0a2d4b;
  --white: #b4d1ea;
  --bgw: #f1f9ff;
  --gradW: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  --gradO: linear-gradient(196.64deg, #eb6b20 11.5%, #af5017 89.27%);
  /* FONTS */
  --title: "Luckiest Guy", cursive;
  --text: "Nunito", sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  font-family: "Nunito", sans-serif;
  color: #0a2d4b;
  scroll-behavior: smooth;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

h1 {
  font-family: var(--title);
  color: white;
  font-size: 10.42vw;
  text-align: center;
}

h2 {
  font-family: var(--title);
  font-size: clamp(30px, 3.13vw, 60px);
  color: white;
  text-align: center;
}
h3 {
  font-family: var(--title);
  font-size: clamp(24px, 2.5vw, 48px);
  color: white;
}
h4 {
  text-transform: uppercase;
  font-size: clamp(12px, 1.25vw, 24px);
  letter-spacing: 0.275em;
  color: var(--white);
}
h5 {
  text-align: center;
  font-family: var(--title);
  font-size: clamp(16px, 1.25vw, 24px);
  color: white;
}

p {
  font-size: clamp(12px, 1.25vw, 24px);
  line-height: clamp(18px, 1.88vw, 36px);
  letter-spacing: 0.024em;
}

.button {
  width: fit-content;
  font-family: var(--title);
  padding: clamp(7.5px, 0.78vw, 15px) clamp(17.5px, 1.82vw, 35px);
  border-radius: clamp(17.5px, 1.82vw, 35px);
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.08em;
  font-size: clamp(14px, 1.25vw, 24px);
  cursor: pointer;
  color: white;
  background-image: var(--gradW);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  text-decoration: none;
}

::selection {
  color: white;
  background-color: var(--orange);
}

input,
textarea {
  outline: none;
  background-color: transparent;
  border: none;
}
textarea {
  resize: none;
}
section {
  padding: 7.81vw 15.63vw;
}
</style>
