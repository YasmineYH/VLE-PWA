<template>
    <div class="card">
        <div>
            <img :src="require(`@/assets/images/${icon}`)" alt="Icon">
        </div>
        <p class="p">{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'LibraryCard',
    props: [
        'icon',
        'text'
    ]
}
</script>

<style scoped lang="scss">
.card {
    position: relative;
    width: 265px;
    height: 175px;
    margin-top: 25px;
    cursor: pointer;
    
    div {
        height: 100%;
        width: calc(100% - 40px);
        margin: auto;
        padding-top: 30px;
        background: linear-gradient(360deg, #FBB786 0%, #FFF9F6 100%);
        border-radius: 5px;
        transition: all .5s ease-in;

        img {
            display: block;
            width: 75px;
            height: 75px;
            margin: auto;
        }
    }

    p {
        position: absolute;
        bottom: 0;
        display: grid;
        place-items: center;
        width: 100%;
        height: 45px;
        border-radius: 5px;
        background: linear-gradient(180deg, #FBB786 0%, #FFF9F6 100%);
        transition: all .3s ease-out;
    }

    &:hover {
        div {
            transform: translateY(-3px);
        }

        p {
            transform: translateY(3px);
        }
    }
}
</style>