<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-5">
    <div class="container-fluid justify-content-center">
      <router-link class="navbar-brand" to="/">Gestion des Projets</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Projets</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tasks" class="nav-link">Tâches</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
}
.navbar-brand{
  margin-left: 100px;
}

.navbar-nav {
  margin-left: auto;
  margin-right: auto;
}
.nav-item{
  margin-right: 50px;
  font-weight: 600;
  font-size: 20px;
}
</style>
