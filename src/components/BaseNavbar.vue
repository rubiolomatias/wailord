<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand d-flex align-items-center" href="#">
        <img src="../assets/logo.png" alt="Logo" style="width: 60px; height: 60px;" class="me-2">
        <span class="fw-bold">Wailord</span>
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/comprar" class="nav-link">Comprar</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/vender" class="nav-link">Vender</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/analisis" class="nav-link">Análisis</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/historial" class="nav-link">Historial</router-link>
          </li>
          <li class="nav-item dropdown">
            <div class="dropdown-toggle d-flex align-items-center border border-dark rounded-pill p-2 hover-bg" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-person-circle me-1"></i>
              <span>{{ userId }}</span>
            </div>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#" @click="handleLogout">Salir</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['userId'])
  },
  methods: {
    ...mapActions(['logout']),
    handleLogout() {
      this.logout();
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.navbar{
  background-color: #E8DDB5;
}
.hover-bg:hover {
  background-color: #F24944;
}

.dropdown-menu {
  margin-top: 8px;
}
</style>
