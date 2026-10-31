<template>
  <div class="book-card" :class="{ 'is-fav': book.isFav }">
    <div class="card-content">
      <h3>{{ book.title }}</h3>
      <p class="author">Auteur : {{ book.author }}</p>
      <p class="year">Année : {{ book.year }}</p>

      <div class="card-actions-bar">
        <button
          class="btn-fav"
          :class="{ active: book.isFav }"
          @click="toggleFavorite"
        >
          {{ book.isFav ? "★ Favori" : "☆ Marquer en favori" }}
        </button>

        <!-- Slot nommé actions placé après le badge favori -->
        <div class="custom-actions">
          <slot name="actions"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookCard",
  props: {
    // Validation complète de la prop book
    book: {
      type: Object,
      required: true,
      validator(value) {
        return typeof value.title === "string" && value.title.trim().length > 0;
      },
    },
  },
  emits: ["toggle-fav"],
  methods: {
    toggleFavorite() {
      // Respect du flux unidirectionnel : notification envoyée au parent
      this.$emit("toggle-fav", this.book.id);
    },
  },
};
</script>

<style scoped>
.book-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  background-color: #ffffff;
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}
.book-card.is-fav {
  border-color: #f59e0b;
  background-color: #fffbeb;
}
.book-card h3 {
  margin: 0 0 8px 0;
  color: #1e293b;
}
.author,
.year {
  margin: 4px 0;
  color: #64748b;
  font-size: 0.9rem;
}
.card-actions-bar {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.btn-fav {
  padding: 6px 12px;
  border: 1px solid #cbd5e1;
  background-color: #f8fafc;
  border-radius: 4px;
  cursor: pointer;
}
.btn-fav.active {
  background-color: #fef3c7;
  border-color: #f59e0b;
  color: #b45309;
}
</style>
