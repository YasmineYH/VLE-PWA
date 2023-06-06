<template>
    <div class="modal" v-if="modalShowing">
        <div class="modal-content-border">
            <div class="modal-content">
                <div class="title">
                    <p class="p">Add to device?</p>
                    <img @click="toggle(modalShowing)" :src="require('@/assets/images/close.svg')" alt="Close Icon">
                </div>

                <div class="message">
                    <p class="p">Would you like to continue with the download of ‘Introdution.pdf’?</p>
                    <button class="main-btn">Download</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AssignmentCard',
    props: [
        'modalShowing',
    ],
    setup () {
        const toggle = (item) => {
            console.log(item)
            item = false
            console.log(item)
        }

        return {
            toggle
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
        background: linear-gradient(180deg, #FBB786 0%, #FFF9F6 65%);

        .modal-content{
            width: calc(100% - 4px);
            height: calc(100% - 4px);
            background: #FFF9F6;
            margin-top: 2px;
            margin-left: 2px;
            border-radius: 4px;

            .title {
                display: flex;
                justify-content: space-between;
                padding: 20px 35px;
            }
        }
    }
}
</style>