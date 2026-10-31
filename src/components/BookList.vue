<template>
  <div class="book-list">
    <div v-if="books.length === 0" class="empty-message">
      Aucun livre disponible.
    </div>
    <div v-else class="grid">
      <BookCard
        v-for="book in books"
        :key="book.id"
        :book="book"
        @toggle-fav="$emit('toggle-fav', $event)"
      >
        <!-- Injection de contenu dans le slot nommé 'actions' -->
        <template #actions>
          <button class="btn-detail" @click="afficherDetail(book.title)">
            Détails
          </button>
        </template>
      </BookCard>
    </div>
  </div>
</template>

<script>
import BookCard from "./BookCard.vue";

export default {
  name: "BookList",
  components: {
    BookCard,
  },
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
  emits: ["toggle-fav"],
  methods: {
    afficherDetail(titre) {
      alert(`Consultation des détails de : "${titre}"`);
    },
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 16px;
}
.empty-message {
  color: #94a3b8;
  font-style: italic;
  padding: 16px 0;
}
.btn-detail {
  padding: 6px 10px;
  font-size: 0.85rem;
  background-color: #e2e8f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn-detail:hover {
  background-color: #cbd5e1;
}

@media (max-width: 700px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
