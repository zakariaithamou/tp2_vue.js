<template>
  <form class="add-form" @submit.prevent="handleSubmit">
    <h3>Ajouter un nouveau livre</h3>

    <div class="form-group">
      <label for="titre">Titre :</label>
      <!-- ref template pour le focus automatique -->
      <input id="titre" ref="titreInput" v-model.trim="title" type="text" />
    </div>

    <div class="form-group">
      <label for="auteur">Auteur :</label>
      <input id="auteur" v-model.trim="author" type="text" />
    </div>

    <div class="form-group">
      <label for="annee">Année :</label>
      <input
        id="annee"
        v-model.number="year"
        type="number"
        placeholder="Ex: 1943"
      />
    </div>

    <button type="submit" :disabled="!isFormValid">Ajouter au catalogue</button>
  </form>
</template>

<script>
export default {
  name: "AddBookForm",
  emits: ["add-book"],
  data() {
    return {
      title: "",
      author: "",
      year: new Date().getFullYear(),
    };
  },
  computed: {
    isFormValid() {
      return this.title.length > 0 && this.author.length > 0 && this.year > 0;
    },
  },
  mounted() {
    // Bonus : placement automatique du curseur dans le premier champ
    this.$refs.titreInput.focus();
  },
  methods: {
    handleSubmit() {
      if (!this.isFormValid) return;

      this.$emit("add-book", {
        id: Date.now(),
        title: this.title,
        author: this.author,
        year: this.year,
        isFav: false,
      });

      this.title = "";
      this.author = "";
      this.year = new Date().getFullYear();
      this.$refs.titreInput.focus();
    },
  },
};
</script>

<style scoped>
.add-form {
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)) auto;
  align-items: end;
  gap: 12px;
}
.add-form h3 {
  grid-column: 1 / -1;
  margin: 0;
}
.form-group {
  display: flex;
  flex-direction: column;
}
.form-group label {
  font-size: 0.85rem;
  margin-bottom: 4px;
  color: #475569;
}
.form-group input {
  padding: 8px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
}
button {
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
button:disabled {
  background-color: #94a3b8;
  cursor: not-allowed;
}

@media (max-width: 640px) {
  .add-form {
    grid-template-columns: 1fr;
    align-items: stretch;
  }
}
</style>
