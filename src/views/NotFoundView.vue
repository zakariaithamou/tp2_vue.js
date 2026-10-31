<template>
  <div class="not-found-view">
    <h1>404 - Page non trouvée</h1>
    <p>La page demandée n'existe pas ou a été déplacée.</p>
    <router-link to="/" class="btn-home">Retourner à l'accueil</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFoundView",
};
</script>

<style scoped>
.not-found-view {
  text-align: center;
  padding: 48px 0;
}
.btn-home {
  display: inline-block;
  margin-top: 16px;
  color: white;
  background-color: #2563eb;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
}
</style>
