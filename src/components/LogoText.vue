<template>
  <div class="logo-text">
    <div class="logo-ctn">
        <img src="@/assets/images/logo.png" alt="Uni Logo">
        <router-link class="logo-link" to="/"></router-link>
    </div>

    <h1 class="h1">{{ text }}</h1>
  </div>
</template>

<script>
export default {
    name: 'LogoText',
    props: [
        'text'
    ]
}
</script>

<style scoped lang="scss">
.logo-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .logo-ctn {
        position: relative;

        img {
            width: 150px;
        }

        .logo-link {
            display: block;
            position: absolute;
            inset: 0;
        }
    }
}
</style>