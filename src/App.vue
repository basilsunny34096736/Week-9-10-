<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen d-flex flex-column">
    <!-- Top Navigation -->
    <nav class="navbar navbar-expand navbar-light bg-light px-3">
      <RouterLink class="navbar-brand fw-bold me-3" :to="{ name: 'Home' }">
        Library App
      </RouterLink>
      <div class="navbar-nav">
        <RouterLink class="nav-link" :to="{ name: 'Home' }">Home</RouterLink>
        <RouterLink class="nav-link" :to="{ name: 'About' }">About</RouterLink>
        <RouterLink class="nav-link" :to="{ name: 'Register' }">Firebase Register</RouterLink>
        <RouterLink class="nav-link" :to="{ name: 'Auth' }">Firebase Sign In</RouterLink>
        <RouterLink class="nav-link" :to="{ name: 'Dashboard' }">Dashboard</RouterLink>
        <RouterLink class="nav-link" :to="{ name: 'AddBook' }">Add Book</RouterLink>
        <RouterLink class="nav-link" :to="{ name: 'BookManagement' }">Book Management</RouterLink>
        <RouterLink class="nav-link" :to="{ name: 'FirebaseFunctions' }">Firebase Functions</RouterLink>
        <RouterLink class="nav-link" :to="{ name: 'Weather' }">Weather API</RouterLink>
        <RouterLink class="nav-link" :to="{ name: 'Api' }">API Counters</RouterLink>
        <RouterLink class="nav-link" :to="{ name: 'GetAllBookApi' }">GetAllBookAPI</RouterLink>
      </div>
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
.navbar .nav-link.router-link-active {
  font-weight: 600;
}
</style>
