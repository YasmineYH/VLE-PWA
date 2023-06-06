<template>
    <div class="card">
        <div class="cta">
            <div>
                <img :src="require(`@/assets/images/${icon}`)" alt="Icon">
                <p class="p">{{ cta }}</p>
            </div>
        </div>
        <div class="desc">
            <p class="p">{{ text }}</p>
            <p class="p">{{ date }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AssignmentCard',
    props: [
        'icon',
        'cta',
        'text',
        'date'
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
    
    .cta {
        height: 100%;
        width: calc(100% - 40px);
        margin: 0 auto;
        background: linear-gradient(360deg, #FBB786 0%, rgba(255, 255, 255, 0.75) 100%);
        border-radius: 5px;
        padding: 15px 10px 0 0;
        transition: all .5s ease-in;

        div {
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            gap: 10px;

            img {
                display: block;
                width: 35px;
                height: 35px;
            }

            p {
                text-align: right;
            }
        }
        
    }

    .desc {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 45px;
        padding: 0 15px;
        border-radius: 5px;
        background: linear-gradient(180deg, #FBB786 0%, rgba(255, 255, 255) 100%);
        transition: all .3s ease-out;
    }

    &:hover {
        .cta {
            transform: translateY(-3px);
        }

        .desc {
            transform: translateY(3px);
        }
    }
}
</style>