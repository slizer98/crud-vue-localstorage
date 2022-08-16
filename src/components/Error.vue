<template>
  <main class="main">
    <img src="../assets/404-removebg-preview.png" alt="erro pagina no encontrada">
    <router-link class="btn btn-dark btn-sm p-2 mb-2 texto" to="/">
      Volver a la página de Inicio
    </router-link>
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
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .container h1 {
    color: white;
  }
  .texto {
    font-size: 1.5rem;
    /* animacion al ingresar a la pagina del texto */
    animation: texto 1s ease-in-out;
  }
  @keyframes texto {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>