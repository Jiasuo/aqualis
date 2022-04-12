<template>
  <div class="contactContainer" @click.self="closeModal">
          <div class="contactCard">
              <h2>Contact</h2>
              <div class="topFields">
                  <input type="text" ref="nameInput" v-model="entries.name" placeholder="Nom" class="name">
                  <input type="email" v-model="entries.email" placeholder="Adresse Email" class="mail">
                  <input type="text" v-model="entries.subject" placeholder="Sujet du message" class="subject">
              </div>
              <div class="bottomField">
                  <textarea v-model="entries.message" cols="30" rows="10" placeholder="Ecrivez votre message ici ..."></textarea>
              </div>
                <div class="button" @click="closeModal">Envoyer</div>
                <div class="close" @click="closeModal"></div>
          </div>
      </div>
</template>

<script setup>
// #region IMPORTS
import { reactive, ref } from "@vue/reactivity"
import { onMounted } from "@vue/runtime-core"
// #endregion

// #region VARIABLES
const emit = defineEmits(['closeContact'])
const entries = reactive({
    name: "",
    email: "",
    subject: "",
    message: ""
})
const nameInput = ref()
// #endregion


// #region METHODS
function closeModal(){
    // Clear entries
    entries.name=""
    entries.email=""
    entries.subject = ""
    entries.message = ""
    emit('closeContact');
}
// #endregion

// #region LIFECYCLE
onMounted(()=>{
    nameInput.value.focus();
})
// #endregion
</script>

<style scoped>
.contactContainer{
    padding: 7.81vw 15.63vw;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: var(--tblue);
    z-index: 999;
}
.contactCard{
    width: 100%;
    height: 100%;
    padding: 2.6vw 7.81vw;
    background-image: linear-gradient(103.05deg, rgba(255, 255, 255, 0.49) 0%, rgba(255, 255, 255, 0.07) 100%);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    color: white;
    border-radius: 1.56vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
.topFields{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
input, textarea{
    padding: 1vw 2vw;
    border-radius: 2.47vw;
    border: solid 2px white;
    color: white;
    font-size: clamp(12px, 1.25vw, 24px);
}
input.name{
    width: 11vw;
}
input.email{
    width: 13vw;
}
input.subject{
    width: 18vw;
}
.bottomField{
    width: 100%;
}
textarea{
    width: 100%;
    height: 12.81vw;
}
::placeholder{
    color: var(--white);
    font-family: 'Nunito', sans-serif;
    font-size: clamp(12px, 1.25vw, 24px);
}
.close{
    width: clamp(30px, 3.13vw, 60px);
    height: clamp(30px, 3.13vw, 60px);
    position: absolute;
    background-image: url("../assets/img/close.svg"), linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.1) 100%);
    background-size: 50% 50%, contain;
    background-position: center;
    background-repeat: no-repeat;
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    border-radius: 50%;
    right: -4vw;
    top: -4vw;
    cursor: pointer;
}
</style>