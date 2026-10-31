<template>
  <form class="add-form" @submit.prevent="handleSubmit">
    <div class="field">
      <label>Titre :</label>
      <input ref="titreInput" v-model.trim="title" type="text" required />
    </div>
    <div class="field">
      <label>Auteur :</label>
      <input v-model.trim="author" type="text" required />
    </div>
    <div class="field">
      <label>Année :</label>
      <input v-model.number="year" type="number" required />
    </div>
    <button type="submit">Ajouter</button>
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
  mounted() {
    this.$refs.titreInput.focus();
  },
  methods: {
    handleSubmit() {
      if (!this.title || !this.author || !this.year) return;
      this.$emit("add-book", {
        title: this.title,
        author: this.author,
        year: this.year,
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
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: flex-end;
  background: white;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}
.field {
  display: flex;
  flex-direction: column;
}
.field label {
  font-size: 0.8rem;
  margin-bottom: 4px;
}
.field input {
  padding: 6px 8px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
}
button {
  padding: 7px 16px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
