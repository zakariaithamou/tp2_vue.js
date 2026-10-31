<template>
  <div class="home">
    <div class="header-section">
      <h1>Offres d'emploi</h1>
      <router-link to="/add" class="btn-create">+ Nouvel emploi</router-link>
    </div>
    <FilterNav
      :current-filter="activeFilter"
      @filter-change="activeFilter = $event"
    />

    <div v-if="loading" class="info-msg">Chargement des offres...</div>
    <div v-else-if="error" class="error-msg">{{ error }}</div>
    <div v-else-if="filteredJobs.length === 0" class="info-msg">
      Aucun emploi trouvé.
    </div>

    <div v-else class="jobs-list">
      <div v-for="job in filteredJobs" :key="job.id" class="job-card">
        <div>
          <h3>{{ job.title }}</h3>
          <p class="description">{{ job.description }}</p>
          <div class="meta">
            <span><strong>Salaire :</strong> {{ job.salary }} DH</span>
            <span
              ><strong>Expérience :</strong>
              {{ job.experienceYears }} an(s)</span
            >
            <span><strong>Date :</strong> {{ job.createdAt }}</span>
          </div>
        </div>
        <div>
          <router-link :to="`/jobs/${job.id}`" class="btn-detail"
            >Voir détails</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterNav from "../components/FilterNav.vue";

export default {
  name: "Home",
  components: { FilterNav },
  data() {
    return {
      jobs: [],
      loading: true,
      error: null,
      activeFilter: "all",
      uri: "http://localhost:3000/jobs",
    };
  },
  computed: {
    filteredJobs() {
      if (this.activeFilter === "all") {
        return this.jobs;
      }
      return this.jobs.filter((job) => job.category === this.activeFilter);
    },
  },
  mounted() {
    fetch(this.uri)
      .then((res) => {
        if (!res.ok) throw new Error("Erreur lors du chargement des données");
        return res.json();
      })
      .then((data) => {
        this.jobs = data;
        this.loading = false;
      })
      .catch((err) => {
        this.error = err.message;
        this.loading = false;
        console.log(err);
      });
  },
};
</script>

<style scoped>
.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.btn-create {
  background-color: #226b53;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
}

.jobs-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.job-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
}

.job-card h3 {
  margin: 0 0 6px 0;
}

.description {
  color: #64748b;
  margin: 0 0 10px 0;
}

.meta {
  display: flex;
  gap: 16px;
  font-size: 0.85rem;
  color: #475569;
}

.btn-detail {
  background-color: #4d4d4f;
  color: white;
  padding: 8px 14px;
  border-radius: 6px;
  text-decoration: none;
  white-space: nowrap;
}

.info-msg,
.error-msg {
  padding: 20px;
  text-align: center;
}
.error-msg {
  color: #741414;
}
</style>
