import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'

import 'common/stylus/index.styl'

// 路由配置可看官方文档
Vue.use(VueRouter)
Vue.use(VueResource)

// 创建组件构造器
let app = Vue.extend(App)

let router = new VueRouter({
	linkActiveClass: 'active'
})
// 配置路由
router.map({
    '/goods': {
        component: goods
    },
    '/ratings': {
        component: ratings
    },
    '/seller': {
        component: seller
    }
})

// 挂载到#app上
router.start(app, '#app')

router.go('/goods')
