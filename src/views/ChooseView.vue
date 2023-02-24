<template>
  <div class="welcome-screen choose">
    <LogoText text="Welcome to Class"/>

    <div class="btn-ctn">
      <router-link class="main-btn" :to="{ name: 'login', params: {level: 'student'}}">Student Portal</router-link>
      <router-link class="main-btn" :to="{ name: 'login', params: {level: 'lecturer'}}">Lecturer Portal</router-link>
    </div>
  </div>
</template>

<script>
import LogoText from '@/components/LogoText.vue'

export default {
  name: 'ChooseView',
  components: {
    LogoText
  }
}
</script>

<style scoped lang="scss">
.btn-ctn {
  display: flex;
  gap: 100px;
  margin-top: 170px;

  .main-btn {
    width: 225px;
  }
}
</style>