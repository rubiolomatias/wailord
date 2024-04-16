<template>
  <div class="container min-vw-100">
    <div class="row justify-content-center align-items-center min-vh-100">
      <div class="col-md-4">
        <div class="card shadow-lg p-5 rounded" style="border-radius: 1rem;">
          <div class="logo d-flex justify-content-center">
            <img src="../assets/logo.png" alt=""/>
          </div>
          <div class="text-center mb-4">
            <h3>Login</h3>
          </div>
          <form @submit.prevent="handleSubmit">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="usuario"
                placeholder="Username"
                v-model="userId"
              />
              <label for="usuario">Usuario</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Contraseña"
                v-model="password"
              />
              <label for="password">Contraseña</label>
            </div>
            <div v-if="loginError" class="alert alert-danger">
              Usuario o contraseña incorrectos.
            </div>
            <button type="submit" class="btn btn-primary w-100">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      userId: '',
      password: '',
      loginError: false
    };
  },
  methods: {
    ...mapActions(['login']),
    handleSubmit() {
      if (this.userId === 'rubiolomatias' && this.password === '012345') {
        this.login(this.userId);
        this.$router.push({ name: 'home' });
      } else {
        this.loginError = true;
      }
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #E8DDB5;
  background-image: linear-gradient(160deg, #1D5B62 0%, #73D9F9 100%);
}
.logo img {
  width: 200px;
}
</style>
