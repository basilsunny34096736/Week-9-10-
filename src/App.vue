<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen d-flex flex-column">
    <!-- Top Navigation -->
    <nav class="navbar navbar-expand bg-light border-bottom px-3 py-2">
      <RouterLink class="navbar-brand fw-bold me-3" :to="{ name: 'Home' }">
        Library App
      </RouterLink>
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link" :to="{ name: 'Home' }">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" :to="{ name: 'About' }">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" :to="{ name: 'Dashboard' }">Dashboard</RouterLink>
        </li>
      </ul>
    </nav>

    <!-- Route outlet -->
    <main class="container py-4 flex-fill">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="text-center text-muted py-3 border-top small">
      © {{ new Date().getFullYear() }} Library App
    </footer>
  </div>
</template>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}
</style>
