<template>
    <div class="account-screen">
      <MainNavigation level="student" :matricNo=studentData.matricNo :firstName=studentData.firstName :lastName=studentData.lastName :picture=studentData.picture />
  
      <div class="account-content">
          <h1 class="h1">Library</h1>
  
          <div class="account-main-content">
              <SecNavigation :items=secNavLinks />

              <div class="cards-container">
                <div class="course-set">
                    <div class="cards-sorter">
                        <img :src="require(`@/assets/images/downarrow.svg`)" alt="Down Arrow Icon">
                        <p class="p">CSC 425</p>
                    </div>

                    <div class="cards">
                        <LibraryCard icon="play.svg" text="11/06/2022" />
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
import LibraryCard from '@/components/LibraryCard.vue'
import { students } from '@/assets/data/students'

export default {
    components: {
        MainNavigation,
        SecNavigation,
        LibraryCard
    },
    setup() {
        const studentData = students.beautiful
        const secNavLinks = [
            {
                title: 'Course Materials',
                route: 'studentlibraryCM',
                state: 'inactive'
            },
            {
                title: 'Recorded Classes',
                route: 'studentlibraryRC',
                state: 'active'
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