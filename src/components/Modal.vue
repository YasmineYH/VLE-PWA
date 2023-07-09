<template>
    <div class="modal" v-if="modalView.isOpen">
        <div class="modal-content-border">
            <div class="modal-content">
                <div class="title">
                    <p class="p">Add to device?</p>
                    <img @click="$emit('closeModal')" :src="require('@/assets/images/close.svg')" alt="Close Icon">
                </div>

                <div class="message-border">
                    <div class="message">
                        <p class="p">Would you like to continue with the download of ‘Introdution.pdf’?</p>
                        <button class="main-btn inverted">Download</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import { ref } from 'vue'

export default {
    name: 'AssignmentCard',
    props: [
        'modalView',
    ],
    emits: ['closeModal'],
    setup () {


        return {
        }
    }
}
</script>

<style scoped lang="scss">
.modal {
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    background: rgba(0, 0, 0, 0.75);
    z-index: 10;

    .modal-content-border {
        width: 450px;
        height: 245px;
        border-radius: 5px;
        background: linear-gradient(180deg, #FBB786 0%, #FFFFFF 65%);

        .modal-content{
            width: calc(100% - 4px);
            height: calc(100% - 4px);
            background: #FFFFFF;
            margin-top: 2px;
            margin-left: 2px;
            border-radius: 4px;
            padding: 8px;

            .title {
                display: flex;
                justify-content: space-between;
                padding: 8px 25px 20px 25px;

                img {
                    cursor: pointer;
                }
            }
        }

        .message-border {
            border-radius: 5px;
            width: 100%;
            height: calc(100% - 53px);
            background: linear-gradient(180deg, #FFFFFF 0%, #FBB786);

            .message {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 20px;
                width: calc(100% - 3px);
                height: calc(100% - 2px);
                background: #FFFFFF;
                margin-top: 2px;
                margin-left: 1.5px;
                padding: 10px;
                border-radius: 4px;

                p {
                    margin-top: 15px;
                    text-align: center;
                }

                button {
                    width: 145px;
                }
            }
        }
    }
}
</style>