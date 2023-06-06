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
                <button class="main-btn">Join Class</button>

                <div class="chats-border">
                    <div class="chats">
                        <div class="chat you">
                            <p class="sender h3"><span>12:03pm</span> - You</p>
                            <p class="p">Hey guys!</p>
                        </div>
                        <div class="chat you">
                            <p class="sender h3"><span>12:05pm</span> - You</p>
                            <p class="p">If you can trace every accomplishment in your life to some effort of yours (rather than grace), then the hand of God has been missing in your life.</p>
                        </div>
                        <div class="chat">
                            <p class="sender h3">Eliezer Savadogo - <span>12:33pm</span></p>
                            <p class="p">Morning pal. That's quite insightful, thank you</p>
                        </div>
                        <div class="chat you">
                            <p class="sender h3"><span>1:43pm</span> - You</p>
                            <p class="p">Everyone born again is put into a family. And that means something.</p>
                        </div>
                        <div class="chat">
                            <p class="sender h3">Sandrelle Houssou - <span>2:00pm</span></p>
                            <p class="p">What are we discussing? Sorry I'm mate</p>
                        </div>
                        <div class="chat">
                            <p class="sender h3">Sandrelle Houssou - <span>2:00pm</span></p>
                            <p class="p">*late</p>
                        </div>
                        <div class="chat you">
                            <p class="sender h3"><span>2:07pm</span> - You</p>
                            <p class="p">You're always late, Sandy...</p>
                        </div>
                    </div>
                </div>

                <div class="new-message-border">
                    <form action="" class="new-message">
                        <button>
                            <img :src="require(`@/assets/images/emoji.svg`)" alt="Send Icon">
                        </button>
                        <input class="p" type="text" name="message" placeholder="Type a message...">
                        <button>
                            <img :src="require(`@/assets/images/send.svg`)" alt="Send Icon">
                        </button>
                    </form>
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
        display: flex;
        gap: 35px;
        margin-top: 90px;
        height: calc(100% - 125px);

        .participants {
            position: relative;
            width: 38%;
            max-width: 435px;

            .participants-ctn {
                display: flex;
                flex-direction: column;
                gap: 30px;
                width: calc(100% - 40px);
                height: 100%;
                border-radius: 5px;
                margin: auto;
                padding: 25px 15px;
                background-image: url('@/assets/images/participantsbg.png');
                background-size: cover;
            }

            .participant {
                display: flex;
                align-items: center;
                gap: 12px;

                .img-border {
                    position: relative;
                    width: 40px;
                    height: 40px;
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
                background: linear-gradient(180deg, #FBB786 0%, #FFF9F6);
                border-radius: 5px;
                backdrop-filter: blur(15px);
            }
        }

        .chatroom {
            position: relative;
            width: 100%;
            height: 100%;

            .main-btn {
                position: absolute;
                right: 20px;
                top: -65px;
                width: 175px;
                height: 35px;
            }

            .chats-border {
                position: relative;
                width: calc(100% - 40px);
                height: calc(100% - 40px);
                margin: auto;
                background: linear-gradient(180deg, #FBB786 0%, #FFF9F6 65%);
                border-radius: 5px;

                .chats {
                    position: absolute;
                    top: 1.9px;
                    left: 2px;
                    width: calc(100% - 3px);
                    height: calc(100% - 2px);
                    display: flex;
                    flex-direction: column;
                    gap: 35px;
                    padding: 25px 15px;
                    background-color: #FFECE3;
                    border-radius: 4px;
                    overflow-y: scroll;
                    box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.03);
                    scrollbar-color: #FBB786 #FFFFFF;
                    scrollbar-width: thin;

                    &::-webkit-scrollbar {
                        width: 3px;
                        background: #FFFFFF;
                        border-radius: 5px;
                        display: none;
                    }

                    &::-webkit-scrollbar-thumb {
                        background: #FBB786;
                        border-radius: 5px;
                    }

                    .chat {
                        position: relative;
                        background: #FFFFFF;
                        border-radius: 5px;
                        width: fit-content;
                        max-width: 80%;
                        padding: 10px 15px;

                        .sender {
                            position: absolute;
                            top: -20px;
                            width: 350px;

                            span {
                                opacity: .6;
                            }
                        }

                        &.you {
                            align-self: flex-end;
                            text-align: right;
                            background: rgb(255, 255, 255, .5);

                            .sender {
                                right: 10px;
                            }
                        }
                    }
                }
            }

            .new-message-border {
                position: absolute;
                bottom: 0;
                background: linear-gradient(180deg, #FBB786 0%, #FFF9F6);
                width: 100%;
                height: 50px;
                border-radius: 5px;

                .new-message {
                    display: flex;
                    gap: 35px;
                    margin-top: 1.9px;
                    margin-left: 2px;
                    width: calc(100% - 3px);
                    height: calc(100% - 2px);
                    background: #FFFFFF;
                    border-radius: 4px;
                    padding: 5px 45px;

                    button {
                        border: none;
                        background: none;
                        display: grid;
                        place-items: center;
                        transition: all .2s ease-in;
                        cursor: pointer;

                        &:hover {
                            transform: scale(.9) translateY(-1px);
                        }

                        &:nth-of-type(1) {
                            width: 35px;
                            height: 35px;
                        }

                        &:nth-of-type(1) {
                            width: 30px;
                            height: 30px;
                        }
                    }

                    input {
                        outline: none;
                        border: none;
                        height: 40px;
                        width: 100%;

                        &::placeholder {
                            color: #00183D;
                            opacity: .5;
                            font-family: 'Montserrat';
                            font-style: normal;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
</style>