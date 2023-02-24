<template>
  <div class="welcome-screen home">
    <LogoText text="University of Ilorin"/>
    <router-link class="main-btn" to="/chooseview">Continue >></router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import LogoText from '@/components/LogoText.vue'

export default {
  name: 'WelcomeView',
  components: {
    LogoText
  }
}
</script>

<style scoped lang="scss">
.main-btn {
  position: fixed;
  bottom: calc(5 * var(--vh));
  right: calc(6 * var(--vh));
  width: 150px;
}
</style>