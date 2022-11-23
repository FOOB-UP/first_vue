import * as VueRouter from 'vue-router'
import Left from '../components/Login.vue'
import List from '../components/List.vue'
import Rigit from '../components/Rigit.vue'
import LW from '../components/LW.vue'
import LR from '../components/LR.vue'


const routes =[
  { path:'/', component: ()=>import("../components/Login.vue")},
  { 
      path:'/Login', 
      component:()=>import("../components/Login.vue") ,
  },
  { 
    path:'/user', 
    component:()=>import("../components/LR.vue") ,
}
]

const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes
      // `routes: routes` 的缩写
  })

export default router

