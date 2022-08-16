<template>
  <main class="main">
    <div class="container">
      <h1>error</h1>
      <router-link class="regresar" to="/"
        >Volver a la página de Inicio
      </router-link>
    </div>
  </main>
</template>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .main {
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: relative;

  }
  .container h1 {
    color: white;
  }
</style>