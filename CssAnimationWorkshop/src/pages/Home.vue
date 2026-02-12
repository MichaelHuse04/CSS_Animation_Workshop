<script setup lang="ts">


</script>

<template>
  <h1>Home</h1>
  <main>
    <section class="left-side">
      Willkommen zum CSS
      <div class="animation">Animationen</div>
      Workshop
      <p>
        Dies ist einer meiner lieblings Pokémonkarten ->
      </p>
      <p>
        Aber dafür seid ihr heute nicht hier, du bist hier um dein Wissen zum Thema CSS Animationen zu erweitern.
      </p>
      <section class="infinit-slider">
        <div class="edge-filter"></div>
        <div class="infinit-slider-content">
          <div class="box">1</div>
          <div class="box">2</div>
          <div class="box">3</div>
          <div class="box">4</div>
          <div class="box">5</div>
          <div class="box">6</div>
          <div class="box">7</div>
          <div class="box">8</div>
          <div class="box">9</div>
          <div class="box">10</div>
          <div class="box">11</div>
          <div class="box">12</div>
          <div class="box">13</div>
          <div class="box">14</div>
          <div class="box">15</div>
        </div>
        <div aria-hidden class="infinit-slider-content">
          <div class="box box-duplicat">1</div>
          <div class="box box-duplicat">2</div>
          <div class="box box-duplicat">3</div>
          <div class="box box-duplicat">4</div>
          <div class="box box-duplicat">5</div>
          <div class="box box-duplicat">6</div>
          <div class="box box-duplicat">7</div>
          <div class="box box-duplicat">8</div>
          <div class="box box-duplicat">9</div>
          <div class="box box-duplicat">10</div>
          <div class="box box-duplicat">11</div>
          <div class="box box-duplicat">12</div>
          <div class="box box-duplicat">13</div>
          <div class="box box-duplicat">14</div>
          <div class="box box-duplicat">15</div>
        </div>
      </section>
      <section class="shapes">
        <img src="../../public/catWgun.gif" alt="burger" width="150px">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
      </section>
    </section>
    <aside>
      <img class="card" src="../../public/knospiMeineLiebe.png"
           alt="Ein bild von meinem Beziehungspartner"/>
      <img class="card" src="../../public/Knospi.png" alt="Ein bild von Knospi"/>
    </aside>
  </main>

</template>

<style scoped lang="scss">

h1 {
  text-align: center;
}

main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
}

section{
  position: relative;
}

.left-side {
  text-align: center;
  min-width: 0;
}



.infinit-slider{
  overflow: hidden;
  display: flex;

  .infinit-slider-content{
    display: flex;
    animation: infinitSliderItem 5s infinite linear;
    gap: 1rem;
    padding-right: 1rem;

    .box{
      padding: 1rem;
      background: bisque;
      transition: ease-out 0.1s;
    }
  }
  &:hover .infinit-slider-content{

    animation-play-state: paused;
    .box:hover{
      background-color: aliceblue;
    }
  }
}


.shapes{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block-start: 15rem;

  .shape{
    transition: 0.2s ease-out;
    position: absolute;
    border: transparent solid 150px;
    border-bottom: 150px solid red;
  }

  .shape-2{
    rotate: 90deg;
  }
  .shape-3{
    rotate: 180deg;
  }
  .shape-4{
    rotate: 270deg;
  }
}

.shapes:has(.shape:hover) {

  .shape{
    transform: translateY(100px);
  }
}

.animation {
  animation: textJitter 2s linear infinite;
}

aside {
  position: relative;
}

.card {
  position: absolute;
}

.card:first-child {
  animation: cardAnimation 5s linear infinite;
  transform: rotateY(0.25turn);
}

.card:last-child {
  animation: cardAnimation 5s linear infinite;
  transform: rotateY(0.25turn);
  animation-delay: 2.5s;
}
@keyframes infinitSliderItem {
  from{
    transform: translatex(0);
  }

  to{
    transform: translatex(-100%);
  }
}

@keyframes textJitter {
  0% {
    transform: translate(1px, 2px);
    color: black;
  }
  10% {
    transform: translate(-1px, 2px);
    color: white;
  }
  20% {
    transform: translate(1px, -2px);
    color: white;
  }
  30% {
    transform: translate(1px, -2px);
    color: black;
  }
  40% {
    transform: translate(-1px, 2px);
    color: white;
  }
  50% {
    transform: translate(-1px, -2px);
    color: red;
    text-shadow: 10px 10px blue;
  }
  60% {
    transform: translate(-1px, 2px);
    color: blue;
    text-shadow: -10px -10px red;
  }
  70% {
    transform: translate(1px, -2px);
    color: black;
  }
  80% {
    transform: translate(-1px, 2px);
    color: green;
    text-shadow: -10px 10px yellow;
  }
  90% {
    transform: translate(-1px, -2px);
    color: yellow;
    text-shadow: 10px -10px green;
  }
  100% {
    transform: translate(1px, 2px);
    color: white;
  }
}

@keyframes cardAnimation {
  0% {
    transform: rotateY(0.25turn);
    opacity: 1;
  }

  49% {
    transform: rotateY(-0.25turn);
    opacity: 1;
  }
  50% {
    transform: rotateY(-0.25turn);
    opacity: 0;
  }


  99% {
    opacity: 0;
    transform: rotateY(0.25turn);
  }

  100% {
    opacity: 1;
    transform: rotateY(0.25turn);
  }
}

</style>
