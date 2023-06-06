<template>
    <div class="sec-nav">
        <div class="sec-nav-item" :id="item.state" v-for="(item, index) in items" :key="index">
            <router-link :to="{ name: `${item.route}` }" class="p">{{ item.title }}</router-link>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SecNavigation',
    props: [
        'items'
    ]
}
</script>

<style scoped lang="scss">
.sec-nav {
    display: flex;
    margin-bottom: 75px;

    .sec-nav-item {
        width: 50%;
        text-align: center;

        div {
            width: 100%;
            height: 1px;
            border-radius: 10px;
            margin-top: 10px;
            background: #FBB786;
        }

        &#inactive {
            opacity: .5;

            div {
                display: none;
            }
        }
    }
}
</style>