<template>
  <div class="ticket">
      <div class="bg"></div>
    <div class="top">
      <h3 :class="colorClass">{{ props.ticket }}</h3>
      <p>{{ props.text }}</p>
    </div>
    <hr>
    <div class="bot">
      <div class="priceContainer">
        <div class="selector"><span @click="quantity > 1 ? quantity-- : ''">-</span><input type="number" class="quantity" v-model.number="quantity"><span @click="quantity++">+</span></div>
        <div class="price">{{ price }} EUR</div>
      </div>
      <div class="button">Réserver</div>
    </div>
  </div>
</template>

<script setup>
const { ref }=require("@vue/reactivity");
const { computed }=require("@vue/runtime-core");

const props = defineProps({
  tag: String,
  ticket: String,
  price: Number,
  text: String,
});

let price = computed(()=> props.price * quantity.value)

let colorClass =
  props.tag === "1d"
    ? "white"
    : props.tag === "2d"
    ? "blue"
    : "black";

const quantity = ref(1)
</script>

<style scoped>
.blue{
    color: var(--blue);
}
.white{
    color: white;
}
.black{
    color: var(--black);
}
.ticket {
  width: clamp(194.5px, 20.26vw, 389px);
  height: clamp(336.72px, 35.08vw, 673.44px);
  padding: 4vw 2.6vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
}
.bg{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: linear-gradient(161.63deg, rgba(255, 255, 255, 0.49) 0%, rgba(255, 255, 255, 0.07) 100%);
    backdrop-filter: blur(30px);
    border-radius: 1.15vw;
}
hr{
    position: absolute;
    bottom: 15.1vw;
    width: 100%;
    border: 1px dashed #fff7
}
.ticket h3 {
  font-size: clamp(14.18px, 1.48vw, 28.36px);
  text-align: center;
}
.ticket p {
  margin-top: 2.08vw;
  text-align: center;
  color: white;
}
.ticket .bot {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.priceContainer {
  margin-bottom: clamp(11.5px, 1.2vw, 23px);
  display: flex;
  align-items: center;
  color: white;
}
.selector{
    display: flex;
    align-items: center;
}
.selector span{
    width: 1.77vw;
    height: 1.77vw;
    border-radius: 50%;
    background-image: var(--gradW);
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.selector span::selection{
    background: transparent;
}
.quantity {
    width: 2.76vw;
  margin: 0 0.7vw;
  padding: 0.5vw 0;
  display: inline-block;
  background: #fff2;
  border-radius: 0.47vw;
  color: white;
  text-align: center;
}
.price {
  margin-left: 1vw;
  font-family: var(--title);
  font-size: 1.25vw;
  letter-spacing: 0.05em;
}
.button{
    margin-top: 0.5vw;
    background-image: var(--gradO);
}
</style>