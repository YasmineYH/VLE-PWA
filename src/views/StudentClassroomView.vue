<template>
  <div class="account-screen">
    <MainNavigation level="student" :matricNo=studentData.matricNo :firstName=studentData.firstName :lastName=studentData.lastName :picture=studentData.picture />

    <div class="account-content">
        <h1 class="h1">Classroom</h1>

        <div class="account-main-content">
            <div class="participants">
                <div class="participants-ctn">
                    <div class="participant" v-for="(student, index) in students" :key="index">
                        <div class="img-border">
                            <img :src="require(`@/assets/data/profiles/${student.picture}`)" :alt="student.lastName">
                        </div>
                        <div>
                            <h2 class="h2">{{ student.firstName }} {{ student.lastName }}</h2>
                            <p class="p-small">{{ student.matricNo }}</p>
                        </div>
                    </div>
                </div>
                <p class="now-active p">Now Active</p>
            </div>

            <div class="chatroom">
                <div class="chats">
                    <div class="chat you">
                        <p class="sender p">You</p>
                        <p class="p">Hey guys!</p>
                        <span>12:03pm</span>
                    </div>
                    <div class="chat you">
                        <p class="sender p">You</p>
                        <p class="p">If you can trace every accomplishment in your life to some effort of yours (rather than grace), then the hand of God has been missing in your life.</p>
                        <span>12:05pm</span>
                    </div>
                    <div class="chat">
                        <p class="sender p">SAVADOGO Eliezer</p>
                        <p class="p">Morning pal. That's quite insightful, thank you</p>
                        <span>12:33pm</span>
                    </div>
                    <div class="chat you">
                        <p class="sender p">You</p>
                        <p class="p">Everyone born again is put into a family. And that means something.</p>
                        <span>1:43pm</span>
                    </div>
                    <div class="chat">
                        <p class="sender p">Are Samuel</p>
                        <p class="p">What are we discussing? Sorry I'm mate</p>
                        <span>2:00pm</span>
                    </div>
                    <div class="chat">
                        <p class="sender p">Are Samuel</p>
                        <p class="p">*late</p>
                        <span>2:00pm</span>
                    </div>
                </div>
            </div>
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
        border: 1px dashed orange;
        display: flex;
        gap: 75px;
        margin-top: 90px;
        height: calc(100% - 125px);

        .participants {
            position: relative;
            width: 40%;

            .participants-ctn {
                display: flex;
                flex-direction: column;
                gap: 25px;
                width: 88%;
                height: 100%;
                border-radius: 5px;
                margin: auto;
                padding: 35px 25px;
                background-image: url('../assets/images/participantsbg.png');
                background-size: cover;
            }

            .participant {
                display: flex;
                align-items: center;
                gap: 12px;

                .img-border {
                    position: relative;
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    background: linear-gradient(180deg, #00183D 0%, #FBB786 100%);

                    img {
                        display: block;
                        position: absolute;
                        inset: 1px 1px 1px 1px;
                        width: calc(100% - 2px);
                        height: calc(100% - 2px);
                        border-radius: 50%;
                        box-shadow: inset 0px 8px 8px 3px rgba(0, 42, 80, 0.85);
                    }
                }

                div {
                    display: fleX;
                    flex-direction: column;
                    gap: 3px;
                }
                
            }

            p.now-active {
                position: absolute;
                bottom: -1px;
                display: grid;
                place-items: center;
                width: 100%;
                height: 50px;
                background: linear-gradient(180deg, #FBB786 0%, rgba(255, 255, 255, 1));
                border-radius: 5px;
                backdrop-filter: blur(7px);
            }
        }

        .chatroom {
            border: 1px dashed;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 35px;
        }
    }
</style>