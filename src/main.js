import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
// import highlight from 'highlight.js/lib/core'
import 'element-ui/lib/theme-chalk/index.css'
import 'highlight.js/styles/github.css'
import '@/assets/css/element-ui.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(highlight)

router.beforeEach((to, from, next) => {
    if (to.path === '/') {
        next({ name: 'Welcome' })
    } else {
        next()
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
