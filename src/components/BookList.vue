<template>
  <div class="book-list">
    <div v-if="books.length === 0" class="empty">Aucun livre à afficher.</div>
    <div v-else class="grid">
      <!-- Vous pouvez remplacer BookCard par BookCardSetup pour tester le bonus -->
      <BookCard
        v-for="book in books"
        :key="book.id"
        :book="book"
        @toggle-fav="$emit('toggle-fav', $event)"
      >
        <template #actions>
          <!-- Navigation déclarative vers la vue détail -->
          <router-link :to="`/livre/${book.id}`" class="btn-link">
            Voir détails
          </router-link>
          <button class="btn-delete" @click="$emit('delete-book', book.id)">
            Supprimer
          </button>
        </template>
      </BookCard>
    </div>
  </div>
</template>

<script>
import BookCard from "./BookCard.vue";
import BookCardSetup from "./BookCardSetup.vue";

export default {
  name: "BookList",
  components: {
    BookCard,
    BookCardSetup,
  },
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
  emits: ["toggle-fav", "delete-book"],
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 20px;
}
.btn-link {
  font-size: 0.85rem;
  color: #2563eb;
  text-decoration: none;
  padding: 4px 8px;
  background: #eff6ff;
  border-radius: 4px;
}
.btn-link:hover {
  text-decoration: underline;
}
.btn-delete {
  font-size: 0.85rem;
  background-color: #fee2e2;
  color: #b91c1c;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
