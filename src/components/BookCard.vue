<template>
  <div class="book-card" :class="{ 'is-fav': book.isFav }">
    <img v-if="book.image" class="book-cover" :src="book.image" :alt="`Couverture de ${book.title}`" />
    <h3>{{ book.title }}</h3>
    <p>{{ book.author }} ({{ book.year }})</p>
    <div class="actions-row">
      <button class="btn-fav" @click="$emit('toggle-fav', book.id)">
        {{ book.isFav ? "★ Retirer des favoris" : "☆ Ajouter aux favoris" }}
      </button>
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookCard",
  props: {
    book: {
      type: Object,
      required: true,
      validator(value) {
        return typeof value.title === "string" && value.title.trim().length > 0;
      },
    },
  },
  emits: ["toggle-fav"],
};
</script>

<style scoped>
.book-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
}
.book-card.is-fav {
  border-color: #f59e0b;
  background: #fffbeb;
}
.book-cover {
  display: block;
  width: 100%;
  height: 220px;
  object-fit: contain;
  margin-bottom: 12px;
  border-radius: 4px;
}
.actions-row {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
.btn-fav {
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #cbd5e1;
  background: white;
}
</style>
