<template>
  <div>
    <BaseNavbar></BaseNavbar>
    <div class="container mt-4">
      <h2>Bienvenido {{userId}}</h2>
    </div>
  </div>
</template>

<script>
import BaseNavbar from '@/components/BaseNavbar'
import { mapState } from 'vuex';
export default {
  components: {
    BaseNavbar
  },
  computed: {
    ...mapState(['userId'])
  }
};
</script>

<style scoped>

</style>