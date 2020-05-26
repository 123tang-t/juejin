<template>
  <div id="app" @scroll="changeHomeScroll">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'APP',
    methods: {
        changeHomeScroll (el) {
            console.log('123')
            const height = el.target.scrollHeight - el.target.scrollTop - el.target.clientHeight
            if (height === 0) {
                console.log('到底了')
            } else {
                console.log(height)
            }
        }
    }
}
</script>

<style lang="scss">
// @import './assets/css/element-ui.scss';
* {
    margin: 0;
    padding: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f4f5f5;
    height: 100%;
    overflow-y: auto;
}
// .el-input {
//     .el-input__inner {
//         background: #fbfbfb;
//     }
// }
</style>
