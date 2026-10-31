<template>
  <main class="app-container">
    <header>
      <h1>Catalogue de Livres</h1>
    </header>

    <AddBookForm @add-book="handleAddBook" />

    <!-- Message de chargement contrôlé via v-show conformément au TP -->
    <div v-show="loading" class="loading-state">
      <p>Chargement des livres en cours...</p>
    </div>

    <!-- Affichage du catalogue une fois le chargement terminé -->
    <section v-show="!loading">
      <h2>Livres enregistrés ({{ books.length }})</h2>
      <BookList :books="books" @toggle-fav="handleToggleFav" />
    </section>
  </main>
</template>

<script>
import BookList from "./components/BookList.vue";
import AddBookForm from "./components/AddBookForm.vue";

const initialBooks = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    isFav: true,
  },
  {
    id: 2,
    title: "Design Patterns",
    author: "Gang of Four",
    year: 1994,
    isFav: false,
  },
  {
    id: 3,
    title: "Refactoring",
    author: "Martin Fowler",
    year: 1999,
    isFav: false,
  },
];

export default {
  name: "App",
  components: {
    BookList,
    AddBookForm,
  },
  data() {
    return {
      books: [],
      loading: true,
    };
  },
  mounted() {
    // Simulation d'un chargement asynchrone avec un délai de 600ms
    setTimeout(() => {
      this.books = [...initialBooks];
      this.loading = false;
    }, 600);
  },
  methods: {
    handleToggleFav(bookId) {
      const book = this.books.find((b) => b.id === bookId);
      if (book) {
        book.isFav = !book.isFav;
      }
    },
    handleAddBook(newBook) {
      this.books.unshift(newBook);
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #d6ddf7;
  color: #0f172a;
}
.app-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 16px;
}
header h1 {
  text-align: center;
  margin-bottom: 24px;
}
.loading-state {
  text-align: center;
  padding: 40px 0;
  color: #64748b;
  font-weight: 500;
}
</style>
