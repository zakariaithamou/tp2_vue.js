<template>
  <div class="book-details-view">
    <button class="btn-retour" @click="retour">← Retour</button>

    <div v-if="book" class="details-card">
      <img
        v-if="book.image"
        class="book-cover"
        :src="book.image"
        :alt="`Couverture de ${book.title}`"
      />
      <h2>{{ book.title }}</h2>
      <p><strong>Auteur :</strong> {{ book.author }}</p>
      <p><strong>Année de publication :</strong> {{ book.year }}</p>
      <p>
        <strong>Statut :</strong>
        <span :class="{ 'fav-badge': book.isFav }">
          {{ book.isFav ? "★ Favori" : "Non favori" }}
        </span>
      </p>
    </div>

    <div v-else class="not-found-book">
      <p>Aucun livre ne correspond à l'identifiant demandé.</p>
    </div>
  </div>
</template>

<script>
import { store } from "../store/books.js";

export default {
  name: "BookDetailsView",
  data() {
    return {
      store,
    };
  },
  computed: {
    book() {
      // Conversion explicite avec Number() pour éviter l'échec 2 === "2"
      const idParam = Number(this.$route.params.id);
      return this.store.books.find((b) => b.id === idParam);
    },
  },
  methods: {
    retour() {
      // Navigation programmatique vers la page précédente
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.btn-retour {
  margin-bottom: 20px;
  background-color: #e2e8f0;
  border: none;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}
.btn-retour:hover {
  background-color: #cbd5e1;
}
.details-card {
  background: white;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}
.book-cover {
  display: block;
  width: min(100%, 280px);
  height: 360px;
  object-fit: contain;
  margin: 0 auto 20px;
  border-radius: 4px;
}
.fav-badge {
  color: #b45309;
  background-color: #fef3c7;
  padding: 2px 8px;
  border-radius: 4px;
}
.not-found-book {
  color: #dc2626;
}
</style>
