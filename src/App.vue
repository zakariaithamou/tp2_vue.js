<template>
  <div class="app-layout">
    <header class="navbar">
      <h2>Gestion des Emplois</h2>
      <nav>
        <router-link to="/">Accueil</router-link>
        <router-link to="/add" class="btn-nav">+ Publier un emploi</router-link>
      </nav>
    </header>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #9f9f9f;
  color: #1e293b;
}

.app-layout {
  max-width: 900px;
  margin: 0 auto;
  padding: 16px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 24px;
}

nav a {
  text-decoration: none;
  color: #475569;
  margin-left: 16px;
  font-weight: 500;
}

nav a.router-link-exact-active {
  color: #1e293b;
  font-weight: 700;
}

.btn-nav {
  background-color: #1e293b;
  color: #ffffff !important;
  padding: 8px 14px;
  border-radius: 6px;
}
</style>
