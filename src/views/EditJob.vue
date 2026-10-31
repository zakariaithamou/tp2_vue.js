<template>
  <div class="form-container">
    <h2>Modifier l'emploi</h2>

    <div v-if="loading">Chargement des données...</div>

    <form v-else @submit.prevent="handleUpdate">
      <div class="field">
        <label for="title">Titre :</label>
        <input id="title" v-model.trim="job.title" type="text" required />
      </div>

      <div class="field">
        <label for="category">Catégorie :</label>
        <select id="category" v-model="job.category">
          <option value="tech">Tech</option>
          <option value="cloud">Cloud</option>
          <option value="other">Autre</option>
        </select>
      </div>

      <div class="field">
        <label for="salary">Salaire (DH) :</label>
        <input id="salary" v-model.number="job.salary" type="number" required />
      </div>

      <div class="field">
        <label for="exp">Années d'expérience :</label>
        <input
          id="exp"
          v-model.number="job.experienceYears"
          type="number"
          min="0"
          required
        />
      </div>

      <div class="field">
        <label for="description">Description :</label>
        <textarea
          id="description"
          v-model.trim="job.description"
          rows="5"
          required
        ></textarea>
      </div>

      <div class="actions">
        <button type="submit" class="btn-update">Mettre à jour</button>
        <button
          type="button"
          class="btn-cancel"
          @click="$router.push(`/jobs/${id}`)"
        >
          Annuler
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditJob",
  props: ["id"],
  data() {
    return {
      job: {},
      loading: true,
      uri: `http://localhost:3000/jobs/${this.id}`,
    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.job = data;
        this.loading = false;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    handleUpdate() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: this.job.title,
          category: this.job.category,
          salary: this.job.salary,
          experienceYears: this.job.experienceYears,
          description: this.job.description,
        }),
      })
        .then(() => {
          this.$router.push(`/jobs/${this.id}`);
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

.btn-update {
  background-color: #d2962e;
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
