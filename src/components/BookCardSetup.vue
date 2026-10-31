<template>
  <div class="book-card" :class="{ 'is-fav': book.isFav }">
    <h3>{{ book.title }}</h3>
    <p>{{ book.author }} ({{ book.year }})</p>
    <div class="actions-row">
      <button class="btn-fav" @click="emit('toggle-fav', book.id)">
        {{ libelleFavori }}
      </button>
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

// Déclaration des props avec le même validator
const props = defineProps({
  book: {
    type: Object,
    required: true,
    validator(value) {
      return typeof value.title === "string" && value.title.trim().length > 0;
    },
  },
});

// Déclaration des évènements émis
const emit = defineEmits(["toggle-fav"]);

// Propriété calculée pour le libellé dynamique du bouton
const libelleFavori = computed(() => {
  return props.book.isFav ? "Retirer des favoris" : "Ajouter aux favoris";
});
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
