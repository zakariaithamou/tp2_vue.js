<template>
  <div class="job-detail-view">
    <button class="btn-back" @click="$router.push('/')">← Retour</button>

    <div v-if="loading" class="info-msg">Chargement des détails...</div>
    <div v-else-if="!job.id" class="error-msg">Offre introuvable.</div>

    <div v-else class="detail-card">
      <div class="card-header">
        <h1>{{ job.title }}</h1>
        <div class="actions">
          <router-link :to="`/jobs/${job.id}/edit`" class="btn-edit"
            >Modifier</router-link
          >
          <button class="btn-delete" @click="handleDelete">Supprimer</button>
        </div>
      </div>

      <div class="badges">
        <span class="badge">{{ job.salary }} DH / mois</span>
        <span class="badge">{{ job.experienceYears }} an(s) d'expérience</span>
        <span class="badge date">Créé le : {{ job.createdAt }}</span>
      </div>

      <hr />

      <div class="description">
        <h3>Description du poste</h3>
        <p>{{ job.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobDetail",
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
      .catch((err) => {
        this.loading = false;
        console.log(err);
      });
  },
  methods: {
    handleDelete() {
      const confirmSuppr = confirm(
        `Confirmez-vous la suppression de l'emploi : "${this.job.title}" ?`,
      );
      if (confirmSuppr) {
        fetch(this.uri, { method: "DELETE" })
          .then(() => {
            this.$router.push("/");
          })
          .catch((err) => console.log(err));
      }
    },
  },
};
</script>

<style scoped>
.btn-back {
  background: transparent;
  border: 1px solid #cbd5e1;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 16px;
}

.detail-card {
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  padding: 24px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header h1 {
  margin: 0;
}

.actions {
  display: flex;
  gap: 10px;
}

.btn-edit {
  background-color: #d2962e;
  color: white;
  padding: 8px 14px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
}

.btn-delete {
  background-color: #b63131;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.badges {
  display: flex;
  gap: 10px;
  margin: 16px 0;
}

.badge {
  background: #f1f5f9;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
}

.description p {
  line-height: 1.6;
  color: #475569;
}
</style>
