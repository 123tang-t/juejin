<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
body {
    background: #f4f5f5;
    overflow-y: auto;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
@import '@/assets/css/marked.scss';
</style>
