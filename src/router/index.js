import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)



  function guardMyroute(to, from, next)
  {
     var isAuthenticated= false;
    //this is just an example. You will have to find a better or 
    // centralised way to handle you localstorage data handling 

    console.log(localStorage.getItem('LoggedUser'))


    if(localStorage.getItem('LoggedUser') == 'true'){
       isAuthenticated = true;
    }
     else{
        isAuthenticated= false;
     }
      
      console.log(isAuthenticated)

     if(isAuthenticated) 
     {
      next(); // allow to enter route
     } 
     else
     {
      next('/'); // go to '/login';
     }
  }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainForm',
      component: () => import('@/views/mainView'),
    },
    {
      path: '/metrobank',
      name: 'metrobankForm',
      beforeEnter : guardMyroute,
      component: () => import('@/views/metrobankForm'),
    },
    {
      path: '/bdo',
      name: 'bdoForm',
      beforeEnter : guardMyroute,
      component: () => import('@/views/bdoForm'),
    },
    {
        path: '/formHistoryMetro',
        name: 'metrobankFormHistory',
        beforeEnter : guardMyroute,
        component: () => import('@/views/metrobankFormHistory'),
    },
    {
      path: '/formHistoryBdo',
      name: 'bdoFormHistory',
      beforeEnter : guardMyroute,
      component: () => import('@/views/bdoFormHistory'),
    },
    {
        path: '/cheque',
        name: 'chequeForm',
        component: () => import('@/views/chequeForm'),
    },
    {
        path: '/chequebdo',
        name: 'chequeFormbdo',
        component: () => import('@/views/chequeFormbdo'),
    }
  ],
    mode: 'history',
    base: process.env.BASE_URL,

})