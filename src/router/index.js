import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/views/default.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: defaultPage,
      redirect:'/index',
      children:[
        {
          path:'/index',
          name:'index',
          component:()=>import('@/page/index.vue')
        },
        {
          path: '/changeCity',
          name:'changeCity',
          component:()=> import('@/page/changeCity.vue')
        },
        {
          path: 's/:name',
          name:'goods',
          component:()=> import('@/page/goodsList.vue'),
        },
        {
          path:'/productDeatil/:title',
          name:'productDeatil',
          props:route=>({
            title: route.params.title
          }),
          component:()=> import('@/page/productDeatil.vue')
        }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: ()=>import('@/views/blank.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: ()=>import('@/page/login.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: ()=>import('@/page/register.vue'),
        }
      ]
    }
  ]
})
