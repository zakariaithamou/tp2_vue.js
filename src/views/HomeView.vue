<template>
  <div class="home-view">
    <h1>Catalogue de livres</h1>

    <!-- Formulaire d'ajout branché sur addBook -->
    <AddBookForm @add-book="addBook" />

    <!-- Liste des livres branchée sur store.books -->
    <BookList
      :books="store.books"
      @toggle-fav="handleToggleFav"
      @delete-book="handleDeleteBook"
    />
  </div>
</template>

<script>
import { store } from "../store/books.js";
import AddBookForm from "../components/AddBookForm.vue";
import BookList from "../components/BookList.vue";

export default {
  name: "HomeView",
  components: {
    AddBookForm,
    BookList,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    addBook(newBookData) {
      // Génération d'un id numérique et ajout dans store.books
      const newBook = {
        id: Date.now(),
        ...newBookData,
        isFav: false,
      };
      this.store.books.unshift(newBook);
    },
    handleToggleFav(bookId) {
      const book = this.store.books.find((b) => b.id === bookId);
      if (book) {
        book.isFav = !book.isFav;
      }
    },
    handleDeleteBook(bookId) {
      const index = this.store.books.findIndex((b) => b.id === bookId);
      if (index !== -1) {
        this.store.books.splice(index, 1);
      }
    },
  },
};
</script>
