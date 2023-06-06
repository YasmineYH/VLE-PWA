<template>
    <div class="account-screen">
      <MainNavigation level="student" :matricNo=studentData.matricNo :firstName=studentData.firstName :lastName=studentData.lastName :picture=studentData.picture />
      
      <Modal :modalShowing="modalShowing" />
  
      <div class="account-content">
          <h1 class="h1">Library</h1>
  
          <div class="account-main-content">
              <SecNavigation :items=secNavLinks />

              <div class="cards-container">
                <div class="course-set">
                    <div class="cards-sorter">
                        <img :src="require(`@/assets/images/downarrow.svg`)" alt="Down Arrow Icon">
                        <p class="p">CSC 421</p>
                    </div>

                    <div class="cards">
                        <LibraryCard icon="pdf.svg" text="introduction.pdf" v-on:click="toggleModal()" />
                        <LibraryCard icon="pdf.svg" text="introduction.pdf" />
                        <LibraryCard icon="pdf.svg" text="introduction.pdf" />
                    </div>
                </div>

                <div class="course-set">
                    <div class="cards-sorter">
                        <img :src="require(`@/assets/images/downarrow.svg`)" alt="Down Arrow Icon">
                        <p class="p">CSC 427</p>
                    </div>
                    <div class="cards">
                        <LibraryCard icon="pdf.svg" text="introduction.pdf" />
                        <LibraryCard icon="pdf.svg" text="introduction.pdf" />
                        <LibraryCard icon="pdf.svg" text="introduction.pdf" />
                        <LibraryCard icon="pdf.svg" text="introduction.pdf" />
                        <LibraryCard icon="pdf.svg" text="introduction.pdf" />
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
import Modal from '@/components/Modal.vue'
import { students } from '@/assets/data/students'
import { ref } from 'vue'

export default {
    components: {
        MainNavigation,
        SecNavigation,
        LibraryCard,
        Modal
    },
    setup() {
        const studentData = students.beautiful
        const modalShowing = ref(false)
        const toggleModal = () => {
            modalShowing.value = !modalShowing.value
        }
        const secNavLinks = [
        {
            title: 'Course Materials',
            route: 'studentlibraryCM',
            state: 'active'
        },
        {
            title: 'Recorded Classes',
            route: 'studentlibraryRC',
            state: 'inactive'
        }
    ]

        return {
            students,
            studentData,
            secNavLinks,
            modalShowing,
            toggleModal
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