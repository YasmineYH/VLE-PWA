<template>
  <div class="welcome-screen login">
    <div class="student-login" v-if="level == 'student'">
      <LogoText text="Student Portal"/>

      <form @submit.prevent="studentLogin()">
        <div class="input-ctn">
          <label class="p" for="matric no">Matric Number:</label>
          <div class="input-border">
            <input type="text" name="matric no" v-model="matricNo">
          </div>
        </div>

        <div class="input-ctn">
          <label class="p" for="password">Password:</label>
          <div class="input-border">
            <input type="password" name="password" v-model="password">
          </div>
        </div>

        <button type="submit" class="main-btn">Login</button>
      </form>
    </div>


    <div class="lecturer-login" v-if="level == 'lecturer'">
      <LogoText text="Lecturer Portal"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LogoText from '@/components/LogoText.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default {
  name: 'LoginView',
  components: {
    LogoText
  },
  setup() {
    const level = 'student'

    const router = useRouter()

    const matricNo = ref('')
    const password = ref('')

    function studentLogin() {
      router.push({ name: 'studentdashboard'})
    }

      return {
        level,
        studentLogin,
        matricNo,
        password
      }
  }
}
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 500px;
  margin-top: 125px;

  .input-ctn {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      margin-left: 10px;
    }

    .input-border {
      position: relative;
      width: 100%;
      height: 45px;
      border-radius: 5px;
      background: linear-gradient(to top, #FBB786 0%, rgba(251, 183, 134, 0) 100%);
      transition: all .2s ease-in;

      &:hover,
      &:focus {
        border: none;
        outline: none;
        transform: scaleX(1) translateY(2px);
      }

      input {
        border: none;
        position: absolute;
        inset: 0 1.5px 1.5px 2px;
        padding: 5px 10px 0 10px;
        color: #00183D;
        background: #FFF9F6;
        border-radius: 4px;
        transition: all .2s ease-in;

        &:hover,
        &:focus {
          outline: none;
        }
      }
    }
  }

  .main-btn {
    margin-top: 15px;
  }
}
</style>