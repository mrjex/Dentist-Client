<template>
  <div id="app">
    <div class="auth-inner">
      <Navbar />
      <b-container class="py-3">
        <router-view />
      </b-container>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar }
}
</script>
