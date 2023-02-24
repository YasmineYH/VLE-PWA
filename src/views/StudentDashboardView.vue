<template>
  <div class="account-screen">
    <MainNavigation level="student" :matricNo=studentData.matricNo :firstName=studentData.firstName :lastName=studentData.lastName :picture=studentData.picture />

    <div class="dashboard-content">
        <h1 class="h1">Good Morning, Ms. {{ studentData.firstName }}</h1>

        <div class="dashboard-main-content">
            <div class="side-nav">
                <div v-for="(sidebar, index) in sideBars" :key="index">
                    <img :src="require(`@/assets/images/${sidebar.icon}`)" :alt="sidebar.title">
                    <p class="p-small">{{ sidebar.title }}</p>
                </div>
            </div>

            <div class="dashboard-main">
                <div class="announcement"></div>

                <div class="carousel">
                    <img src="@/assets/images/leftarrow.svg" alt="Left Arrow">

                    <div class="carousel-content">
                        <DashboardCard v-for="(carousel, index) in carousels" :key="index" :text="carousel.title" :img="carousel.img"/>
                    </div>

                    <img src="@/assets/images/rightarrow.svg" alt="Right Arrow">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue'
import DashboardCard from '@/components/DashboardCard.vue'
import { students } from '../assets/data/students'
import { dashboardContent } from '../assets/data/dashboardContent'
//import { useRoute } from 'vue-router'
//import { ref, watch } from 'vue'

export default {
    components: {
        MainNavigation,
        DashboardCard
    },
    setup() {
        /*const route = useRoute()
        const studentData = ref()

        watch (
            () => route.params.password,
            async newPassword => {
                studentData.value = await fetchStudent(newPassword)
            }
        )

        function fetchStudent(pass) {
            return students[pass]
        } */

        const studentData = students.beautiful

        const sideBars = dashboardContent.studentSideBar
        const carousels = dashboardContent.studentCarousel

        return {
            students,
            studentData,
            sideBars,
            carousels
        }
    }
}
</script>

<style scoped lang="scss">
.dashboard-content {
    width: 100%;
    padding: 140px 90px 25px 0;
    height: calc(99.9 * var(--vh));

    .dashboard-main-content {
        display: flex;
        gap: 75px;
        margin-top: 70px;
        height: calc(100% - 95px);
        width: 100%;

        .side-nav {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 175px;
            height: 100%;

            div {
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: end;
                gap: 15px;
                width: 100%;
                height: 75px;
                box-shadow: inset 0px 10px 10px rgba(0, 0, 0, 0.05);
                background: linear-gradient(180deg, #FBB786 0%, rgba(251, 183, 134, 0) 100%);
                border-radius: 5px;

                img {
                    width: 30px;
                    height: 30px;
                }
            }
        }

        .dashboard-main {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 35px;

            .announcement {
                position: relative;
                width: 100%;
                height: 100%;
                background: linear-gradient(180deg, #FBB786 0%, rgba(255, 255, 255, 0) 100%);
                border-radius: 5px;

                &::before {
                    content: '';
                    position: absolute;
                    inset: 2px;
                    border-radius: 4px;
                    background: #FFECE3;
                    box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.03);
                }
            }

            .carousel {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 15px;

                img {
                    width: 10px;
                    height: 10px;
                }

                .carousel-content {
                    display: flex;
                    gap: 75px;
                }
            }
        }
    }
}
</style>