<template>
<div class="dashboard-card">
    <div class="img-ctn">
        <img :src="require(`@/assets/images/${img}`)" :alt="text">
    </div>
    <p class="p-bold">{{ text }}</p>

    <router-link class="logo-link" to="/"></router-link>
</div>
</template>

<script>
export default {
    name: 'DashboardCard',
    props: [
        'text',
        'img'
    ]
}
</script>

<style scoped lang="scss">
.dashboard-card {
    position: relative;
    width: 358px;
    height: 172px;

    .img-ctn {
        position: relative;
        width: 318px;
        height: 100%;
        margin: auto;

        img {
            border-radius: 5px;
            width: 100%;
            height: 100%;
        }

        &::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 5px;
            background: rgba(255, 249, 246, 0.15);
            z-index: 1;
        }
    }

    p {
        position: absolute;
        bottom: -1px;
        display: grid;
        place-items: center;
        width: 100%;
        height: 50px;
        background: linear-gradient(180deg, #FBB786 0%, rgba(251, 183, 134, 0) 100%), rgba(255, 255, 255, 0.45);
        border-radius: 5px;
        box-shadow: inset 0px 10px 10px rgba(0, 0, 0, 0.05);
        backdrop-filter: blur(7px);
    }

    
}
</style>