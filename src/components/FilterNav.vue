<template>
  <div class="filter-nav">
    <button
      :class="{ active: currentFilter === 'all' }"
      @click="$emit('filter-change', 'all')"
    >
      Tous
    </button>
    <button
      :class="{ active: currentFilter === 'tech' }"
      @click="$emit('filter-change', 'tech')"
    >
      Tech
    </button>
    <button
      :class="{ active: currentFilter === 'cloud' }"
      @click="$emit('filter-change', 'cloud')"
    >
      Cloud
    </button>
  </div>
</template>

<script>
export default {
  name: "FilterNav",
  props: {
    currentFilter: {
      type: String,
      default: "all",
    },
  },
  emits: ["filter-change"],
};
</script>

<style scoped>
.filter-nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

button {
  background: white;
  border: 1px solid #cbd5e1;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  color: #475569;
  font-weight: 500;
}

button.active {
  background-color: #1e293b;
  border-color: #25344a;
  color: white;
}
</style>
