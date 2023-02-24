<template>
    <div class="account-screen">
      <MainNavigation level="student" :matricNo=studentData.matricNo :firstName=studentData.firstName :lastName=studentData.lastName :picture=studentData.picture />
  
      <div class="account-content">
          <h1 class="h1">Assignments</h1>
  
          <div class="account-main-content">
              <div class="side-nav">
                  <div v-for="(sidebar, index) in sideBars" :key="index">
                      <img :src="require(`@/assets/images/${sidebar.icon}`)" :alt="sidebar.title">
                      <p class="p-small">{{ sidebar.title }}</p>
                  </div>
              </div>
  
              <div class="chats"></div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import MainNavigation from '@/components/MainNavigation.vue'
  import { students } from '../assets/data/students'
  
  export default {
      components: {
          MainNavigation,
      },
      setup() {
          const studentData = students.beautiful
  
          return {
              students,
              studentData,
          }
      }
  }
  </script>
  
  <style scoped lang="scss">
      .account-main-content {
          border: 1px dashed;
          display: flex;
          gap: 75px;
  
          .side-nav {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              width: 175px;
              height: 100%;
          }
  
          .chats {
              width: 100%;
              display: flex;
              flex-direction: column;
              gap: 35px;
          }
      }
  </style>