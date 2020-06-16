import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/element-ui.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)

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
