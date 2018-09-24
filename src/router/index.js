import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import todoWork from '@/views/workspace/todoWork.vue'
import Tracking from '@/views/workspace/tracking.vue'
import HistoryWork from '@/views/workspace/historyWork.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/workspace/todoWork',
      component: Index,
      children:[
      	{
      		path: "/workspace/todoWork",
      		name: "todowork",
      		component: todoWork
      	},
      	{
      		path: "/workspace/tracking",
      		name: "tracking",
      		component: Tracking
      	},
      	{
      		path: "/workspace/historyWork",
      		name: "historyWork",
      		component: HistoryWork
      	},

      ]
    }
  ]
})
