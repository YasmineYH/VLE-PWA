<template>
    <div class="account-screen">
      <MainNavigation level="student" :matricNo=studentData.matricNo :firstName=studentData.firstName :lastName=studentData.lastName :picture=studentData.picture />
  
      <div class="account-content">
          <h1 class="h1">Assignments</h1>
  
          <div class="account-main-content">
              <SecNavigation :items=secNavLinks />

              <div class="cards-container">
                <div class="course-set">
                    <div class="cards-sorter">
                        <img :src="require(`@/assets/images/downarrow.svg`)" alt="Down Arrow Icon">
                        <p class="p">CSC 421</p>
                    </div>
                    
                    <div class="cards">
                        <AssignmentCard icon="edit.svg" cta="Click to submit" text="Lecture 2 - Essay" date="17/08/2022" />
                        <AssignmentCard icon="edit.svg" cta="Click to submit" text="Lecture 3 - Theory" date="17/08/2022" />
                        <AssignmentCard icon="edit.svg" cta="Click to submit" text="Lecture 4 - MCQ" date="17/08/2022" />
                    </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import MainNavigation from '@/components/MainNavigation.vue'
  import SecNavigation from '@/components/SecNavigation.vue'
  import AssignmentCard from '@/components/AssignmentCard.vue'
  import { students } from '@/assets/data/students'
  
  export default {
      components: {
          MainNavigation,
          SecNavigation,
          AssignmentCard
      },
      setup() {
          const studentData = students.beautiful
          const secNavLinks = [
            {
                title: 'Pending Submissions',
                route: 'studentassignmentsPS',
                state: 'active'
            },
            {
                title: 'Recently Submitted',
                route: 'studentassignmentsRS',
                state: 'inactive'
            }
          ]
  
          return {
              students,
              studentData,
              secNavLinks
          }
      }
  }
  </script>
  
  <style scoped lang="scss">
      .account-main-content {
          margin-top: 75px;
          height: calc(100% - 110px);
          overflow-y: hidden;
      }
  </style>