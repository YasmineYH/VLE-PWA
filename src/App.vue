<template>
  <router-view />
</template>

<script>
//import { computed } from 'vue'

export default {
  name: 'App',
  created() {
		window.addEventListener('resize', this.setHeight)
		this.setHeight()
	},
	methods: {
		setHeight() {
			let vh = window.innerHeight * 0.01
			document.documentElement.style.setProperty('--vh', `${vh}px`)
		}
	}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Montserrat', 'Trebuchet MS';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #00183D;
  background: #FFF9F6;

  .welcome-screen {
    height: calc(99.9 * var(--vh));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .account-screen {
    min-height: calc(99.9 * var(--vh));
    display: flex;
    gap: 70px;
    overflow: hidden;
  }

  .h1 {
    font-family: 'Bell MT';
    font-size: 34px;
    font-weight: 800;
    font-style: normal;
    text-shadow: 0px 0px .5px rgba(0, 0, 0, 1);
  }

  .h2 {
    font-family: 'Bell MT';
    font-size: 17px;
    font-weight: 800;
    font-style: normal;
    text-align: center;
    text-shadow: 0px 0px .2px rgba(0, 0, 0, .3);
  }

  .h3 {
    font-family: 'Bell MT';
    font-size: 14px;
    font-weight: 800;
    font-style: normal;
    text-shadow: 0px 0px .2px rgba(0, 0, 0, .3);
  }

  .p {
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    text-shadow: 0px 0px .5px rgba(0, 0, 0, .4);
    text-decoration: none;
    color: #00183D;
  }

  .p-bold {
    font-weight: 500;
    font-size: 13px;
    text-shadow: 0px 0px .5px rgba(0, 0, 0, .6);
    text-decoration: none;
    color: #00183D;
  }

  .p-small {
    font-weight: 400;
    font-size: 12px;
    text-shadow: 0px 0px .5px rgba(0, 0, 0, .4);
    text-decoration: none;
    color: #00183D;
  }

  .main-btn {
    cursor: pointer;
    text-decoration: none;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 45px;
    gap: 10px;
    border-radius: 5px;
    padding-bottom: 13px;
    font-family: 'Montserrat', 'Trebuchet MS';
    font-weight: 400;
    font-size: 13px;
    color: #00183D;
    text-shadow: 0px 0px .5px rgba(0, 0, 0, .4);
    background: linear-gradient(180deg, #FBB786 0%, rgba(251, 183, 134, 0) 100%);
    transition: all .3s ease-in;

    &:hover {
      border: none;
      outline: none;
      transform: scaleX(1.02) translateY(5px);
    }

    &.inactive {
      background: #FFECE3;

      &:hover {
        cursor: not-allowed;
        transform: scaleX(1) translateY(0px);
      }
    }

    &.inverted {
      background: linear-gradient(180deg, rgba(251, 183, 134, 0) 0%, #FBB786 100%);
      padding-bottom: 5px;
    }
  }


  .account-content {
    width: 100%;
    padding: 110px 70px 5px 0;
    height: calc(99.9 * var(--vh));

    .account-main-content {
        width: calc(100% + 10px);
        padding-right: 10px;
    }
  }

  .cards-container {
    display: flex;
    flex-direction: column;
    gap: 50px;
    overflow-y: scroll;
    height: calc(100% - 110px);
    
    &::-webkit-scrollbar {
        width: 2px;
        background: #FFF9F6;
        border-radius: 50px;
        diplay: none;
    }

    &::-webkit-scrollbar-thumb {
        background: #FBB786;
        background: linear-gradient(180deg, #FFF9F6, #fbb7869f, #FFF9F6);
        border-radius: 50px;
    }

    .course-set {
      .cards-sorter {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
          width: 10px;
          height: 10px;
        }
      }

      .cards {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
      }
    }
  }
}
</style>
