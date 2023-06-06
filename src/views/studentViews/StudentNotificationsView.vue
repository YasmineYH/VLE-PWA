<template>
    <div class="account-screen">
      <MainNavigation level="student" :matricNo=studentData.matricNo :firstName=studentData.firstName :lastName=studentData.lastName :picture=studentData.picture />
  
      <div class="account-content">
          <h1 class="h1">Notifications</h1>
  
          <div class="account-main-content">
              <div class="notifications">
                <div class="notification now">
                    <div>C</div>
                    <div>
                        <h2 class="h2">CSC 441 class is holding now. Click to join.</h2>
                        <p class="p-small">Today - NOW</p>
                    </div>
                </div>
                <div class="notification">
                    <div>M</div>
                    <div>
                        <h2 class="h2">Mr. S.A. Mojeed started a class for CSC 441.</h2>
                        <p class="p-small">Today - 10:00am</p>
                    </div>
                </div>
                <div class="notification">
                    <div>M</div>
                    <div>
                        <h2 class="h2">Mrs. S.A. Salihu gave out a new assignment.</h2>
                        <p class="p-small">Yesterday - 12:30pm</p>
                    </div>
                </div>
                <div class="notification">
                    <div>C</div>
                    <div>
                        <h2 class="h2">CSC 427 assignment is due today.</h2>
                        <p class="p-small">06/08/2022 - 7:30am</p>
                    </div>
                </div>
                <div class="notification">
                    <div>C</div>
                    <div>
                        <h2 class="h2">CSC 427 assignment’s due date is in 2 days.</h2>
                        <p class="p-small">04/08/2022 - 1:45pm</p>
                    </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  </template>
  
  <script>
  import MainNavigation from '@/components/MainNavigation.vue'
  import { students } from '@/assets/data/students'
  
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
          margin-top: 75px;

          .notifications {
            display: flex;
            flex-direction: column;
            gap: 35px;

            .notification {
                display: flex;
                align-items: center;
                gap: 15px;

                div {
                    &:nth-of-type(1) {
                        display: grid;
                        place-items: center;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        font-size: 18px;
                        background: linear-gradient(180deg, #FBB786 0%, rgba(251, 183, 134, 0) 100%);
                    }

                    &:nth-of-type(2) {
                        display: fleX;
                        flex-direction: column;
                        gap: 5px;
                    }
                }

                &.now {
                    div {
                        &:nth-of-type(1) {
                            transition: 1s background;
                            animation: now 1s infinite ease-out alternate;
                        }

                        &:nth-of-type(2) {
                            transition: .5s all;
                            cursor: pointer;

                            &:hover {
                                transform: translateX(15px);
                            }
                        }

                        @keyframes now {
                            0% {
                                box-shadow: inset 0px 6px 10px rgba(194, 81, 0, 0.3),
                                            inset 0px 6px 15px rgba(194, 81, 0, 0.3);
                            }
                           
                            100% {
                                box-shadow: inset 0px 6px 10px rgb(194, 81, 0, 0),
                                            inset 0px 6px 15px rgb(194, 81, 0, 0);
                            }
                        }
                    }
                }
            }
          }
      }
  </style>