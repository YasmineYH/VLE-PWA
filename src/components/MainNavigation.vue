<template>
    <div>
        <nav class="nav student-nav" v-if="level == 'student'">
            <div class="upper-ul">
                <div class="img-border">
                    <div class="profile-img"></div>
                </div>
                <h2 class="h2">{{ lastName }} {{ firstName}}</h2>
                <p class="p-small">{{ matricNo }}</p>
            </div>

            <ul class="mid-ul">
                <li>
                    <img src="@/assets/images/home.svg" alt="Home Icon">
                    <router-link :to="{ name: 'studentdashboard'}" class="p">Home</router-link>
                </li>
                <li>
                    <img src="@/assets/images/class.svg" alt="Classroom Icon">
                    <router-link :to="{ name: 'studentclassroom'}" class="p">Classroom</router-link>
                </li>
                <li>
                    <img src="@/assets/images/library.svg" alt="Library Icon">
                    <router-link :to="{ name: 'studentlibraryCM'}" class="p">Library</router-link>
                </li>
                <li>
                    <img src="@/assets/images/assignments.svg" alt="Assignments Icon">
                    <router-link :to="{ name: 'studentassignmentsPS'}" class="p">Assignments</router-link>
                </li>
                <li>
                    <img src="@/assets/images/notifications.svg" alt="Notifications Icon">
                    <router-link :to="{ name: 'studentnotifications'}" class="p">Notifications</router-link>
                </li>
            </ul>

            <ul class="bottom-ul">
                <li>
                    <router-link :to="{name: 'studentdashboard'}">
                        <img src="@/assets/images/settings.svg" alt="Settings Icon">
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'studentdashboard'}">
                        <img src="@/assets/images/profile.svg" alt="Profile Icon">
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'chooseview'}">
                        <img src="@/assets/images/logout.svg" alt="Logout Icon">
                    </router-link>
                </li>
            </ul>
        </nav>

        <nav class="nav lecturer-nav" v-if="level == 'lecturer'"></nav>
    </div>
</template>

<script>


export default {
    name: 'MainNavigation',
    props: [
        'level',
        'matricNo',
        'firstName',
        'lastName',
        'picture'
    ],
    setup(props) {
        const profileImg = `background-image: url('require(@/assets/data/profiles/${props.picture}.png)')`

        return {
            profileImg
        }
    }
}
</script>

<style scoped lang="scss">
.nav {
    width: 225px;
    height: calc(99.9 * var(--vh));
    display: flex;
    flex-direction: column;
    padding: 60px 0 25px 0;


    .upper-ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        .img-border {
            position: relative;
            width: 75px;
            height: 75px;
            border-radius: 50%;
            margin-bottom: 15px;
            background: linear-gradient(180deg, #00183D 0%, #FBB786 100%);
            box-shadow: 0px 6px 12px 2px rgba(0, 0, 0, 0.1);

            .profile-img {
                display: block;
                position: absolute;
                inset: 2.4px 1.5px 1.5px 2.2px;
                width: calc(100% - 4px);
                height: calc(100% - 4px);
                border-radius: 50%;
                box-shadow: inset 0px 8px 8px 3px rgba(0, 42, 80, 0.85);
                background-image: url('../assets/data/profiles/YYasmine.png');
                background-size: cover;
            }
        }

        h2 {
            margin-bottom: 5px;
        }
    }

    .mid-ul {
        margin: 90px auto 125px 25px;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        list-style: none;
        gap: 20px;

        li {
            display: flex;
            gap: 20px;
            width: 100%;
            align-items: center;
            transition: all .2s ease-in;

            .p {
                padding: 10px 0;
                height: 100%;
                width: 100%;
            }

            &:hover {
                gap: 30px;
            }

            img {
                width: 20px;
                height: 20px;
            }
        }
    }

    .bottom-ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        width: 75%;
        list-style: none;

        li {
            transition: all .2s ease-in;

            &:hover {
                transform: scale(.9) translateY(-1px);
            }
        }
    }
}
</style>