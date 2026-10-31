<template>
  <div class="form-container">
    <h2>Ajouter un nouvel emploi</h2>

    <form @submit.prevent="handleSubmit">
      <div class="field">
        <label for="title">Titre :</label>
        <input id="title" v-model.trim="title" type="text" required />
      </div>

      <div class="field">
        <label for="category">Catégorie :</label>
        <select id="category" v-model="category">
          <option value="tech">Tech</option>
          <option value="cloud">Cloud</option>
          <option value="other">Autre</option>
        </select>
      </div>

      <div class="field">
        <label for="salary">Salaire (DH) :</label>
        <input id="salary" v-model.number="salary" type="number" required />
      </div>

      <div class="field">
        <label for="exp">Années d'expérience :</label>
        <input
          id="exp"
          v-model.number="experienceYears"
          type="number"
          min="0"
          required
        />
      </div>

      <div class="field">
        <label for="description">Description :</label>
        <textarea
          id="description"
          v-model.trim="description"
          rows="5"
          required
        ></textarea>
      </div>

      <div class="actions">
        <button type="submit" class="btn-save">Enregistrer</button>
        <button type="button" class="btn-cancel" @click="$router.push('/')">
          Annuler
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddJob",
  data() {
    return {
      title: "",
      category: "tech",
      salary: null,
      experienceYears: 0,
      description: "",
      uri: "http://localhost:3000/jobs",
    };
  },
  methods: {
    handleSubmit() {
      const newJob = {
        title: this.title,
        category: this.category,
        salary: this.salary,
        experienceYears: this.experienceYears,
        description: this.description,
        createdAt: new Date().toISOString().slice(0, 10),
      };

      fetch(this.uri, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newJob),
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

label {
  font-size: 0.9rem;
  margin-bottom: 4px;
  font-weight: 500;
}

input,
select,
textarea {
  padding: 8px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
}

.actions {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

.btn-save {
  background-color: #1e293b;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
}

.btn-cancel {
  background-color: #e2e8f0;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
