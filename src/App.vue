<template>
  <div class="app-layout">
    <header class="app-header">
      <nav>
        <router-link to="/">Accueil</router-link>
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
  background-color: #d6ddf7;
  color: #0f172a;
}
.app-layout {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 16px;
}
.app-header {
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 16px;
  margin-bottom: 24px;
}
nav a {
  text-decoration: none;
  color: #2563eb;
  font-weight: 600;
}
nav a.router-link-exact-active {
  color: #1d4ed8;
  text-decoration: underline;
}
</style>
